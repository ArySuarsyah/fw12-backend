const { Pool } = require('pg'); // untuk membuat koneksi pada database

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:1@localhost:5432/super_movie?schema=public";

const db = new Pool({
  connectionString,
});


module.exports = db