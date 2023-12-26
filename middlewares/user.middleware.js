const UserValidation = require('../validations/user.validation.js')

const UserAuthMiddleware = (req,res,next)=>{
    const {error} = UserValidation.validate(req.body);
     if(!error){
      next();
     }
     else{
      const {details} = error
      const message = details[0].message
      res.send({message});
     }
  }

  module.exports = UserAuthMiddleware;