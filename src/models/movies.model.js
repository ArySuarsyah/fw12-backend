const db = require('../helper/db.helper')




exports.readAllMovies = (call) => {
  const sql = 'SELECT * FROM "movies"'

  db.query(sql, call)
};


exports.readMovies = (data, call) => {
  const sql = 'SELECT * FROM "movies" WHERE "id" = $1'
  const values = [data.id]
  db.query(sql, values, call)
};


exports.createMovies = (data, call) => {
  const sql = 'INSERT INTO "movies" ("title", "picture", "realeseDate", "director", "duration", "synopsis") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [data.title, data.picture, data.realeseDate, data.director, data.duration, data.synopsis];

  db.query(sql, values, call);
};

exports.updateMovies = (data, call) => {
  const sql = 'UPDATE "movies" SET "title" = $1, "picture" = $2, "realeseDate" = $3, "director" = $4, "duration" = $5, "synopsis" = $6 WHERE "id" = $7 RETURNING *'
  const values = [data.body.title, data.body.picture, data.body.realeseDate, data.body.director, data.body.duration, data.body.synopsis, data.params.id];

  db.query(sql, values, call);
};

exports.deleteMovie = (data, call) => {
  const sql = 'DELETE FROM "movies" WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}
