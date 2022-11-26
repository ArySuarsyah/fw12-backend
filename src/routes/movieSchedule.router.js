const movieScheduleRouter = require('express').Router()

const { readAllMovieSchedule, readMovieSchedule, updateMovieSchedule, createMovieSchedule, deleteMovieSchedule } = require('../controller/movieSchedule.controller')


movieScheduleRouter.get('/', readAllMovieSchedule);

movieScheduleRouter.get('/:id', readMovieSchedule);

movieScheduleRouter.patch('/:id', updateMovieSchedule);

movieScheduleRouter.post('/', createMovieSchedule);

movieScheduleRouter.delete('/:id', deleteMovieSchedule)



module.exports = movieScheduleRouter
