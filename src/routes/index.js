const routes = require('express').Router()


routes.use('/users', require('./users.router'));

routes.use('/genre', require('./genre.router'));

routes.use('/movieGenre', require('./movieGenre.router'));

routes.use('/cinemas', require('./cinema.roter'));

module.exports = routes

