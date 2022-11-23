const {insertUser} = require("../models/users.model")

exports.readAllUsers = (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    success: true,
    message: 'List data of users'
  })
};


exports.readUser = (req, res) => {
  console.log(req.params)
  return res.status(200).json({
    success: true,
    message: 'Detail userB'
  })
};


exports.createUsers = (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    message: 'User created successfully'
  })
};


exports.updateUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User update successfully'
  })
};


exports.deleteUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Delete user successfully'
  })
};