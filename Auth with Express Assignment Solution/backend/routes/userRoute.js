const express = require('express');
const { userSignUp, userLogIn, getUserDetails } = require('../controller/userController');
const { authenticateUser } = require('../middleware/authUser');
const { loginValidator } = require('../middleware/logInValidator');
const { signUpValidator } = require('../middleware/signUpValidator');

const userRoute = express.Router();

userRoute.post('/signup' , signUpValidator, userSignUp);
userRoute.post('/login' , loginValidator, userLogIn);
userRoute.get('/' , authenticateUser, getUserDetails);

module.exports = userRoute;

