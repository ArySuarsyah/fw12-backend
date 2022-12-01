
const movieGenreModel = require('../models/movieGenre.model');


exports.readAllMovieGenre = (req, res) => {
  movieGenreModel.readAllMovieGenre((err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access success',
        result: data.rows
      })
    }
  })
};


exports.readMovieGenre = (req, res) => {
  movieGenreModel.readMovieGenre(req.params, (err, data) => { // kenapa pake params?
    if (err) {
      console.log(err)
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


exports.createMovieGenre = (req, res) => {
  movieGenreModel.createMovieGenre(req.body, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Movie Genre Created success',
        result: data.rows[0]
      })
    }
  })
};


exports.updateMovieGenre = (req, res) => {
  movieGenreModel.updateMovieGenre(req, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Acces failed'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Update movie genre success',
        reuslt: data.rows[0]
      })
    }
  })
};


exports.deleteMovieGenre = (req, res) => {
  movieGenreModel.deleteMovieGenre(req, (err, data) => {
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
};