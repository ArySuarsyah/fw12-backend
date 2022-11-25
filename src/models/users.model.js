const db = require('../helper/db.helper');

exports.readAllUser = (call) => {
  const sql = 'SELECT * FROM "users"'
  
  db.query(sql, call);
};

exports.readUser = (res, call) => {
  const sql = 'SELECT * FROM users WHERE "id" = $1'
  const value = [res.id]
  db.query(sql, value, call);
};


exports.insertUser = (data, call) => {
  const sql = 'INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email", "password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];

  db.query(sql, value, call)
}


exports.updateUsers = (data, call) => {
  const sql = 'UPDATE users SET "firstName" = $1, "lastName" = $2, "phoneNumber" = $3, "email" = $4, "password" = $5 WHERE "id" = $6 RETURNING *';
  const value = [data.body.firstName, data.body.lastName, data.body.phoneNumber, data.body.email, data.body.password, data.params.id];

  db.query(sql, value, call)
}


exports.deleteUsers = (data, call) => {
  const sql = 'DELETE FROM users WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}
