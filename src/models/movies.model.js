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
  const sql = `UPDATE "movies" SET "title" = COALESCE(NULLIF($1, ''), "title"), "picture" = COALESCE(NULLIF($2, ''), "picture"), "realeseDate" =COALESCE(NULLIF($3, '')::TIMESTAMPTZ, "realeseDate"), "director" = COALESCE(NULLIF($4, ''), "director"), "duration" = COALESCE(NULLIF($5, '')::TIME, "duration"), "synopsis" = COALESCE(NULLIF($6, ''), "synopsis") WHERE "id" = $7 RETURNING *`
  const values = [data.body.title, data.body.picture, data.body.realeseDate, data.body.director, data.body.duration, data.body.synopsis, data.params.id];

  db.query(sql, values, call);
};

exports.deleteMovie = (data, call) => {
  const sql = 'DELETE FROM "movies" WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
};


exports.upcoming = (data, filter, call) => {
  const sql = `SELECT * FROM "movies" WHERE date_part('year', "realeseDate")::TEXT =
  COALESCE(NULLIF($1, ''), date_part('year', current_date)::TEXT) AND date_part('month', "realeseDate")::TEXT =
  COALESCE(NULLIF($2, ''), date_part('month', current_date)::TEXT) LIMIT $3 OFFSET $4`;
  const values = [data.year, data.month, filter.limit, filter.offset];

  db.query(sql, values, call)
};


exports.nowShowing = (call) => {
  const sql = `SELECT m.id, m.title, ms."startDate", ms."endDate", string_agg(g.name, ', ') AS "genre"
  FROM movies m
  JOIN "movieSchedules" ms ON ms."movieId" = m.id
  LEFT JOIN "movieGenre" mg ON mg."movieId" = m.id
  LEFT JOIN genre g ON g.id = mg."genreId"
  WHERE current_date BETWEEN ms."startDate" AND ms."endDate" GROUP BY m.id, ms.id`;

  db.query(sql, call)
}
