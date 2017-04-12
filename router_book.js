module.exports = function (app) {
	//
	app.route('/book')
		.get((req, res) => {
			res.send('Get a random book')
		})
		.post((req, res) => {
			res.send('Add a book')
		})
		.put((req, res) => {
			res.send('Update the book')
		})
		.delete((req, res) => {
			res.send('Delete a book')
		})
}