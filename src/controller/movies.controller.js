const errorHandler = require('../helper/errorHandler.helper');
const moviesModel = require('../models/movies.model');
const filter = require('../helper/filter.helper')



exports.readAllMovies = (req, res) => {
  moviesModel.readAllMovies((err, data) => {
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
        result: data.rows
      })
    }
  })
};

exports.readMovies = (req, res) => {
  moviesModel.readMovies(req.params, (err, data) => {
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


exports.createMovies = (req, res) => {
  moviesModel.createMovies(req.body, (err, data) => {
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

exports.updateMovies = (req, res) => {
  moviesModel.updateMovies(req, (err, data) => {
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


exports.deleteMovie = (req, res) => {
  moviesModel.deleteMovie(req, (err, data) => {
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


exports.upcoming = (req, res) => {
  req.query.page = parseInt(req.query.page) || 1
  req.query.limit = parseInt(req.query.limit) || 5
  const filter = {
    limit: req.query.limit,
    offset: (parseInt(req.query.page) - 1) * req.query.limit
  }
  moviesModel.upcoming(req.query, filter, (err, data) => {
    console.log(data);
    if (err) {
      return errorHandler(err, res)
    } else {
      return res.json({
        success: true,
        message: 'Upcoming Movie',
        result: data.rows
      })
    }
  })
};


exports.nowShowing = (req, res) => {
  moviesModel.nowShowing((err, data) => {
    if (err) {
      return errorHandler(err, res)
    } else {
      return res.json({
        success: true,
        message: 'Now Showing Movie',
        result: data.rows,
      })
    }
  })
};


exports.searchMovies = (req, res) => {
  const shortKey = ['title', 'createdAt', 'updatedAt']
  filter(req.query, shortKey, moviesModel.countMoviesData, res, (filter, pageInfo) => {
    moviesModel.searchMovies(filter, (err, {rows}) => {
      if (err) {
        return errorHandler(err, res)
      } else {
        return res.status(200).json({
          success: true,
          message: 'Succes',
          page: pageInfo,
          result: rows
        })
      }
    })
  })
};


