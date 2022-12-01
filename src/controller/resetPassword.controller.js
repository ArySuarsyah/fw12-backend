const resetPasswordModel = require('../models/resetPassword.model')


exports.readAllResetPassword = (req, res) => {
  resetPasswordModel.readAllResetPassword((err, data) => {
    if (err) {
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'Access succes',
        result: data.rows
      })
    }
  })
};

exports.readResetPassword = (req, res) => {
  resetPasswordModel.readResetPassword(req.params, (err, data) => {
    if (err) {
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      const { rows: id } = data;
      const [userId] = id;
      if (req.params.id == userId.id) {
        return res.status(200).json({
          succes: true,
          message: 'Access succes',
          result: data.rows[0]
        })
      } else {
        return res.status(401).json({
          succes: false,
          message: 'Id Not Found'
        })
      }
    }
  })
};

exports.createResetPassword = (req, res) => {
  resetPasswordModel.createResetPassword(req.body, (err, data) => {
    if (err) {
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'Access succes',
        result: data.rows[0]
      })
    }
  })
};

exports.updateResetPassword = (req, res) => {
  resetPasswordModel.updateResetPassword(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'Access succes',
        result: data.rows[0]
      })
    }
  })
};

exports.deleteResetPassword = (req, res) => {
  resetPasswordModel.deleteResetPassword(req, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'delted',
        result: data.rows[0]
      })
    }
  })
};


exports.deletePassword = (req, res) => {
  resetPasswordModel.deletePassword(req.params.id, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'Access succes',
        result: data.rows[0]
      })
    }
  })
};
