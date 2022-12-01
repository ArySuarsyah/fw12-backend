const auth = require('express').Router();

const {
  login,
  register,
  forgotPassword,
  resetPassword
} = require('../controller/auth.controller');


auth.post('/login', login);

auth.post('/register', register);

auth.post('/forgotPassword', forgotPassword);

auth.post('/resetPassword', resetPassword)

module.exports = auth;