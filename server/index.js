const express = require('express')
const app = express()
const list = require('./list.json')
var cors = require('cors')

app.use(cors())

app.get('/list', function (req, res) {
  res.send(list)
})

app.listen(5000, function () {
  console.log('job teaser app listening on port 5000')
})