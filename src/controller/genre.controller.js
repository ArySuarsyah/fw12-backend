const { request, response } = require('express');
const genreModel = require('../models/genre.model');
const errorHandler = require('../helper/errorHandler.helper')




exports.readAllGenre = (request, response) => {
  request.query.page = parseInt(request.query.page) || 1
  request.query.limit = parseInt(request.query.limit) || 5
  const filter = {
    limit: request.query.limit,
    offset: (parseInt(request.query.page) - 1) * request.query.limit
  }
  genreModel.readAllGenre(filter, (err, data) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: 'Access genre failed'
      })
    } else {
      return response.status(200).json({
        success: true,
        message: 'Access success',
        result: data
      })
    }
  })
};

exports.readGenre = (request, response) => {
  genreModel.readGenre((request.params), (err, data) => {
    if (err) {
      return response.status(500).json({
        success: false,
        message: 'Access failed'
      })
    } else {
      return response.status(200).json({
        success: true,
        message: 'Access success',
        result: data.rows[0]
      })
    }
  })
};

exports.createGenre = (req, res) => {
  genreModel.createGenre(req.body, (err, data) => {
    if (err) {
      errorHandler(err, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'genre created succussfully',
        result: data.rows[0]
      })
    }
  })
};


exports.updateGenre = (req, res) => {
  genreModel.updateGenre(req, (err, data) => {
    if (err) {
      errorHandler(err, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Update success',
        result: data.rows[0]
      })
    }
  })
};


exports.deleteGenre = (req, res) => {
  genreModel.deleteGenre(req, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json({
        success: true,
        message: "Genre deleted",
        result: data.rows[0]
      })
    }
  })
};


