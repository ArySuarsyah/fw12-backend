const express = require('express');
// Morgan, cors
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // extended ???

app.use('/', require('./src/routes')) //lempar ke routes
app.use("/assests/picture", express.static("picture/"));
app.get('/', (request, response) => {
  return response.status(200).json({
    success: true,
    message: 'Backend is running'
  })
})


app.listen(8888, () => {
  console.log('App listening in port 8888');
});
