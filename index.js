const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/json', function (req, res) {
  res.json({msg: 'Hello'})
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.json(req.body)
})

const server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports = server;