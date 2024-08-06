function setup() {
  createCanvas(400, 400);
  strokeWeight(14);
  frameRate(20);
}

function draw() {
  background(0);
  for (let i = 0; i < width; i += 40) {
    for (let j = 0; j < height; j += 40) {
      drawDynamicCircle(i, j);
    }
  }
}

function drawDynamicCircle(x, y) {
  push();
  translate(x + 20, y + 20);
  noFill();
  let r = random(255);
  let g = random(255);
  let b = random(255);
  stroke(r, g, b);
  
  // Apply shadow for glow effect
  drawingContext.shadowBlur = 15;
  drawingContext.shadowColor = color(r, g, b);
  
  let size = 20 + 10 * sin(frameCount * 0.1 + (x + y) * 0.1);
  let pulse = map(sin(frameCount * 0.1), -1, 1, 0.5, 1.5);
  ellipse(0, 0, size * pulse, size * pulse);
  
  // Reset shadow settings to default
  drawingContext.shadowBlur = 1;
  pop();
}
