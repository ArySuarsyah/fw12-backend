const resetPasswordRouter = require('express').Router()

const { readAllResetPassword, readResetPassword, createResetPassword, updateResetPassword, deleteResetPassword, deletePassword } = require('../controller/resetPassword.controller')



resetPasswordRouter.get('/', readAllResetPassword);

resetPasswordRouter.get('/:id', readResetPassword);

resetPasswordRouter.post('/', createResetPassword);

resetPasswordRouter.patch('/:id', updateResetPassword);

resetPasswordRouter.delete('/:id', deleteResetPassword)

resetPasswordRouter.delete('/:id', deletePassword);

module.exports = resetPasswordRouter