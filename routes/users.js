const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const User = require('../models/user');
const Role = require('../models/role');
const Staff = require('../models/staff');
const Customer = require('../models/customer');

// Register
router.post('/register', (req, res, next) => {
  const accounttype = req.body.accounttype;
  let logo = req.body.logo;
  let photo = req.body.photo;
  if (!req.body.logo) {
    logo = 'default-logo.png';
  }
  if (!req.body.photo) {
    photo = 'default-photo.jpg';
  }
  //Create User to register users table

  User.findOne({username: req.body.username}, (err, newUser) => {
    if(err) throw err;

    //existing user found, stop registeration, return error message

    if(newUser) {
      console.log('User already existed');
      res.json({
        success: false,
        msg: 'User already existed'
      });

      return;
    }
    //Create New User
    var newUser = new User({
      user_info: req.body.user_info,
      username: req.body.username,
      accounttype: req.body.accounttype,
      company: req.body.company,
      photo: photo,
      special_permissions: req.body.special_permissions,
      status: req.body.status,
      password: req.body.password,
    });
    // console.log( JSON.stringify( req.body.user_info ));
    User.addUser(newUser, (err, user) => {
       if (err) return res.json({ success: false, error: err });
      if (accounttype === 'staff') {
          let newStaff = new Staff({
            username: req.body.username,
            parent: req.body.parent,
            role: req.body.role_name,
          });
          
          if (req.body.parent) {
            User.findById(req.body.parent, (err, parentStaff) => {
              if(err) throw err;
              Staff.findOne( {username: parentStaff.username},
              (err, userParent) => {
                if (err) console.log(err);
                let child = userParent.child;
                child.push(user._id.toString());
                Staff.create(newStaff, function(err, staff) {
                   if (err) return res.json({ success: false, error: err });
                  Staff.findByIdAndUpdate(
                    userParent._id,
                    {
                      $set: {
                        child: child,
                      },
                    },
                    (err, updateParent) => {
                      if (err) console.log(err);
                    }
                  );
                  res.json({
                    success: true,
                    msg: 'Successfully Added!'
                  });
                  
                });
                
              }
            );

            })
            
          } else {
            Staff.create(newStaff, function(err, staff) {
               if (err) return res.json({ success: false, error: err });
              res.json({
                success: true,
                msg: 'Successfully Added!'
              });
            });
          }
        
      }
      if (accounttype === 'customer') {
        if (req.body.parent) {

          User.findById(req.body.parent, (err, userParent)=> {
          if(err) {
            res.json({
              success: false,
              msg: 'Cannot Find Parent'
            });
          }
            Customer.findOne({username: userParent.username}, (err, userparent) => {
                if (err) console.log(err);

                let child = userparent.child;

                child.push(user._id.toString());

                if (!req.body.logo) {
                  let newCustomer = new Customer({
                    username: req.body.username,
                    parent: req.body.parent,
                    role: req.body.role_name,
                    logo: userparent.logo,
                    customer_info: req.body.customer_info,
                    account_email: req.body.account_email,
                  });
                  Customer.create(newCustomer, function(err, customer) {
                     if (err) return res.json({ success: false, error: err });
                    Customer.findByIdAndUpdate(
                      userparent._id,
                      {
                        $set: {
                          child: child,
                        },
                      },
                      (err, updateParent) => {
                        if (err) console.log(err);
                      }
                    );
                    res.json({
                      success: true,
                      msg: 'Successfully Added!'
                    });
                  });
                } else {
                  let newCustomer = new Customer({
                    username: req.body.username,
                    parent: req.body.parent,
                    role: req.body.role_name,
                    logo: logo,
                    customer_info: req.body.customer_info,
                    account_email: req.body.account_email,
                  });

                  Customer.create(newCustomer, function(err, customer) {
                     if (err) return res.json({ success: false, error: err });
                    Customer.findByIdAndUpdate(
                      userparent._id,
                      {
                        $set: {
                          child: child,
                        },
                      },
                      (err, updateParent) => {
                        if (err) console.log(err);
                      }
                    );
                    res.json({
                      success: true,
                      msg: 'Successfully Added!'
                    });
                    
                  });
                }
              }
            );
          });
          
        } else {  /** if req.body === null, them  */
          let newCustomer = new Customer({
            username: req.body.username,
            parent: req.body.parent,
            role: req.body.role_name,
            logo: logo,
            customer_info: req.body.customer_info,
            account_email: req.body.account_email,
          });

          Customer.create(newCustomer, function(err, customer) {
             if (err) return res.json({ success: false, error: err });
            res.json({
              success: true,
              msg: 'Successfully Added!'
            });

          });
        }
      }

      
    });

    });
});
//Get Child User -- Recursion Function
var childs = [];

function getChilds(id, done) {
  User.findOne({ _id: id }, (err, user) => {
    if (err) return done(err);

    let modelName;
    if (user.accounttype == 'staff') {
      modelName = 'Staff';
    } else if (user.accounttype == 'customer') {
      modelName = 'Customer';
    }

    mongoose.model(modelName).findOne({ username: user.username }, (err, derived_user) => {
      if (err) return done(err);

      if (derived_user.child.length !== 0) {
        for (let i = 0; i < derived_user.child.length; i++) {
          childs.push(derived_user.child[i]);
          return getChilds(derived_user.child[i], done);
        }
      } else {
        return done();
      }
    });
  });
}

