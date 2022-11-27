const db = require('../helper/db.helper');





exports.readAllSubscribers = (call) => {
  const sql = 'SELECT * FROM "subscribers"'

  db.query(sql, call);
};


exports.readSubscribers = (data, call) => {
  const sql = 'SELECT * FROM "subscribers" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.createSubscribers = (data, call) => {
  const sql = 'INSERT INTO "subscribers" ("email") VALUES ($1) RETURNING *'
  const value = [data.email]

  db.query(sql, value, call)
};


exports.updateSubscribers = (data, call) => {
  const sql = 'UPDATE "subscribers" SET "email" = $1 WHERE "id" = $2 RETURNING *'
  const value = [data.body.email, data.params.id];

  db.query(sql, value, call);
};


exports.deleteSubscribers = (data, call) => {
  const sql = 'DELETE FROM "subscribers" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};