const CarModel = require('../models/car');

module.exports = {
    index,
    new: newListing,
    create
}

function index(req,res){
    res.render('cars/index')
}

function newListing(req,res){
    res.render('cars/new')
}

function create(req, res){

	console.log(req.body, " <- contents of the form, req.body");

	CarModel.create(req.body)
	.then(function(carWeCreatedInTheDb){
			
				// This function is the callback, to the create method, 
				// so this functions gets called after we get a response from the database
				// that we added the contents of the form (req.body) to the database
				console.log(carWeCreatedInTheDb, " <- car document")
				// Always respond to the client, in the cb function of the model
				// because we want to make sure the database performed its job before 
				// we respond to the client
				res.redirect(`/cars/${carWeCreatedInTheDb._id}`); // 404 because we haven't made the index route yet
		
			}).catch((err) => {
				console.log(err);
				res.send('There was an error check the terminal, or log the err object')
			})
	// I like to use res.send just to check if I'm able to make an 
	// http request to my POST, 
	// res.send('Hitting the Post Route, check the terminal for the contents of the form')

}