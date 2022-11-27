const paymentMethodModel = require('../models/paymentMethod.model')



exports.readAllPaymentMethod = (req, res) => {
  paymentMethodModel.readAllPaymentMethod((err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        succes: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        succes: true,
        message: 'Access success',
        result: data
      })
    }
  })
};


exports.readPaymentMethod = (req, res) => {
  paymentMethodModel.readPaymentMethod(req.params, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access success',
        result: data.rows[0]
      })
    }
  })
};


exports.createPaymentMethod = (req, res) => {
  paymentMethodModel.createPaymentMethod(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Success',
        result: data.rows[0]
      })
    }
  })
};


exports.updatePaymentMethod = (req, res) => {
  paymentMethodModel.updatePaymentMethod(req, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Success',
        result: data.rows[0]
      })
    }
  })
};


exports.deletePaymentMethod = (req, res) => {
  paymentMethodModel.deletePaymentMethod(req, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: ' Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Delete payment method success',
        result: data
      })
    }
  })
};