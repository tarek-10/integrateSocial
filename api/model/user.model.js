const userSchema = require("../schema/user.schema");
const mongoose = require("mongoose");

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;