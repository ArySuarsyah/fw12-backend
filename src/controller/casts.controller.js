const castsModel = require('../models/casts.model');





exports.readAllCasts = (req, res) => {
  castsModel.readAllCasts((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access success',
        result: data
      })
    }
  })
};


exports.readCasts = (req, res) => {
  castsModel.readCasts(req.params, (err, data) => {
    if (err) {
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

exports.updateCasts = (req, res) => {
  castsModel.updateCasts(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Update success',
        result: data.rows[0]
      })
    }
  })
};

exports.createCasts = (req, res) => {
  castsModel.createCasts(req.body, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        success: false,
        message: 'Access failed',
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Create casts successfully',
        result: data.rows[0]
      })
    }
  })
};


exports.deleteCasts = (req, res) => {
  castsModel.deleteCasts(req, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Casts delete success'
      })
    }
  })
}
