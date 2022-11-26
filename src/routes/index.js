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

module.exports = routes

