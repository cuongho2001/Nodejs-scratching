console.log(' Secret message in port 8080. Reading html file in port 3000');

var http = require('http');
var a = require('./eskeetitModule');  //deleted. Create another one named "eskeetitModule"
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	res.write(' Date and Time is: ' + a.getDate() + '\n');

	var q = url.parse(req.url, true).query;
	var text = " " + q.name + " " + q.drug + " " + q.sound;
	res.write(text + '\n');

	res.write(' Smoke some dank with grandma.\n');
    res.end(' ESKEETIT!!');
}).listen(8080);

http.createServer(function (req, res) {
	var fileName = "." + url.parse(req.url,true).pathname;
	fs.readFile(fileName, function (err,data) {
		if (err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});

}).listen(3000);