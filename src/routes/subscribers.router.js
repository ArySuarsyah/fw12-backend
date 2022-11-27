const { readAllSubscribers, readSubscribers, createSubscribers, updateSubscribers, deleteSubscribers } = require('../controller/subscribers.controller');

const subscribersRouter = require('express').Router();


subscribersRouter.get('/', readAllSubscribers);

subscribersRouter.get('/:id', readSubscribers);

subscribersRouter.post('/', createSubscribers);

subscribersRouter.patch('/:id', updateSubscribers);

subscribersRouter.delete('/:id', deleteSubscribers);






module.exports = subscribersRouter