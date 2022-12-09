const db = require('../helper/db.helper')



exports.readAllCasts = (data, call) => {
  const sql = 'SELECT * FROM "casts" '
  // const values = [data.limit, data.offset]
  db.query(sql, call)
};


exports.readCasts = (data, call) => {
  const sql = 'SELECT * FROM "casts" WHERE "id" = $1'
  const value = [data.id]

  db.query(sql, value, call)
};


exports.updateCasts = (data, call) => {
  const sql = `UPDATE "casts" SET "name" = COALESCE(NULLIF($1, ''), "name")WHERE "id" = $2 RETURNING *`
  const value = [data.body.name, data.params.id]

  db.query(sql, value, call);
};


exports.createCasts = (data, call) => {
  const sql = 'INSERT INTO "casts" ("name") VALUES ($1) RETURNING *'
  const value = [data.name]

  db.query(sql, value, call)
};


exports.deleteCasts = (data, call) => {
  const sql = 'DELETE FROM "casts" WHERE "id" = $1 RETURNING *'
  const values = [data.params.id]

  db.query(sql, values, call)
};


exports.searchCasts = (filter, call) => {
  const sql = `SELECT * FROM "casts" WHERE "name" LIKE $1 ORDER BY "${filter.shortBy}" ${filter.short} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`, filter.limit, filter.offset];

  db.query(sql, values, call)
};

