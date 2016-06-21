module.exports = function(dir, ext, callback) {


	var fs = require("fs")
	var path = require("path")

	function func(err, files) {

			if(err) {
				return callback(err);
			}

		var ok = [];
		files.forEach(function(file, index){

			if(path.extname(file) ==  "."+ext) {
				ok.push(file);
				console.log(file)
			} else {
			}
		});
		var data = "Success";
		return callback(null, ok);
	}

	return fs.readdir(dir, func);


}
