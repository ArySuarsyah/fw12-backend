const movieCastsModel = require('../models/movieCasts.model')


exports.readAllMovieCasts = (req, res) => {
  movieCastsModel.readAllMovieCasts((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access failed',
        result: data
      })
    }
  })
};


exports.readMovieCasts = (req, res) => {
  movieCastsModel.readMovieCasts(req.params, (err, data) => {
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

exports.createMovieCasts = (req, res) => {
  movieCastsModel.createMovieCasts(req.body, (err, data) => {
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


exports.updateMovieCasts = (req, res) => {
  movieCastsModel.updateMovieCasts(req, (err, data) => {
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

exports.deleteMovieCasts = (req, res) => {
  movieCastsModel.deleteMovieCasts(req, (err, data) => {
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