const cinemaRouter = require('express').Router();

const { readAllCinemas, readCinema, createCinema, updateCinema, deleteCinema } = require('../controller/cinemas.controller');

cinemaRouter.get('/', readAllCinemas);

cinemaRouter.get('/:id', readCinema);

cinemaRouter.post('/', createCinema);

cinemaRouter.patch('/:id', updateCinema);

cinemaRouter.delete('/:id', deleteCinema);






module.exports = cinemaRouter