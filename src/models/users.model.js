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

exports.selectUserByEmail = (email, call) => {
  const sql = 'SELECT * FROM "users" WHERE "email" = $1';
  const value = [email]

  db.query(sql, value, call)
}

exports.register = (data, call) => {
  const sql = 'INSERT INTO users ("firstName", "lastName", "phoneNumber", "email", "password") VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const value = [data.firstName, data.lastName, data.phoneNumber, data.email, data.password];

  db.query(sql, value, call)
}


exports.updateUsers = (data, call) => {
  const sql = `UPDATE "users" SET "picture" = COALESCE(NULLIF($1, ''), "picture"), "firstName" = COALESCE(NULLIF($2, ''), "firstName"), "lastName" = COALESCE(NULLIF($3, ''), "lastName"), "phoneNumber" = COALESCE(NULLIF($4, ''), "phoneNumber"), "email" = COALESCE(NULLIF($5, ''), "email"), "password" = COALESCE(NULLIF($6, ''), "password") WHERE "id" = $7 RETURNING *`;
  const value = [data.body.picture, data.body.firstName, data.body.lastName, data.body.phoneNumber, data.body.email, data.body.password, data.params.id];

  db.query(sql, value, call)
};


exports.updateUsersPassword = (id, data, call) => {
  const sql = `UPDATE "users" SET "picture" = COALESCE(NULLIF($1, ''), "picture"), "firstName" = COALESCE(NULLIF($2, ''), "firstName"), "lastName" = COALESCE(NULLIF($3, ''), "lastName"), "phoneNumber" = COALESCE(NULLIF($4, ''), "phoneNumber"), "email" = COALESCE(NULLIF($5, ''), "email"), "password" = COALESCE(NULLIF($6, ''), "password") WHERE "id" = $7 RETURNING *`;

  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password, id];


  db.query(sql, value, call)
};


exports.deleteUsers = (data, call) => {
  const sql = 'DELETE FROM users WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}
