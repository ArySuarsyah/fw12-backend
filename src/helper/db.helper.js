const { Pool } = require('pg'); // untuk membuat koneksi pada database


const db = new Pool ({ // membuat varibael untuk mendefenisikan koneksi pada databse
  host: 'localhost',
  port: 5432,
  password: '1',
  user: 'postgres',
  database: 'super_movie'

});

db.connect((err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Success');
  }
});

module.exports = db