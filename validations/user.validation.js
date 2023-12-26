const Joi = require('joi');

const UserValidation = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    fullName: Joi.string().min(3).max(20).required(),
    profileImg: Joi.string().uri().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    isAdmin: Joi.boolean(),
  })
  
  module.exports = UserValidation