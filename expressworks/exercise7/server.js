express = require("express")
fs = require("fs")
app = express()

app.get("/books", function(req, resp) {

	f = fs.readFileSync(process.argv[3], "utf8")
	resp.send(JSON.parse(f))

})

app.listen(process.argv[2])