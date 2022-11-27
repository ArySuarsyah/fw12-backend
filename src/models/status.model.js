const db = require('../helper/db.helper');



exports.readAllStatus = (call) => {
  const sql = 'SELECT * FROM "status"'

  db.query(sql, call);
};


exports.readStatus = (data, call) => {
  const sql = 'SELECT * FROM "status" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.createStatus = (data, call) => {
  const sql = 'INSERT INTO "status" ("name") VALUES ($1) RETURNING *'
  const value = [data.name]

  db.query(sql, value, call)
};


exports.updateStatus = (data, call) => {
  const sql = 'UPDATE "status" SET "name" = $1 WHERE "id" = $2 RETURNING *'
  const value = [data.body.name, data.params.id];

  db.query(sql, value, call);
};


exports.deleteStatus = (data, call) => {
  const sql = 'DELETE FROM "status" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};