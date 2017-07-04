const mongoose = require('mongoose');
const config = require('../config/database');

// Admin Schema
const StaffSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    role: String,
    parent: String,
    key_contact: String,
    child: []
});

module.exports = mongoose.model('Staff', StaffSchema);