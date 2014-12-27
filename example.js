var http = require('http');

var server = http.createServer(function (req, res) {
	console.log('\n oy! I just got a request\n');
	res.end("hey this is my node server");
});

server.listen(8080);