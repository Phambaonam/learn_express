const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./router')(app);


const server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports = server;