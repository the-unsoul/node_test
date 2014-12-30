var http = require('http');

var server = http.createServer(function (req, res) {
	var h = new helper();
	console.log('\n oy! I just got a request\n');
	res.end("hey this is my node server: \n");
	h.printObject(req);
});

server.listen(8080);

function helper(){
}
helper.prototype.lognow = function(){
	console.log('test');
};
helper.prototype.printObject = function(o){
	var out = '';
  	for (var p in o) {
    	out += p + ': ' + o[p] + '\n';
  	}
  	console.log(out);
};
