express = require("express")
//Include react transpiler
react = require("express-react-views")
server = express()


server.engine("jsx", react.createEngine())
server.set("view engine", "jsx")



server.get("/", (req, resp) => {

	resp.status(200)
	resp.send("<h1>You are a genious!</h2>")

})


server.listen(3000)