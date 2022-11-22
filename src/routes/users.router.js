const usersRouter = require('express').Router()

const { readAllUsers, createUsers, updateUsers, deleteUsers, readUser } = require('../controller/users.controller')

usersRouter.get('/', readAllUsers);
usersRouter.get('/:id', readUser);
usersRouter.post('/', createUsers);
usersRouter.patch('/', updateUsers);
usersRouter.delete('/', deleteUsers);


module.exports = usersRouter