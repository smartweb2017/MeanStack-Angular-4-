const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Role = require("../models/role");
const Staff = require("../models/staff");
const Customer = require("../models/customer");

// Register
router.post("/register", (req, res, next) => {
    const accounttype = req.body.accounttype;
    let logo = req.body.logo;
    let photo = req.body.photo;
    if (!req.body.logo) {
        logo = "default-logo.png";
    }
    if (!req.body.photo) {
        photo = "default-photo.jpg";
    }
    //Create User to register users table
    let newUser = new User({
        user_info: req.body.user_info,
        username: req.body.username,
        accounttype: req.body.accounttype,
        company: req.body.company,
        photo: photo,
        special_permissions: req.body.special_permissions,
        status: req.body.status,
        password: req.body.password
    });
    // console.log( JSON.stringify( req.body.user_info ));
    User.addUser(newUser, (err, user) => {
        if (err) throw err;
    });
    //Register Staff Userr with permissions if accounttype is staff user
    if (accounttype === "staff") {
        let newStaff = new Staff({
            username: req.body.username,
            parent: req.body.parent,
            role: req.body.role_name
        });
        if (req.body.parent) {
            Staff.findOne({
                    username: req.body.parent
                },
                (err, userParent) => {
                    if (err) console.log(err);
                    let child = userParent.child;
                    child.push(req.body.username);
                    Staff.findByIdAndUpdate(
                        userParent._id, {
                            $set: {
                                child: child
                            }
                        },
                        (err, updateParent) => {
                            if (err) console.log(err);
                        }
                    );
                }
            );
        }
        Staff.create(newStaff, function(err, staff) {
            if (err) throw err;
            res.json(staff);
        });
    }
    if (accounttype === "customer") {
        if (req.body.parent) {
            Customer.findOne({
                    username: req.body.parent
                },
                (err, userparent) => {
                    if (err) console.log(err);

                    let child = userparent.child;

                    child.push(req.body.username);

                    Customer.findByIdAndUpdate(
                        userparent._id, {
                            $set: {
                                child: child
                            }
                        },
                        (err, updateParent) => {
                            if (err) console.log(err);
                        }
                    );

                    if (!req.body.logo) {
                        let newCustomer = new Customer({
                            username: req.body.username,
                            parent: req.body.parent,
                            role: req.body.role_name,
                            logo: userparent.logo,
                            customer_info: req.body.customer_info,
                            account_email: req.body.account_email
                        });
                        Customer.create(newCustomer, function(err, customer) {
                            if (err) throw err;
                            res.json(customer);
                        });
                    } else {
                        let newCustomer = new Customer({
                            username: req.body.username,
                            parent: req.body.parent,
                            role: req.body.role_name,
                            logo: logo,
                            customer_info: req.body.customer_info,
                            account_email: req.body.account_email
                        });

                        Customer.create(newCustomer, function(err, customer) {
                            if (err) throw err;
                            res.json(customer);
                        });
                    }
                }
            );
        } else {
            let newCustomer = new Customer({
                username: req.body.username,
                parent: req.body.parent,
                role: req.body.role_name,
                logo: logo,
                customer_info: req.body.customer_info,
                account_email: req.body.account_email
            });

            Customer.create(newCustomer, function(err, customer) {
                if (err) throw err;
                res.json(customer);
            });
        }
    }
});
//Get Child User -- Recursion Function
function getChilds(childName) {
  User.findOne({username: childName}, (err, user) => {
    if(err) console.log(err);
    if(user.accounttype === 'staff') {

    }
    if(user.accounttype === 'customer') {
        let childs = [];
      Customer.findOne({username: user.username}, (err, childCustomer) => {
        if(err) console.log(err);
        if(childCustomer.child.length !== 0) {
          for( let i=0; i<childCustomer.child.length; i++) {
          childs.push(childCustomer.child[i]);
          getChilds(childCustomer.child[i]);
          }          
        } else {
        //   childs.push(childCustomer.username);
        }
        return childs;
      });
    }
  });
}
//Get User By Id
router.get("/:id", (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        // res.json(user);
        if (user.accounttype === "staff") {
            Staff.findOne({
                    username: user.username
                },
                (err, staff) => {
                    if (err) throw err;
                    if (user.special_permissions) {
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
                                special_permissions: user.special_permissions,
                                company: user.company,
                                user_info: user.user_info,
                                role: staff.role
                            }
                        });
                    } else {
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
                                company: user.company,
                                user_info: user.user_info,
                                role: staff.role
                            }
                        });
                    }
                }
            );
        }
        if (user.accounttype === "customer") {

          
            Customer.findOne({
                    username: user.username
                },
                (err, customer) => {
                    if (err) throw err;
                    if (user.special_permissions) {

                        if (customer.child.length !== 0) {
                        console.log(getChilds(customer.username));
                        
                        }

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
                                child: customer.child,
                                special_permissions: user.special_permissions,
                                user_info: user.user_info,
                                customer_info: customer.customer_info,
                                role: customer.role,
                                account_email: customer.account_email
                            }
                        });
                    } else {
                      if (customer.child.length !== 0) {                        
                        console.log(getChilds(customer.username));
                        
                        }
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
                                child: customer.child,
                                user_info: user.user_info,
                                customer_info: customer.customer_info,
                                role: customer.role,
                                account_email: customer.account_email
                            }
                        });
                    }
                }
            );
        }
    });
});

