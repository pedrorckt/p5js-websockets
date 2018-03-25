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
  fill(127, 15, 127);
  noStroke();
  ellipse(data.x, data.y, 10, 10);
}

function mouseDragged() {
  fill(15, 127, 127);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('draw', data)

}
