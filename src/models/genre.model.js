const db = require('../helper/db.helper');

exports.readAllGenre = (call) => {
  const sql = 'SELECT * FROM "genre"';

  db.query(sql, call)
};

exports.readGenre = (data, call) => {
  const sql = 'SELECT * FROM "genre" WHERE "id" = $1';
  const value = [data.id];

  db.query(sql, value, call)
};

exports.createGenre = (data, call) => {
  const sql = 'INSERT INTO "genre"("name") VALUES ($1) RETURNING *'
  const value = [data.name];

  db.query(sql, value, call)
};

exports.updateGenre = (data, call) => {
  const sql = 'UPDATE "genre" SET "name" = $1 WHERE "id" = $2 RETURNING *'
  const value = [data.body.name, data.params.id]

  db.query(sql, value, call);
};

exports.deleteGenre = (data, call) => {
  const sql = 'DELETE FROM "genre" WHERE "id" = $1 RETURNING *';
  const value = [data.params.id];

  db.query(sql, value, call)
};