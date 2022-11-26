const movieCastsRouter = require('express').Router()

const { readAllMovieCasts, readMovieCasts, createMovieCasts, updateMovieCasts, deleteMovieCasts } = require('../controller/movieCasts.controller')



movieCastsRouter.get('/', readAllMovieCasts);

movieCastsRouter.get('/:id', readMovieCasts);

movieCastsRouter.post('/', createMovieCasts);

movieCastsRouter.patch('/:id', updateMovieCasts);

movieCastsRouter.delete('/:id', deleteMovieCasts);

module.exports = movieCastsRouter