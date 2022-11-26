const movieShceduleTimesRouter = require('express').Router()

const { readAllMovieScheduleTimes, readMovieScheduleTimes, createMovieScheduleTimes, updateMovieScheduleTimes, deleteMovieScheduleTimes } = require('../controller/movieScheduleTimes.controller')



movieShceduleTimesRouter.get('/', readAllMovieScheduleTimes);

movieShceduleTimesRouter.get('/:id', readMovieScheduleTimes);

movieShceduleTimesRouter.post('/', createMovieScheduleTimes);

movieShceduleTimesRouter.patch('/:id', updateMovieScheduleTimes);

movieShceduleTimesRouter.delete('/:id', deleteMovieScheduleTimes)

module.exports = movieShceduleTimesRouter