//Get User By Id
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
     if (err) return res.json({ success: false, error: err });
    // res.json(user);
    if (user.accounttype === 'staff') {
      Staff.findOne({ username: user.username },(err, staff) => {
          if (err) return res.json({ success: false, error: err });
          if (user.special_permissions) {
            childs = [];
            getChilds(user._id, (err) => {
              if (err) return res.json({ success: false, error: err });
              res.json({
                success: true,
                user: {
                  userid: user._id,
                  id: staff._id,
                  photo: user.photo,
                  username: user.username,
                  accounttype: user.accounttype,
                  status: user.status,
                  parent: staff.parent,
                  child: childs,
                  special_permissions: user.special_permissions,
                  company: user.company,
                  user_info: user.user_info,
                  role: staff.role,
                },
              });
            });
          } else {
            childs = [];
            getChilds(user._id, (err) => {
              if (err) return res.json({ success: false, error: err });
              res.json({
                success: true,
                user: {
                  userid: user._id,
                  id: staff._id,
                  photo: user.photo,
                  username: user.username,
                  accounttype: user.accounttype,
                  status: user.status,
                  parent: staff.parent,
                  child: childs,
                  company: user.company,
                  user_info: user.user_info,
                  role: staff.role,
                },
              });
            });
          }
        }
      );
    }
    if (user.accounttype === 'customer') {
      Customer.findOne({ username: user.username }, (err, customer) => {
         if (err) return res.json({ success: false, error: err });

        if (user.special_permissions) {
          childs = [];
          getChilds(user._id, (err) => {
            if (err) return res.json({ success: false, error: err });

            console.log(childs);
            res.json({
              success: true,
              user: {
                userid: user._id,
                id: customer._id,
                username: user.username,
                accounttype: user.accounttype,
                parent: customer.parent,
                photo: user.photo,
                logo: customer.logo,
                company: user.company,
                child: childs,
                special_permissions: user.special_permissions,
                user_info: user.user_info,
                customer_info: customer.customer_info,
                role: customer.role,
                account_email: customer.account_email,
              },
            });
          });
        } else {
          childs = [];
          getChilds(user._id, (err) => {
            if (err) return res.json({ success: false, error: err });

            console.log(childs);

            res.json({
              success: true,
              user: {
                userid: user._id,
                id: customer._id,
                username: user.username,
                accounttype: user.accounttype,
                parent: customer.parent,
                photo: user.photo,
                logo: customer.logo,
                company: user.company,
                child: childs,
                user_info: user.user_info,
                customer_info: customer.customer_info,
                role: customer.role,
                account_email: customer.account_email,
              },
            });
          });
        }
      });
    }
  });
});

//Update User
router.put('/:id', function(req, res, next) {
  let id = req.params.id;
  let content = req.body;
  if (req.body.password) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
         if (err) return res.json({ success: false, error: err });
        content.password = hash;
        if (req.body.special_permissions) {
          User.findByIdAndUpdate(req.body.userid, content, (err, user) => {
             if (err) return res.json({ success: false, error: err });
          });
        } else {
          User.findByIdAndUpdate( req.body.userid, content, { $unset: { special_permissions: 1 }}, (err, user) => {
               if (err) return res.json({ success: false, error: err });
            }
          );
        }
      });
    });
  } else {
    if (req.body.special_permissions) { /* if user has the special permissions instead of role */
      User.findByIdAndUpdate(req.body.userid, content, (err, user) => {
         if (err) return res.json({ success: false, error: err });
      });
    } else { /* if user has a role */
        User.findByIdAndUpdate( req.body.userid, {$unset: {special_permissions: 0}}, (err, user) => {
            if (err) return res.json({ success: false, error: err });
            User.findByIdAndUpdate(user._id, content, (err, updateUser) => {
              if (err) console.log(err);
            });
          }
        );
      }
  }

  if (req.body.accounttype === 'staff') { /* if user's accounttype is staff*/
    Staff.findByIdAndUpdate(id, content, (err, staff) => {
       if (err) return res.json({ success: false, error: err });
      res.json(staff);
    });
  } else { /* if user's accounttype is Customer*/
    Customer.findById(id, (err, customer) => {
      if (err) console.log(err);
      if(customer.parent !== req.body.parent) {
        Customer.findById(customer.parent, (err, parentCustomer) => {
          if(err) res.json({ success: false, error: err});
          if(parentCustomer) {
            let child = parentCustomer.child;
            child.splice(customer._id, 1);

            parentCustomer.child = child;

            parentCustomer.save();
          } else {
            console.log('Cannot find Parent Customer');
            return;
          }
        })
      }
      if (customer.child.length !== 0) {
        for (let i = 0; i < customer.child.length; i++) {
          Customer.findOne({username: customer.child[i]}, (err, childCustomer) => {
              if (err) console.log(err);
              if (childCustomer) {
                if (childCustomer.logo === customer.logo) {
                  childCustomer.logo = req.body.logo;
                  childCustomer.save((err, updatedChild) => {
                    if (err) console.log(err);
                  });
                }
              } else {
                console.log('Error, Child Customer already deleted');
              }
            }
          );
        }
      }
    });
    Customer.findByIdAndUpdate(id, content, (err, customer) => {
       if (err) return res.json({ success: false, error: err });
      res.json(customer);
    });
  }
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) return res.json({ success: false, error: err });
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found',
      });
    } else {
      return res.json({
        success: false,
        msg: 'User not found',
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
       if (err) return res.json({ success: false, error: err });
      if (isMatch && user.status === true) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800, // 1 week
        });

        if (user.accounttype === 'super') {
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: user._id,
              username: user.username,
              accounttype: user.accounttype,
            },
          });
        }

        if (user.accounttype === 'staff') {
          Staff.findOne({ username: user.username }, (err, staff) => {
              if (err) return res.json({ success: false, error: err });
              Role.findOne({ role_name: staff.role }, (err, roledata) => {
                  if (err) return res.json({ success: false, error: err });
                  res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                      id: user._id,
                      username: user.username,
                      photo: user.photo,
                      company: user.company,
                      parent: staff.parent,
                      special_permissions: user.special_permissions,
                      accounttype: user.accounttype,
                      role: roledata,
                    },
                  });
                }
              );
            }
          );
        } else {
          Customer.findOne({ username: user.username }, (err, customer) => {
              if (err) return res.json({ success: false, error: err });
              Role.findOne({ role_name: customer.role }, (err, roledata) => {
                  if (err) return res.json({ success: false, error: err });
                  res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                      id: user._id,
                      logo: customer.logo,
                      photo: user.photo,
                      company: user.company,
                      parent: customer.parent,
                      username: user.username,
                      special_permissions: user.special_permissions,
                      accounttype: user.accounttype,
                      role: roledata,
                    },
                  });
                }
              );
            }
          );
        }
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password',
        });
      }
    });
  });
});

