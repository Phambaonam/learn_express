module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('Hello World!')
  });

  app.get('/json', function (req, res) {
    res.json({msg: 'Hello'})
  });
}