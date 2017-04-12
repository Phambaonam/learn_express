//Export toàn bộ nội dung của function này

module.exports = function (app, csrfProtection) {
	app.get('/', function (req, res) {
		res.render('index')
	});

	app.get('/about', function (req, res) {
		res.send('<h1>This is demo for real time Node monitor</h1>');
	});

	app.get('/route', function (req, res) {
		let routes = ''
		for (let i = 0; i < app._router.stack.length -1; i++) {
			let layer = app._router.stack[i]
			if (layer.route != undefined) {
				routes = routes.concat(`${layer.route.path} <br>`)
			}
		}
		res.send(routes)
	})

	//----- Render Nunjucks view
	app.get('/hello', function (req, res) {
		res.render('hello', {
			name: 'Trịnh Minh Cường',
			photo: 'cuong.jpeg',
			class: [ 'iOS', 'Python', 'C++', 'Node.js', 'Scratch' ]
		})
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

	//------ Show cookies
	app.get('/show_cookie', (req, res) => {
		// It should display something like this
		// {"_js_datr":"1XHrWKk0eO29Cs3H-Z8oq88A","_csrf":"RMkBG6vkw92wHsWQjeMrfY3T"}
		res.cookie('secret_token', 'hello world')  //Set cookie

		res.send(req.cookies) //Get cookie
	})


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


	//------------ Demo without CSFR-----------

	app.get('/transfer', (req, res) => {
		res.render('transfer')
	})

	app.post('/transfer', (req, res) => {
		console.log(req.body)
		res.send('Money transfered successfully')
	})

	//Secured transfer money
	app.get('/secure_transfer', csrfProtection, (req, res) => {
		res.render('secure_transfer', {csrfToken: req.csrfToken()})
	})

	app.post('/secure_transfer', csrfProtection, (req, res) => {
		console.log(req.body)
		res.send('Money transfered successfully')
	})

}