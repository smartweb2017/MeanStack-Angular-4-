const mongoose = require('mongoose');
const config = require('../config/database');

// Company Schema
const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: Boolean

});

module.exports = mongoose.model('Company', CompanySchema);