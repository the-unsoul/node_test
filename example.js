var http = require('http');
var h = new helper(3300);

/**
 *
 * create simple nodejs server
 * @param  {Object} req  Request object
 * @param  {Object} res  Response object		
 */
var server = http.createServer(function (req, res) {
	console.log('\n oy! I just got a request\n');
	res.end("hey this is my node server: \n");
	h.printObject(req);
});

console.log("server listen to current port: "+h.port);
server.listen(h.port);


/**
 * helper containt stuff to use with server
 * @return port: 3000 !default
 * @printObject: print contents of an object
 */
function helper(port){this.port = port;}
helper.prototype.printObject = function(o){var out = ''; for (var p in o) {out += p + ': ' + o[p] + '\n'; } console.log(out); };
