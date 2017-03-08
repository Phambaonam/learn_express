module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Hello World!')
  });

  app.get('/json', function (req, res) {
    res.json({msg: 'Hello'})
  });

  app.post('/upload', app.upload.single('photo'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    console.log(req.body);
    res.send('Upload success');
  })

}