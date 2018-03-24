var express = require('express')

var app = express()
var server = app.listen(3000)
var sketch = express.static('public')
var p5 = express.static('node_modules/p5')

app.use('/', sketch)
app.use('/p5', p5)
