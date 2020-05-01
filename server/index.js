const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const seed = require('../database/seed.js');
const app = express()
const PORT = 3000


app.use(bodyParser.json())

// app.get('/restaurants/pictures', (req, res) => {
//   res.send('I see you')
// })

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