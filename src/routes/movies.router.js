const movieRouter = require('express').Router()

const { readAllMovies, readMovies, createMovies, updateMovies, deleteMovie, upcoming, nowShowing } = require('../controller/movies.controller');
const authMiddleware = require('../middleware/auth.middleware');


movieRouter.get('/', readAllMovies);

movieRouter.post('/', createMovies);

movieRouter.get('/upcoming', upcoming);

movieRouter.get('/nowShowing', nowShowing);

movieRouter.get('/:id', readMovies);

movieRouter.patch('/:id', updateMovies);

movieRouter.delete('/:id', deleteMovie);


module.exports = movieRouter