//Update User
router.put("/:id", function(req, res, next) {
    let id = req.params.id;
    let content = req.body;
    if (req.body.password) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                content.password = hash;
                if (req.body.special_permissions) {
                    User.findByIdAndUpdate(req.body.userid, content, (err, user) => {
                        if (err) throw err;
                    });
                } else {
                    User.findByIdAndUpdate(req.body.userid, content, {
                        $unset: {
                            special_permissions: 1
                        }
                    }, (err, user) => {
                        if (err) throw err;
                    });
                }

            });
        });
    }
    if (!req.body.password) {
        if (req.body.special_permissions) {
            User.findByIdAndUpdate(req.body.userid, content, (err, user) => {
                if (err) throw err;
            });
        }
        if (!req.body.special_permissions) {
            User.findByIdAndUpdate(req.body.userid, { $unset: { special_permissions: 0 } }, (err, user) => {
                if (err) throw err;
                User.findByIdAndUpdate(user._id, content, (err, updateUser) => {
                    if (err) console.log(err);
                });
            });
        }
    }

    if (req.body.accounttype === "staff") {
        Staff.findByIdAndUpdate(id, content, (err, staff) => {
            if (err) throw err;
            res.json(staff);
        });
    }

    if (req.body.accounttype === "customer") {
        Customer.findById(id, (err, customer) => {
            if (err) console.log(err);
            if (customer.child.length !== 0) {
                for (let i = 0; i < customer.child.length; i++) {
                    Customer.findOne({ username: customer.child[i] }, (err, childCustomer) => {
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
                    });
                }
            }
        });
        Customer.findByIdAndUpdate(id, content, (err, customer) => {
            if (err) throw err;
            res.json(customer);
        });
    }
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch && user.status === true) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                if (user.accounttype === "super") {
                    res.json({
                        success: true,
                        token: "JWT " + token,
                        user: {
                            id: user._id,
                            username: user.username,
                            accounttype: user.accounttype
                        }
                    });
                }

                if (user.accounttype === "staff") {
                    Staff.findOne({
                            username: user.username
                        },
                        (err, staff) => {
                            if (err) throw err;
                            Role.findOne({
                                    role_name: staff.role
                                },
                                (err, roledata) => {
                                    if (err) throw err;
                                    res.json({
                                        success: true,
                                        token: "JWT " + token,
                                        user: {
                                            id: user._id,
                                            username: user.username,
                                            photo: user.photo,
                                            company: user.company,
                                            parent: staff.parent,
                                            special_permissions: user.special_permissions,
                                            accounttype: user.accounttype,
                                            role: roledata
                                        }
                                    });
                                }
                            );
                        }
                    );
                }

                if (user.accounttype === "customer") {
                    Customer.findOne({
                            username: user.username
                        },
                        (err, customer) => {
                            if (err) throw err;
                            Role.findOne({
                                    role_name: customer.role
                                },
                                (err, roledata) => {
                                    if (err) throw err;
                                    res.json({
                                        success: true,
                                        token: "JWT " + token,
                                        user: {
                                            id: user._id,
                                            logo: customer.logo,
                                            photo: user.photo,
                                            company: user.company,
                                            parent: customer.parent,
                                            username: user.username,
                                            special_permissions: user.special_permissions,
                                            accounttype: user.accounttype,
                                            role: roledata
                                        }
                                    });
                                }
                            );
                        }
                    );
                }
            } else {
                return res.json({
                    success: false,
                    msg: "Wrong password"
                });
            }
        });
    });
});

//Get All Users
router.get("/",passport.authenticate("jwt", {session: false}),
  (req, res, next) => {
        User.find({}, {
                password: 0
            },
            function(err, users) {
                if (err) throw err;
                res.json(users);
            }
        );
    }
);
router.post("/inactivate", (req, res, next) => {
    for (let i = 0; i < req.body.length; i++) {
        User.findByIdAndUpdate(
            req.body[i], {
                $set: {
                    status: false
                }
            },
            (err, user) => {
                if (err) throw err;
            }
        );
    }
    res.json({
        success: true,
        msg: "Sucess!!"
    });
});
router.post("/activate", (req, res, next) => {
    for (let i = 0; i < req.body.length; i++) {
        User.findByIdAndUpdate(
            req.body[i], {
                $set: {
                    status: true
                }
            },
            (err, user) => {
                if (err) throw err;
            }
        );
    }
    res.json({
        success: true,
        msg: "Deactiaveted Successfully"
    });
});
router.post("/delete", (req, res, next) => {
    for (let i = 0; i < req.body.length; i++) {
        User.findById(req.body[i], (err, user) => {
            if (user.accounttype === "staff") {
                Staff.findOne({
                        username: user.username
                    },
                    (err, staff) => {
                        if (err) console.log(err);
                        if (staff.parent) {
                            Staff.findOne({
                                    username: staff.parent
                                },
                                (err, parentStaff) => {
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
                Staff.findOneAndRemove({
                        username: user.username
                    },
                    (err, remove) => {
                        if (err) console.error(err);
                    }
                );
            }

            if (user.accounttype === "customer") {
                Customer.findOne({
                        username: user.username
                    },
                    (err, customer) => {
                        if (err) console.log(err);
                        if (customer.parent !== "") {
                            Customer.findOne({
                                    username: customer.parent
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
                Customer.findOneAndRemove({
                        username: user.username
                    },
                    (err, remove) => {
                        if (err) console.error(err);
                    }
                );
            }
        });
        User.findByIdAndRemove(req.body[i], (err, user) => {
            if (err) throw err;
        });
    }
    res.json({
        success: true,
        msg: "Deleted Successfully"
    });
});

module.exports = router;
