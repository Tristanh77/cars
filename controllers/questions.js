// import our movie Model so we can find the movie we want to add a review too
const car= require("../models/car");
const CarModel = require("../models/car");

module.exports = {
  create,
  delete: deleteQuestion,
};

function deleteQuestion(req, res) {
  CarModel.findOne({
    "questions._id": req.params.id,
    "questions.userId": req.user._id,
  }).then(function (carDoc) {
    console.log(carDoc);
	if(!carDoc) return res.redirect('/cars');
	carDoc.questions.remove(req.params.id); 
	carDoc.save().then(function(){
		res.redirect(`/cars/${carDoc._id}`);
	})


  }).catch(err => {
	res.send(err)
  })
}

function create(req, res) {
  console.log(req.body, " <- req.body in create review");
  CarModel.findById(req.params.id)
    .then(function (carDocument) {
      console.log(carDocument);
      req.body.username = req.user.name;
      req.body.userId = req.user._id;
      req.body.userAvatar = req.user.avatar;
      carDocument.questions.push(req.body);
      carDocument.save().then(function () {
        res.redirect(`/cars/${req.params.id}`);
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}
