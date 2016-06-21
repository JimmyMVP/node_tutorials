var dir = process.argv[2];
var ext = process.argv[3];

var fs = require("fs")
var path = require("path")

function callback(err, files) {

	files.forEach(function(file, index){
	if(path.extname(file) ==  "."+ext) {
		console.log(file);
	}

});
}

files = fs.readdir(dir, callback)