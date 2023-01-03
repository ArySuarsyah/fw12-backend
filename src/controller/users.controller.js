const userModel = require("../models/users.model");
const errorHandler = require('../helper/errorHandler.helper');
const fs = require('fs');




;

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
        data : data.rows
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
  if (req.file) {
    req.body.picture = req.file.filename;
    userModel.readUser(req.params.id, (err, data) => {
          console.log(data)
      if (data.rows.length) {
        const [user] = data.rows
        if (user.picture) {
          fs.rm("picture/" + user.picture, { force: true }, (err) => {
            if (err) {
              return errorHandler(err, res);
            }
        })
        }
      }
    })
  }

  userModel.updateUsers(req, (err, data) => {
    console.log(data);
    if (err) {
      return errorHandler(err, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'user created successfully',
        result: data.rows[0]
      })
    }
  })
};

exports.updateUsersPassword = (req, res) => {
  userModel.updateUsersPassword(req.params.id, req.body, (err, data) => {
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
};


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
};
