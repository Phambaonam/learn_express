module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index')
	});

	app.get('/about', function (req, res) {
		res.send('<h1>This is demo for real time Node monitor</h1>');
	});

	//----- Render Nunjucks view
	app.get('/hello', function (req, res) {
		res.render('hello', {
			name: 'Trịnh Minh Cường',
			photo: 'cuong.jpeg',
			class: ['iOS', 'Python', 'C++', 'Node.js', 'Scratch']})
	});

	//------ Return JSON message
	app.get('/json', function (req, res) {
		res.json({subject: 'Hello', message: "This is hello message from human"})
	});

	//------ Try to raise error
	app.get('/raise_error', function (req, res) {
		console.log('Throw error')
		throw new Error('Fail to accessing database because wrong password')
	});


	app.get('/upload', (req, res) => {
		res.render('upload')
	})

	app.post('/upload', app.upload.single('photo'), function (req, res, next) {
		// req.file is the `avatar` file
		// req.body will hold the text fields, if there were any
		console.log(req.file);
		console.log(req.body);
		res.send('Upload success');
	})


	app.get('/stolen', (req, res) => {
		res.render('facebook')
	})

	app.post('/facebook', (req, res) => {
		console.log(req.body.pass)
		res.status(200).send("Your password is stolen")
	})

	app.get('/login', (req, res) => {
		res.render('login')
	})


	//------------ Demo CSFR

	app.get('/transfer_money', (req, res) => {
		res.render('transfer_money')
	})

	app.post('/transfer', (req, res) => {
		console.log(req.body)
		res.send('Money transfered successfully')
	})

}