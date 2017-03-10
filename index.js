const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const shortid = require('shortid')

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));


//app.upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
});

function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(new Error(file.mimetype + ' is not accepted'))
    }
}

app.upload = multer({storage: storage, fileFilter: fileFilter})


require('./router')(app);


const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Error: ' + err.message)
});

module.exports = server;
