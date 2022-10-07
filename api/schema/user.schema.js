const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: Array,
        default: ""
    },
    coverPicture: {
        type: Array,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'user'
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50,
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    },
}, {
    timestamps: true
});
module.exports = userSchema;