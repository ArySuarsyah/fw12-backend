const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // extended ???

app.use('/', require('./src/routes')) //lempar ke routes

app.get('/', (request, response) => {
  return response.status(200).json({
    success: true,
    message: 'Backend is running'
  })
})


app.listen(8888, () => {
  console.log('App listening in port 8888');
});
