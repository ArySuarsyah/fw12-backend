const errorHandler = require('../helper/errorHandler.helper');
const cinemaModel = require('../models/cinemas.model');


exports.readAllCinemas = (req, res) => {
  cinemaModel.readAllCinemas((err, data) => {
    if (err) {
      errorHandler(req, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Access succes',
        result: data.rows
      })
    }
  })
};


exports.readCinema = (req, res) => {
  cinemaModel.readCinema((req.params), (err, data) => {
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


exports.createCinema = (req, res) => {
  cinemaModel.createCinema(req.body, (err, data) => {
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


exports.updateCinema = (req, res) => {
  cinemaModel.updateCinema(req, (err, data) => {
    if (err) {
      console.log(err);
      errorHandler(req, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Update cinema successfully',
        result: data.rows[0]
      })
    }
  })
};


exports.deleteCinema = (req, res) => {
  cinemaModel.deleteCinema(req, (err, data) => {
    if (err) {
      errorHandler(req, res)
    } else {
      return res.status(200).json({
        success: true,
        message: 'Cinema deleted',
        result: data.rows[0]
      })
    }
  })
}