//Get All Users
router.get( '/', passport.authenticate('jwt', {session: false}),(req, res, next) => {
    User.find({}, { password: 0}, function(err, users) {
         if (err) return res.json({ success: false, error: err });
        res.json(users);
      }
    );
  }
);

// Inactivate Users
router.post('/inactivate', (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    User.findByIdAndUpdate( req.body[i], { $set: { status: false }}, (err, user) => {
        if (err) return res.json({ success: false, error: err });
      }
    );
  }
  res.json({
    success: true,
    msg: 'Sucess!!',
  });
});

// Deactivate Users
router.post('/activate', (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    User.findByIdAndUpdate( req.body[i], { $set: { status: true } },  (err, user) => {
        if (err) return res.json({ success: false, error: err });
      }
    );
  }
  res.json({
    success: true,
    msg: 'Deactiaveted Successfully',
  });
});

// Delete Users
router.post('/delete', (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    User.findById(req.body[i], (err, user) => {
      if (user.accounttype === 'staff') {
        Staff.findOne({ username: user.username }, (err, staff) => {
            if (err) console.log(err);
            if (staff.parent) {
              Staff.findOne({ username: staff.parent }, (err, parentStaff) => {
                  if (err) console.log(err);
                  if (parentStaff) {
                    if (parentStaff.child.length !== 0) {
                      let index = parentStaff.child.indexOf(user.username);
                      let child = parentStaff.child;

                      child.splice(index, 1);
                      parentStaff.child = child;
                      parentStaff.save((err, updateParent) => {
                        if (err) console.error(err);
                      });
                    }
                  } else {
                    console.log('No parent, or parent already deleted');
                  }
                }
              );
            }
          }
        );
        Staff.findOneAndRemove({ username: user.username }, (err, remove) => {
            if (err) console.error(err);
          }
        );
      }

      if (user.accounttype === 'customer') {
        Customer.findOne({ username: user.username }, (err, customer) => {
            if (err) console.log(err);
            if (customer.parent !== '') {
              Customer.findOne( {
                  username: customer.parent,
                },
                (err, parentCustomer) => {
                  if (err) console.log(err);
                  if (parentCustomer) {
                    if (parentCustomer.child.length !== 0) {
                      let index = parentCustomer.child.indexOf(user.username);
                      let child = parentCustomer.child;

                      child.splice(index - 1, 1);
                      parentCustomer.child = child;

                      parentCustomer.save((err, updateParent) => {
                        if (err) console.error(err);
                      });
                    }
                  } else {
                    console.log('No parent, parnt already deleted');
                  }
                }
              );
            }
          }
        );
        Customer.findOneAndRemove({ username: user.username }, (err, remove) => {
            if (err) console.error(err);
          }
        );
      }
    });
    User.findByIdAndRemove(req.body[i], (err, user) => {
       if (err) return res.json({ success: false, error: err });
    });
  }
  res.json({
    success: true,
    msg: 'Deleted Successfully',
  });
});

module.exports = router;
