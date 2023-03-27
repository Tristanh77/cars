var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars');
const isLoggedIn = require('../config/auth');

router.get('/', carsCtrl.index);
router.get('/all', carsCtrl.all)
router.get('/new', carsCtrl.new);
router.get('/:id', carsCtrl.show);
router.post('/',isLoggedIn, carsCtrl.create);

module.exports = router;