const mongoose = require('mongoose');
const TokensSchema = require('../schemas/token.schema.js')

const TokenModel = mongoose.model("Token", TokensSchema);

module.exports = TokenModel;