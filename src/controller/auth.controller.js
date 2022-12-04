const userModel = require('../models/users.model')
const resetPasswordModel = require('../models/resetPassword.model')
const jwt = require('jsonwebtoken');
const errorHandler = require('../helper/errorHandler.helper');

exports.login = (req, res) => {
  userModel.selectUserByEmail(req.body.email, (err, { rows }) => {
    if (rows.length) {
      const [users] = rows
      if (req.body.password === users.password) {
        const token = jwt.sign({ id: users.id }, 'Secret-key')
        return res.status(200).json({
          succes: true,
          message: 'Login success',
          result: {
            token
          }
        })
      }
    }
    return res.status(401).json({
      succes: false,
      message: 'Wrong email or password'
    })
  })
};



exports.register = (req, res) => {
  userModel.register(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    const { rows: users } = data;
    const [user] = users;
    const token = jwt.sign({ id: user.id }, 'Sekret-key')
    return res.status(200).json({
      succes: true,
      message: 'Register success',
      result: {
        token
      }
    })
  })
};



exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  userModel.selectUserByEmail(email, (err, { rows: users }) => {
    if (err) {
      errorHandler(err, res)
    }
    if (users.length) {
      const [user] = users
      const data = {
        email,
        userId: user.id,
        code: Math.floor(Math.random() * 90000)
      }
      resetPasswordModel.createResetPassword(data, (err, { rows: result }) => {
        if (result.length) {
          return res.status(200).json({
            succes: true,
            message: 'Reset password has been requested, check email!'
          })
        }
      })
    } else {
      return res.status(400).json({
        succes: false,
        message: 'User not found'
      })
    }
  })
};



exports.resetPassword = (req, res) => {
  const { password, confirmPassword } = req.body
  if (password === confirmPassword) {
    resetPasswordModel.getResetPasswordByEmailAndCode(req.body.email, req.body.code, (err, { rows: users }) => {
      if (err) {
        return errorHandler(err, res);
      }
      if (users.length) {
        const [requestReset] = users;
        if (
          new Date(requestReset.createdAt).getTime() + 1 * 60 *100 < new Date().getTime
        ) {
          return res.status(400).json({
            succes: false,
            message: 'Code is expired'
          });
        }
        userModel.updateUsersPassword(requestReset.userId, { password }, (err, { rows: users }) => {
          if (err) {
            return errorHandler(err, res);
          }
          if (users.length) {
            resetPasswordModel.deletePassword(requestReset.id, (err, { rows }) => {
              if (rows.length) {
                return res.status(200).json({
                  succes: true,
                  message: 'password updated'
                })
              }
            })
          }
        })
      } else {
            return res.status(200).json({
              succes: false,
              message: 'User not found'
            })
          }
    })
  } else {
    return res.status(400).json({
      succes: false,
      message: 'Password not match'
    })
  }
};