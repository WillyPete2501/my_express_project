const express = require('express')
const app = express()
const PORT = 3000

app.get('/home', function (req, res) {
  res.send('get/home functions check')
})

app.get('/test', function (req, res) {
  res.send('get/test functions check')
})

app.get('/about', function (req, res) {
  res.send('get/about functions check')
})

app.post('/', function (req, res) {
  res.send('post functions check')
})

app.listen(PORT, function () {
  console.log(`listen functions check ${PORT}`)
})
