const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/about/:id', (req, res) => {
  console.log(req)
  console.log('req:id = ' + req.params.id)
  res.send('This is about page')
})

app.listen(3000, function() {
  console.log('server listens at port 3000')
})

