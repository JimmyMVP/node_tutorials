express = require("express")
jade = require("jade")
path = require("path")

app = express()

app.set('views', path.join(__dirname, "template"))
app.set('view engine', 'jade')

app.get('/home', function(req, resp) {

	resp.render("index", {date: new Date().toDateString()})

})

app.listen(process.argv[2])