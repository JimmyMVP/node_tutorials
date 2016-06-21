var http = require("http")
var fs = require("fs")

server = http.createServer(function(request, response) {

	filestream = fs.createReadStream(process.argv[3]);
	filestream.pipe(response);
});

server.listen(process.argv[2])