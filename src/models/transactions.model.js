const db = require('../helper/db.helper');



exports.readAllTransactions = (call) => {
  const sql = 'SELECT * FROM "transactions"'

  db.query(sql, call);
};

exports.readTransactions = (res, call) => {
  const sql = 'SELECT * FROM transactions WHERE "id" = $1'
  const value = [res.id]
  db.query(sql, value, call);
};


exports.createTransactions = (data, call) => {
  const sql = 'INSERT INTO transactions ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const value = [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.phoneNumber, data.statusId];

  db.query(sql, value, call)
}


exports.updateTransactions = (data, call) => {
  const sql = `UPDATE transactions SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "cinemaId" = COALESCE(NULLIF($2, '')::INTEGER, "cinemaId"), "movieScheduleId" = COALESCE(NULLIF($3, '')::INTEGER, "movieScheduleId"), "fullName" = COALESCE(NULLIF($4, ''), "fullName"), "email" = COALESCE(NULLIF($5, ''), "email"), "phoneNumber" = COALESCE(NULLIF($6, ''), "phoneNumber"), "statusId" = COALESCE(NULLIF($7, '')::INTEGER, "statusId") WHERE "id" = $8 RETURNING *`;
  const value = [data.body.movieId, data.body.cinemaId, data.body.movieScheduleId, data.body.fullName, data.body.email, data.body.phoneNumber, data.body.statusId, data.params.id];

  db.query(sql, value, call)
}


exports.deleteTransactions = (data, call) => {
  const sql = 'DELETE FROM transactions WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}