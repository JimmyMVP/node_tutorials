var express = require("express")

sha1 = require('crypto').createHash('sha1')

app = express()

app.put("/message/:id", function(req, resp) {

	digest = sha1.update(new Date().toDateString() + req.params.id).digest('hex')
	resp.end(digest)

})

app.listen(process.argv[2])