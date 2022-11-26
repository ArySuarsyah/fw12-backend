const db = require('../helper/db.helper')




exports.readAllMovieScheduleTimes = (call) => {
  const sql = 'SELECT * FROM "movieScheduleTimes"'

  db.query(sql, call)
};

exports.readMovieScheduleTimes = (data, call) => {
  const sql = 'SELECT * FROM "movieScheduleTimes" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.createMovieScheduleTimes = (data, call) => {
  const sql = 'INSERT INTO "movieScheduleTimes" ("time", "movieScheduleId") VALUES ($1, $2) RETURNING *'
  const value = [data.time, data.movieScheduleId]

  db.query(sql, value, call)
};

exports.updateMovieScheduleTimes = (data, call) => {
  const sql = 'UPDATE "movieScheduleTimes" SET "time" = $1, "movieScheduleId" = $2 WHERE "id" = $3 RETURNING *'
  const value = [data.body.time, data.body.movieScheduleId, data.params.id];

  db.query(sql, value, call);
};

exports.deleteMovieScheduleTimes = (data, call) => {
  const sql = 'DELETE FROM "movieScheduleTimes" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
}