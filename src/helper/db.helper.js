const { Pool } = require('pg'); // untuk membuat koneksi pada database


const db = new Pool({
  connectionString: "postgresql://postgres:1@localhost:5432/super_movie?schema=public"
});


module.exports = db