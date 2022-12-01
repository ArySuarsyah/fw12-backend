const movieRouter = require('express').Router()

const { readAllMovies, readMovies, createMovies, updateMovies, deleteMovie, upcoming, nowShowing } = require('../controller/movies.controller');
const authMiddleware = require('../middleware/auth.middleware');



movieRouter.get('/', authMiddleware, readAllMovies);

movieRouter.post('/', authMiddleware, createMovies);

movieRouter.get('/upcoming', upcoming);

movieRouter.get('/nowShowing', nowShowing);

movieRouter.get('/:id', authMiddleware, readMovies);

movieRouter.patch('/:id', authMiddleware, updateMovies);

movieRouter.delete('/:id', authMiddleware, deleteMovie);


module.exports = movieRouter