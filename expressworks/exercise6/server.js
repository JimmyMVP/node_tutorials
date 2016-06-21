var express = require("express")

app = express()

app.get("/search", function(req, resp) {

	resp.send(req.query)

})

app.listen(process.argv[2])