const movieGenreRouter = require('express').Router()


const { readAllMovieGenre, readMovieGenre, createMovieGenre, updateMovieGenre, deleteMovieGenre } = require('../controller/movieGenre.controller');
;


movieGenreRouter.get('/', readAllMovieGenre);

movieGenreRouter.get('/:id', readMovieGenre);

movieGenreRouter.post('/', createMovieGenre);

movieGenreRouter.patch('/:id', updateMovieGenre);

movieGenreRouter.delete('/:id', deleteMovieGenre);


module.exports = movieGenreRouter

