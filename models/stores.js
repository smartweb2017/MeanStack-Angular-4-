const mongoose = require('mongoose');
const config = require('../config/database');

// Admin Schema
const StoreSchema = mongoose.Schema({

    store_title: {
        type: String,
        unique: true,
        required: true
    },
    parent: String,
    status: Boolean,
    child: [],
    key_contact: String,
    store_info: {}


});

module.exports = mongoose.model('Store', StoreSchema);