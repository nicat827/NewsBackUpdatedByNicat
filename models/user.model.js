const mongoose = require('mongoose');
const UsersSchema = require('../schemas/user.shema.js')

const UserModel = mongoose.model("User", UsersSchema);

module.exports = UserModel;