const castsRouter = require('express').Router()


const { readAllCasts, readCasts, createCasts, updateCasts, deleteCasts } = require('../controller/casts.controller');


castsRouter.get('/', readAllCasts);

castsRouter.get('/:id', readCasts);

castsRouter.patch('/:id', updateCasts);

castsRouter.post('/', createCasts);

castsRouter.delete('/:id', deleteCasts)


module.exports = castsRouter