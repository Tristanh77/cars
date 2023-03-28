const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/questions');

router.post('/cars/:id/questions', questionCtrl.create);
router.delete('/questions/:id', questionCtrl.delete);

module.exports = router;