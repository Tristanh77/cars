const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

router.post('/cars/:id/reviews', reviewCtrl.create);
router.delete('/reviews/:id', reviewCtrl.delete);

module.exports = router;