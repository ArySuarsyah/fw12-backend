const { Router } = require('express');

const routes = require('express').Router()


routes.use('/users', require('./users.router'));

routes.use('/genre', require('./genre.router'));

routes.use('/movieGenre', require('./movieGenre.router'));

routes.use('/cinemas', require('./cinemas.router'));

routes.use('/casts', require('./casts.router'));

routes.use('/movieCasts', require('./movieCasts.router'));

routes.use('/movieSchedules', require('./movieSchedule.router'));

routes.use('/movieScheduleTimes', require('./movieScheduleTimes.router'));

routes.use('/movies', require('./movies.router'));

routes.use('/paymentMethod', require('./paymentMethod.router'));

routes.use('/reservedSeat', require('./reservedSeat.router'));

routes.use('/status', require('./status.router'));

routes.use('/subscribers', require('./subscribers.router'));

routes.use('/transactions', require('./transactions.router'))

module.exports = routes

