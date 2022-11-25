const userModel  = require("../models/users.model");
const errorHandler = require('../helper/errorHandler.helper');

exports.readAllUsers = (request, response) => {
userModel.readAllUser((err, data) => {  // ???
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Access failed"
      })
    } else {
      return response.status(200).json({
        success: true,
        message: "Access success",
        data : data
      })
    }
  });
};

exports.readUser = (request, response) => {
  userModel.readUser((request.params), (err, data) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Access failed"
      })
    } else {
      return response.status(200).json({
        success: true,
        message: 'Access success',
        data: data.rows[0]
      })
    }
  })
}


exports.createUsers = (req, res) => {
  userModel.insertUser(req.body, (err, data) => {
    if (err) {
      errorHandler(err, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'user created successfully',
        result: data.rows[0]
      })
    }
  })
  }


exports.updateUsers = (req, res) => {
  userModel.updateUsers(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Something wrong'
      })
    } else {
      return res.status(200).json({
      success: true,
      message: 'user created successfully',
      result: data.rows[0]
    })
    }
  })
}


exports.deleteUsers = (req, res) => {
  userModel.deleteUsers(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Something wrong'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'User Deleted',
        result: data.rows[0]
      })
    }
  })
}




//