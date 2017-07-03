const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Company = require('../models/company');


/* GET ALL COMPANIES */
router.get('/', function(req, res, next) {
  Company.find(function (err, companies) {
    if (err) return next(err);
    res.json(companies);
  });
});

/* GET SINGLE COMPANY BY ID */
router.get('/:id', function(req, res, next) {
  Company.findById(req.params.id, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* SAVE COMPANY */
router.post('/', function(req, res, next) {
  
  Company.create(req.body.company, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* UPDATE COMPANY */
router.put('/:id', function(req, res, next) {
  
  Company.findByIdAndUpdate(req.params.id, req.body.company, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* DELETE COMPANY */
router.delete('/:id', function(req, res, next) {
 // console.log(req.body);
  Company.findByIdAndRemove(req.params.id,  function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});
router.post("/delete", (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Company.findByIdAndRemove(req.body[i], (err, company) => {
      if (err) console.error(err);
    });
  }
  res.json({
    success: true,
    msg: "Success!!"
  });
});

router.post("/deactivate", (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Company.findByIdAndUpdate(
      req.body[i], {
        $set: {
          status: false
        }
      },
      (err, company) => {
        if (err) throw err;
      });
  }
  res.json({
    success: true,
    msg: "Success!!"
  });
});
router.post("/reactivate", (req, res, next) => {
  for (let i = 0; i < req.body.length; i++) {
    Company.findByIdAndUpdate(
      req.body[i], {
        $set: {
          status: true
        }
      },
      (err, company) => {
        if (err) throw err;
      }
    );
  }
  res.json({
    success: true,
    msg: "Success!!"
  });
});
module.exports = router;
