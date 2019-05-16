var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var calculate  = require('../helpers/calculate.js');
const {check, validationResult} = require('express-validator/check');

// Input is sanatized and validated using express validator
router.post('/calculate', [
	check('number')
	.toInt().isInt({gt:-1}).withMessage('Number should be positive')
	.isInt({lt:40000000}).withMessage('Number should be less than 40000000 ')
	.not().isIn([0,1]).withMessage('Number should be bigger than 1')
	],	(req, res) => {
		
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json(errors.array());
		}

		let median = calculate.getMedian(req.body.number);
		res.send(JSON.stringify(median))
	});

module.exports= router;
