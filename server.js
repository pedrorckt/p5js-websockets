var express = require('express')

var app = express()
var server = app.listen(3000)
var serve = express.static('public')

app.use(serve)
