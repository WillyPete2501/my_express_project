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

app.get('/:num', (req, res, next) => {
  const num = req.params.num
  if (!Number(num)) {
    next({ status: 400, message: 'Please enter a number!' })
  } else {
    res.json({ message: `${num} is a great number.` })
  }
})

app.use((err, req, res, next) => {
  res.status(err.status).json({ error: err })
})

app.listen(PORT, function () {
  console.log(`listen functions check ${PORT}`)
})
