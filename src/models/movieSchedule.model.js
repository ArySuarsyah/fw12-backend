const db = require('../helper/db.helper')

exports.readAllMovieSchedule = (call) => {
  const sql = 'SELECT * FROM "movieSchedules"'

  db.query(sql, call)
};

exports.readMovieSchedule = (data, call) => {
  const sql = 'SELECT * FROM "movieSchedules" WHERE "id" = $1'
  const values = [data.id]
  db.query(sql, values, call)
};

exports.updateMovieSchedule = (data, call) => {
  const sql = 'UPDATE "movieSchedules" SET "movieId" = $1, "cinemaId" = $2, "price" = $3, "startDate" = $4, "endDate" = $5 WHERE "id" = $6 RETURNING *'
  const value = [data.body.movieId, data.body.cinemaId, data.body.price, data.body.startDate, data.body.endDate, data.params.id];

  db.query(sql, value, call);
};

exports.createMovieSchedule = (data, call) => {
  const sql = 'INSERT INTO "movieSchedules" ("movieId", "cinemaId", "price", "startDate", "endDate") VALUES ($1, $2, $3, $4, $5) RETURNING *'
  const value = [data.movieId, data.cinemaId, data.price, data.startDate, data.endDate]

  db.query(sql, value, call)
};

exports.deleteMovieSchedule = (data, call) => {
  const sql = 'DELETE FROM "movieSchedules" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};