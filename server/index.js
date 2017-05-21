// mingle/src/server.js

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../public'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function (req, res){
	console.log('req: ', req.body);
	res.send(req.body);
});

app.listen(3000, function (){
	console.log('Example app listening on port 3000!');
	console.log('__dirname: ', __dirname+'/../public');
});