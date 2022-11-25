const genreRouter = require('express').Router();

const {readAllGenre, readGenre, createGenre, updateGenre, deleteGenre} = require('../controller/genre.controller');

genreRouter.get('/', readAllGenre); // Query string => pagination, search, limit, order | additional data.

genreRouter.get('/:id', readGenre);

genreRouter.post('/', createGenre); // Query string, body => aplication/json(data yang sifatnya string), x-www-form-urlencoded(general, mengirim string dalam bentuk form), multipart/form-data(mengirim form dengan binary file)
genreRouter.patch('/:id', updateGenre); // Query string, body

genreRouter.delete('/:id', deleteGenre);


module.exports = genreRouter;