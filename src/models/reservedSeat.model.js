const db = require('../helper/db.helper')



exports.readAllReservedSeat = (call) => {
  const sql = 'SELECT * FROM "reservedSeat"'

  db.query(sql, call);
};


exports.readReservedSeat = (data, call) => {
  const sql = 'SELECT * FROM "reservedSeat" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.createReservedSeat = (data, call) => {
  const sql = 'INSERT INTO "reservedSeat" ("seatNum", "transactionId") VALUES ($1, $2) RETURNING *'
  const value = [data.seatNum, data.transactionId]

  db.query(sql, value, call)
};


exports.updateReservedSeat = (data, call) => {
  const sql = 'UPDATE "reservedSeat" SET "seatNum" = $1, "transactionId" = $2 WHERE "id" = $3 RETURNING *'
  const value = [data.body.seatNum, data.body.transactionId, data.params.id];

  db.query(sql, value, call);
};


exports.deleteReservedSeat = (data, call) => {
  const sql = 'DELETE FROM "reservedSeat" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};