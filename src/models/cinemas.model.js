const db = require('../helper/db.helper');


exports.readAllCinemas = (call) => {
  const sql = 'SELECT * FROM "cinemas" LIMIT 3 OFFSET 4';


  db.query(sql, call)
};


exports.readCinema = (data, call) => {
  const sql = 'SELECT * FROM "cinemas" WHERE "id" = $1'

  const value = [data.id];

  db.query(sql, value, call)
};


exports.createCinema = (data, call) => {
  const sql = 'INSERT INTO "cinemas" ("picture", "name", "address", "city") VALUES ($1, $2, $3, $4) RETURNING *'
  const value = [data.picture, data.name, data.address, data.city];

  db.query(sql, value, call)
};


exports.updateCinema = (data, call) => {
  const sql = `UPDATE "cinemas" SET "picture" = COALESCE(NULLIF($1, ''), "picture"), "name" = COALESCE(NULLIF($2, ''), "name") , "address" = COALESCE(NULLIF($3, ''), "address"), "city" = COALESCE(NULLIF($4, ''), "city") WHERE "id" = $5 RETURNING *`
  const value = [data.body.picture, data.body.name, data.body.address, data.body.city, data.params.id]

  db.query(sql, value, call)
}


exports.deleteCinema = (data, call) => {
  const sql = 'DELETE FROM "cinemas" WHERE "id" = $1 RETURNING *'
  const value = [data.params.id]

  db.query(sql, value, call)
}