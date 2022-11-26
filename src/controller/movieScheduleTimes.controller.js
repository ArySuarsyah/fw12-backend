const movieScheduleTimesModel = require('../models/movieScheduleTimes.model')



exports.readAllMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.readAllMovieScheduleTimes((err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access Success',
        result: data
      })
    }
  })
};

exports.readMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.readMovieScheduleTimes(req.params, (err, data) => {
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


exports.createMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.createMovieScheduleTimes(req.body, (err, data) => {
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

exports.updateMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.updateMovieScheduleTimes(req, (err, data) => {
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


exports.deleteMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.deleteMovieScheduleTimes(req, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: ' Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Delete movie genre success',
        result: data
      })
    }
  })
}