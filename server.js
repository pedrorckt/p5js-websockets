var express = require('express')

var app = express()
var server = app.listen(3000)
var sketch = express.static('public')
var lib = express.static('node_modules')

app.use('/', sketch)
app.use('/libraries', lib)

var socket = require('socket.io')
var io = socket(server)

io.sockets.on('connection', socket => {
  // server recebe dados do mouse e manda de volta todos os outros
  socket.on('draw', data => {
    socket.broadcast.emit('draw', data)
  })
})
