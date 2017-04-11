const express = require('express')
const app = express()


//--------Body Parser ----------------------
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
	extended: true
}))

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

//--------Serve static resource -------------
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
	res.render('sara')
})

const server = app.listen(4000, function () {
	console.log('Attacking app listening on port 4000!')
})
