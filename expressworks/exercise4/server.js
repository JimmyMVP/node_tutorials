var express = require("express")
var bodyparser = require("body-parser")

var app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.post("/form", function(req, resp) {

	  resp.end(req.body.str.split('').reverse().join(''))


})

app.listen(process.argv[2])