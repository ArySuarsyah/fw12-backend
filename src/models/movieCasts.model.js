const db = require('../helper/db.helper')


exports.readAllMovieCasts = (call) => {
  const sql = 'SELECT * FROM "movieCasts"'

  db.query(sql, call)
};


exports.readMovieCasts = (data, call) => {
  const sql = 'SELECT * FROM "movieCasts" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
}

exports.createMovieCasts = (data, call) => {
  const sql = 'INSERT INTO "movieCasts" ("movieId", "castId") VALUES ($1, $2) RETURNING *'
  const value = [data.movieId, data.castId]

  db.query(sql, value, call)
}

exports.updateMovieCasts = (data, call) => {
  const sql = `UPDATE "movieCasts" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "castId" = COALESCE(NULLIF($2, '')::INTEGER, "castId") WHERE "id" = $3 RETURNING *`
  const value = [data.body.movieId, data.body.castId, data.params.id]

  db.query(sql, value, call)
}

exports.deleteMovieCasts = (data, call) => {
  const sql = 'DELETE FROM "movieCasts" WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}
