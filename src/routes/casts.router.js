const castsRouter = require('express').Router()


const { readAllCasts, readCasts, createCasts, updateCasts, deleteCasts, searchCasts } = require('../controller/casts.controller');


castsRouter.get('/', readAllCasts);

castsRouter.get('/searchCasts', searchCasts)

castsRouter.post('/', createCasts);

castsRouter.get('/:id', readCasts);

castsRouter.patch('/:id', updateCasts);

castsRouter.delete('/:id', deleteCasts)


module.exports = castsRouter