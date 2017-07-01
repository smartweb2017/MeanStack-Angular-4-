const mongoose = require('mongoose');
const config = require('../config/database');

// Role Schema
const RoleSchema = mongoose.Schema({

    role_name: {
        type: String,
        unique: true,
        required: true
    },
    home_url: String,
    accounts_assigned: Number,
    staff: {
        create: Boolean,
        delete: Boolean,
        edit: Boolean,
        view: Boolean
    },
    customer: {
        create: Boolean,
        delete: Boolean,
        edit: Boolean,
        view: Boolean
    },
    company: {
        create: Boolean,
        delete: Boolean,
        edit: Boolean,
        view: Boolean
    },
    store: {
        create: Boolean,
        delete: Boolean,
        edit: Boolean,
        view: Boolean
    },
    order: {
        create: Boolean,
        edit: Boolean,
        delete: Boolean,
        view: Boolean
    },
    role: {
        create: Boolean,
        edit: Boolean,
        delete: Boolean,
        view: Boolean
    },
    status: Boolean,
    display_dashboard: Boolean

});

module.exports = mongoose.model('Role', RoleSchema);