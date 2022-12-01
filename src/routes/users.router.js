const usersRouter = require('express').Router()

const { readAllUsers, createUsers, updateUsers, deleteUsers, readUser, updateUsersPassword } = require('../controller/users.controller');


usersRouter.get('/', readAllUsers); // Query string => pagination, search, limit, order | additional data.

usersRouter.get('/:id', readUser); // Query string

usersRouter.post('/', createUsers); // Query string, body => aplication/json(data yang sifatnya string), x-www-form-urlencoded(general, mengirim string dalam bentuk form), multipart/form-data(mengirim form dengan binary file)
usersRouter.patch('/:id', updateUsers); // Query string, body

usersRouter.delete('/:id', deleteUsers); // Query string

usersRouter.post('/:id', updateUsersPassword);


module.exports = usersRouter