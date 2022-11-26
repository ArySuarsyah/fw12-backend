const movieScheduleModel = require('../models/movieSchedule.model')



exports.readAllMovieSchedule = (req, res) => {
  movieScheduleModel.readAllMovieSchedule((err, data) => {
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
        result: data
      })
    }
  })
};


exports.readMovieSchedule = (req, res) => {
  movieScheduleModel.readMovieSchedule(req.params, (err, data) => {
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

exports.updateMovieSchedule = (req, res) => {
  movieScheduleModel.updateMovieSchedule(req, (err, data) => {
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


exports.createMovieSchedule = (req, res) => {
  movieScheduleModel.createMovieSchedule(req.body, (err, data) => {
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


exports.deleteMovieSchedule = (req, res) => {
  movieScheduleModel.deleteMovieSchedule(req, (err, data) => {
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