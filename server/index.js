const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var routesApi = require('./routes/index');

const app = express()

app.use(pino);

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json({type: 'application/json'}));
app.use('/', routesApi);

var port = 3001;

app.listen(port,(err) => {
	console.log('Running server on port '+ port);
});



