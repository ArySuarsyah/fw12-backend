const castsModel = require('../models/casts.model');
const errorHandler = require('../helper/errorHandler.helper')





exports.readAllCasts = (req, res) => {
  castsModel.readAllCasts((err, data) => {
    if (err) {
      errorHandler(req, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access success',
        result: data.rows
      })
    }
  })
};


exports.readCasts = (req, res) => {
  castsModel.readCasts(req.params, (err, data) => {
    if (err) {
      errorHandler(req, res)
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
      errorHandler(req, res)
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
      errorHandler(req, res)
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
      errorHandler(req, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Casts delete success'
      })
    }
  })
};



exports.searchCasts = (req, res) => {
  req.query.page = parseInt(req.query.page) || 1
  req.query.limit = parseInt(req.query.limit) || 5
  req.query.search = req.query.search || ''
  // const shortKey = ['name', 'createdAt', 'updatesAt']
  req.query.shortBy = req.query.shortBy || 'createdAt'
  req.query.short = req.query.short || 'ASC'

  const filter = {
    limit: req.query.limit,
    offset: (parseInt(req.query.page) - 1) * req.query.limit,
    search: req.query.search,
    shortBy: req.query.shortBy,
    short: req.query.short
  }
  castsModel.searchCasts(filter, (err, data) => {
    console.log(err);
    if (err) {
      return errorHandler(err, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Succes',
        result: data.rows
      })
    }
  })
};
