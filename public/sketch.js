function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  //
}

function mouseDragged() {
  fill(15, 127, 127);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}
