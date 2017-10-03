const express = require('express');
const data = require('./data');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static('public'))

app.get('/users', function (req, res) {
	res.json(data);
});

app.listen(9999, function () {
	console.log('Started server at port 9999')
});
