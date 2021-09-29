function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(8);
}

function draw() {
  background("ffffff");

  for (var i = 0; i < 1000; i++) {
    fill("ffffff");
    rect(random(-width / 2, width), random(0, height), width / 3, 5);
    stroke("black");
    strokeWeight(1.5);
  }

  colorMode(HSB);

  for (var i = 0; i < 500; i++) {
    rect(random(0, width), random(0, height), 6, 6);
    fill(lerpColor(color(0, 100, 90), color(255, 100, 90), random(0, 1)));
    stroke("black");
    strokeWeight(1.5);
  }
}
