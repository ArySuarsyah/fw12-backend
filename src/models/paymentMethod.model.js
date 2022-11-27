const db = require('../helper/db.helper');




exports.readAllPaymentMethod = (call) => {
  const sql = 'SELECT * FROM "paymentMethod"'

  db.query(sql, call)
};


exports.readPaymentMethod = (data, call) => {
  const sql = 'SELECT * FROM "paymentMethod" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.createPaymentMethod = (data, call) => {
  const sql = 'INSERT INTO "paymentMethod" ("picture", "name") VALUES ($1, $2) RETURNING *'
  const value = [data.picture, data.name]

  db.query(sql, value, call)
};


exports.updatePaymentMethod = (data, call) => {
  const sql = `UPDATE "paymentMethod" SET "picture" = COALESCE(NULLIF($1, ''), "picture"), "name" = COALESCE(NULLIF($2, ''), "name") WHERE "id" = $3 RETURNING *`
  const value = [data.body.picture, data.body.name, data.params.id];

  db.query(sql, value, call);
};


exports.deletePaymentMethod = (data, call) => {
  const sql = 'DELETE FROM "paymentMethod" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};