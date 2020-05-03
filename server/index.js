const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const PORT = 3000
const model = require('../database/model.js');


app.use(bodyParser.json())

// app.get('/:restaurant_id/popular_dish', (req, res) => {
//   // console.log(req.params.restaurant_id)
//   res.send('hello')
// })
app.get('/:restaurant_id/popular_dish', model.fetchPopDish);

app.get('/:populardish_id/pictures', model.fetchPictures);

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(PORT, () => {
  console.log(`Are you spying on my port: ${PORT}?`)
})

//app.post, app.get, app.delete, app.put
// app.post ('/restaurants', (req, res) => {
//   res.send('hello')
// })
// app.get('/restaurants', (req, res) => {
//   res.send(req)
// })