var socket;

function setup() {
  createCanvas(400,400);
  background(0);

  socket = io.connect('http://localhost:3000');
  socket.on('draw', externalDraw);

}

function draw() {
  //
}

function externalDraw(data) {
  stroke(127, 15, 127);
  strokeWeight(10);
  line(data.px, data.py, data.x, data.y);
}

function mouseDragged() {
  stroke(15, 127, 127);
  strokeWeight(10);
  line(pmouseX, pmouseY, mouseX, mouseY);

  var data = {
    px: pmouseX,
    py: pmouseY,
    x: mouseX,
    y: mouseY
  }

  socket.emit('draw', data)

}
