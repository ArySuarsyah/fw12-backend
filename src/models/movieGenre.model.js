const db = require('../helper/db.helper');


exports.readAllMovieGenre = (call) => {
  const sql = 'SELECT * FROM "movieGenre"';

  db.query(sql, call)
};


exports.readMovieGenre = (data, call) => {
  const sql = 'SELECT * FROM "movieGenre" WHERE "id" = $1'
  const value = [data.id];

  db.query(sql, value, call)
};


exports.createMovieGenre = (data, call) => {
  const sql = 'INSERT INTO "movieGenre" ("movieId", "genreId") VALUES ($1, $2) RETURNING *';
  const values = [data.movieId, data.genreId];

  db.query(sql, values, call);
};

exports.updateMovieGenre = (data, call) => {
  const sql = `UPDATE "movieGenre" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "genreId" = COALESCE(NULLIF($2, '')::INTEGER, "genreId") WHERE "id" = $3 RETURNING *`
  const value = [data.body.movieId, data.body.genreId, data.params.id];

  db.query(sql, value, call);
};


exports.deleteMovieGenre = (data, call) => {
  const sql = 'DELETE FROM "movieGenre" WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
};

