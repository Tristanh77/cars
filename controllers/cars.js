const CarModel = require('../models/car');

module.exports = {
    index,
    new: newListing,
    create,
    show,
    all
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
			
				console.log(carWeCreatedInTheDb, " <- car document")
				res.redirect(`/cars/${carWeCreatedInTheDb._id}`); // 404 because we haven't made the index route yet
		
			}).catch((err) => {
				console.log(err);
				res.send('There was an error check the terminal, or log the err object')
			})

}

function show(req, res) {
	
	CarModel.findById(req.params.id)
			  .then(function(carDoc){
				console.log(carDoc)
					res.render('cars/show', {
                        car: carDoc,
                    })
			  }).catch((err) =>{
				console.log(err);
				res.send(err)
			  })
  }

  function all(req,res){
    CarModel.find({})
	// MovieModel.find is our mongoose model going to mongodb
	// to find all the movies in the movies collection
	// when the model comes back from the database
	// we want a function to run
	// that is the .then
			  .then(function(allCars){

				console.log(allCars, " <_ data from the db")
				// respond to the client in the .then, we have to wait 
				// for the data to come back from the database
				res.render('cars/all', {cars: allCars})
			  }).catch(function(err){
				console.log(err);
				res.send(err)
			  })
  }