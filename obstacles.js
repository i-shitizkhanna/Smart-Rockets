var startPos;
var endPos;
var drawrect = false;

function mousePressed() {
  console.log("PRESSED!");
  startPos = createVector(mouseX, mouseY);
  console.log(startPos);
  drawrect = true;
  locked = true;
}

function mouseReleased() {
  console.log("RELEASED !");
  endPos = createVector(mouseX, mouseY);
  console.log(endPos);
  locked = false;
}

function Obstacle() {
  this.corner1 = createVector(startPos.x, startPos.y);
  this.corner2 = createVector(endPos.x, endPos.y);
  this.show = function () {
    var width = abs(this.corner1.x - this.corner2.x);
    var height = abs(this.corner1.y - this.corner2.y);
    stroke(0);
    fill(45);

    var corner = createVector(
      this.corner1.x < this.corner2.x ? this.corner1.x : this.corner2.x,
      this.corner1.y < this.corner2.y ? this.corner1.y : this.corner2.y
    );

    this.corner1 = corner;
    this.corner2.x = this.corner1.x + width;
    this.corner2.y = this.corner1.y + height;
    rect(corner.x, corner.y, width, height);
  };
  console.log(this.corner1);
  console.log(this.corner2);
  console.log(width);
  console.log(height);
}
