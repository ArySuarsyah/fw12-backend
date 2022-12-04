const db = require('../helper/db.helper')



exports.readAllResetPassword = (call) => {
  const sql = 'SELECT * FROM "resetPassword"'

  db.query(sql, call)
};


exports.readResetPassword = (data, call) => {
  const sql = 'SELECT * FROM "resetPassword" WHERE "id" = $1'
  const values = [data.id]

  db.query(sql, values, call)
};



exports.getResetPasswordByEmailAndCode = (email, code, call) => {
  const sql = 'SELECT * FROM "resetPassword" WHERE email = $1 AND code = $2'
  const values = [email, code]

  db.query(sql, values, call)
};


exports.createResetPassword = (data, call) => {
  const sql = 'INSERT INTO "resetPassword" ("email", "userId", "code", "password", "confirmPassword") VALUES ($1, $2, $3, $4, $5) RETURNING *'
  const values = [data.email, data.userId, data.code, data.password, data.confirmPassword]

  db.query(sql, values, call)
};


exports.updateResetPassword = (data, call) => {
  const sql = `UPDATE "resetPassword" "email" = COALESCE(NULLIF($1, ''), "email"), "userId" = COALESCE(NULLIF($2, '')::INTEGER, "userId"), "code" = COALESCE(NULLIF($3, ''), "code"), password = COALESCE(NULLIF($4, ''), "password"), confirmPassword = COALESCE(NULLIF($5, ''), "confirmPassword") WHERE "id" = $6 RETURNING *`
  const values = [data.body.email, data.body.userId, data.body.code, data.params.id]

  db.query(sql, values, call)
};


exports.deleteResetPassword = (data, call) => {
  const sql = 'DELETE FROM "resetPassword" WHERE "id" = $1 RETURNING *'
  const values = [data.id]

  db.query(sql, values, call)
};


exports.deletePassword = (id, call) => {
  const sql = 'DELETE FROM "resetPassword" WHERE id= $1 RETURNING *'

  const values = [id]

  db.query(sql, values, call)
}