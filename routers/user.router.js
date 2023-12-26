const express = require('express');
const UserAuthMiddleware = require('../middlewares/user.middleware.js') 
const userRouter = express.Router();
const userController = require('../controllers/user.controller.js');

userRouter.get('/', userController.getAll);

userRouter.get('/:id', userController.getOne);

userRouter.post('/', UserAuthMiddleware,userController.register);

userRouter.delete('/:id', userController.delete);

userRouter.patch(':id', userController.edit);

module.exports = userRouter;