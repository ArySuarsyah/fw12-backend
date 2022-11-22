const routes = require('express').Router()

routes.use('/users', require('./users.router')) //lempar ke user routes

module.exports = routes

