//Ví dụ này sử dụng Router trong express 4 !

module.exports = function (express) {
	const router = express.Router()
	// middleware specific to this router
	router.use(function timeLog(req, res, next) {
		console.log('Time: ', Date.now())
		next()
	})
	// define the home page route
	router.get('/', (req, res) => {
		res.status(200).send('list all people')
	})
	// define the about route
	router.get('/:id', (req, res) => {
		res.send(`display a person with id ${req.params.id}`)
	})

	return router
}