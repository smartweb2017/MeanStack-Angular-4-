const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Role = require('../models/role');
const Staff = require('../models/staff');
const Customer = require('../models/customer');
const Store = require('../models/stores');

/* GET ALL STORES */
router.get('/', function(req, res, next) {
  Store.find(function (err, stores) {
    if (err) return next(err);
    res.json(stores);
  });
});

/* GET SINGLE STORE BY ID */
router.get('/:id', function(req, res, next) {
  Store.findById(req.params.id, function (err, store) {
    if (err) return next(err);
    res.json(store);
  });
});

/* SAVE STORE */
router.post('/', function(req, res, next) {
  let newStore = new Store({        
        store_info: req.body.store_info,
        store_title: req.body.store_title,
        key_contact: req.body.key_contact,
        status: req.body.status
    });
  newStore.save(function(err, store) {
    if(err) console.log(err);
    res.json(store);
  });
});

/* UPDATE STORE */
router.put('/:id', function(req, res, next) {
  Store.findByIdAndUpdate(req.params.id, req.body, function (err, store) {
    if (err) return next(err);
    res.json(store);
  });
});

/* DELETE STORE */
router.delete('/:id', function(req, res, next) {
  Store.findByIdAndRemove(req.params.id, req.body, function (err, store) {
    if (err) return next(err);
    res.json(store);
  });
});


/* DELETE STORES */

router.post('/delete', (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Store.findByIdAndRemove(req.body[i], (err, store) => {
      if(err) console.log(err);

    });
  }

  res.json({
    success: true,
    msg: "Deleted Successfully"
  });
});

router.post("/reactivate", (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Store.findByIdAndUpdate(
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
    msg: "Success!!"
  });
});

router.post("/deactivate", (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Store.findByIdAndUpdate(
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

module.exports = router;
