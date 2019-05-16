var express = require('express');
var router = express.Router();

// Controller to handle the request
var ctrlMain = require('../controllers/main');

//Route for calculating the Median
router.post('/calculate',ctrlMain);

module.exports = router;