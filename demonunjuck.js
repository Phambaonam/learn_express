const express = require('express')
const app = express()

//---------View Template Engine -------------
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
	autoescape: true,
	cache: false,
	express: app,
	watch: true
})
app.engine('html', nunjucks.render)
app.set('view engine', 'html')


app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/about/:id', (req, res) => {
  console.log(req)
  console.log('req:id = ' + req.params.id)
  res.send('This is about page')
})

app.get('/add', (req, res) => {
	res.render('add.html')
})

app.listen(3000, function() {
  console.log('server listens at port 3000')
})

