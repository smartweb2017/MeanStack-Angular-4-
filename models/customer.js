const mongoose = require('mongoose');
const config = require('../config/database');

//Customer Schema
const CustomerSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    role: String,
    customer_info: {},
    logo: String,
    parent: String,
    child: [],
    account_email: String
});

module.exports = mongoose.model('Customer', CustomerSchema);