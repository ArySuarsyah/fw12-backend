const movieRouter = require('express').Router()

const { readAllMovies, readMovies, createMovies, updateMovies, deleteMovie } = require('../controller/movies.controller')


movieRouter.get('/', readAllMovies);

movieRouter.get('/:id', readMovies);

movieRouter.post('/', createMovies);

movieRouter.patch('/:id', updateMovies);

movieRouter.delete('/:id', deleteMovie);


module.exports = movieRouter