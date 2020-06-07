var population;
var lifespan = 100;
var lifeP;
var count = 0;
var target;
var maxforce = 1;
var inside = false;
var numberofhits = 0;
var numberofhitsP;
var locked = undefined;
var obstacles = [];
var mutationRate = 0.05;

function reset() {
  population.reset();
  this.obstacles = [];
}

function Target() {
  this.pos = createVector(width / 2, 50);
  this.r = 30;
  this.color = [color(0, 0, 255), color(255, 255, 255), color(255, 0, 0)];

  this.show = function () {
    noStroke();
    for (var i = 0; i < this.color.length; i++) {
      fill(this.color[i]);
      ellipse(this.pos.x, this.pos.y, this.r - 10 * i, this.r - 10 * i);
    }
  };
}

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.8);
  population = new Population();
  lifeP = createP();

  numberofhitsP = createP();

  target = new Target();
  numberofhitsP.style("color:white");

  lifeP.style("color:white");
}

function draw() {
  background(0);
  population.run();

  lifeP.html("Iterations for this epoch: " + count);
  numberofhitsP.html("Number of Hits in this epoch: " + numberofhits);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
    numberofhits = 0;
  }

  if (drawrect) {
    if (locked == true) {
      var w = abs(mouseX - startPos.x);
      var h = abs(mouseY - startPos.y);
      var tempColor = color(120);
      tempColor.setAlpha(100);
      stroke(20);
      fill(tempColor);
      var corner = createVector(
        mouseX < startPos.x ? mouseX : startPos.x,
        mouseY < startPos.y ? mouseY : startPos.y
      );
      rect(corner.x, corner.y, w, h);
    }
  } else if (locked == false) {
    console.log(locked);
    var temp = new Obstacle();
    obstacles.push(temp);
    drawrect = false;
    locked = undefined;
  }

  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }

  fill(color(255, 110, 0));
  target.show();
}