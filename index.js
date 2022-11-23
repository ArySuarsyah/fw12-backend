
const express = require('express');
const db = require('./src/helper/db.helper')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // extended ???

app.use('/', require('./src/routes')) //lempar ke routes


db.connect((err) => {
  if (err) {
    console.log('Database is not Connect!!!');
  } else {
    console.log('Database connected');
  }
});


// kenapa di simpan di index.js ???
app.get('/', (request, response) => {
  db.query('SELECT * FROM users', (err, res) => {  // ???
    if (err) {
      return response.status(500).json({
        success: false,
        message: "Access failed"
      })
    } else {
      return response.status(200).json({
        success: true,
        message: "Access success",
        data : res
      })
    }
  });
})

app.listen(8888, () => {
    console.log('App listening in port 8888');
})
