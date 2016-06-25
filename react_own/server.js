express = require("express")
server = express()

hbs = require("express-hbs")

server.engine("hbs", hbs.express4({partialsDir : __dirname + "views/partials"}))

server.set("view engine", "hbs")


server.get("/", (req, resp) => {

	resp.status(200)
	resp.send("<h1>You are a genious!</h2>")

})


server.listen(3000)