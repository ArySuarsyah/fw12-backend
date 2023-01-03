const movieRouter = require('express').Router()

const { readAllMovies, readMovies, createMovies, updateMovies, deleteMovie, upcoming, nowShowing, searchMovies } = require('../controller/movies.controller');
const authMiddleware = require('../middleware/auth.middleware');
const updatePictureMiddleware = require('../middleware/updatePicture.middleware');



movieRouter.get('/', readAllMovies);

movieRouter.post('/', authMiddleware, updatePictureMiddleware, createMovies);

movieRouter.get('/searchMovies', searchMovies);

movieRouter.get('/upcoming', upcoming);

movieRouter.get('/nowShowing', nowShowing);

movieRouter.get('/:id', authMiddleware, readMovies);

movieRouter.patch('/:id',authMiddleware, updatePictureMiddleware, updateMovies);

movieRouter.delete('/:id', authMiddleware, deleteMovie);



module.exports = movieRouter;