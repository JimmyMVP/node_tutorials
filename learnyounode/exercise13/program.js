http = require("http")
url = require("url")

server = http.createServer(function(request, response) {

	parsed = url.parse(request.url, true)

	if(parsed["pathname"] == "/api/parsetime") {
		response.writeHead(200, {'Content-Type' : 'application/json'})
		timestring = parsed["query"]["iso"]
		date = new Date(timestring)

		json = JSON.stringify({"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()})
		response.end(json)

	} else if(parsed["pathname"] == "/api/unixtime") {
		response.writeHead(200, {'Content-Type' : 'application/json'})
		timestring = parsed["query"]["iso"]
		date = new Date(timestring)

		json = JSON.stringify({"unixtime" : date.valueOf()})
		response.end(json)


	} else {

		response.writeHead(-1, {'Content-Type' : 'application/json'})

	}

})


server.listen(process.argv[2])