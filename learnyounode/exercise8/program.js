var http = require("http")
var bl = require("bl")

http.get(process.argv[2], function(resp) {


	resp.pipe(bl(function(err, data){

		str = data.toString();
		console.log(str.length)
		console.log(str);

	}));

});