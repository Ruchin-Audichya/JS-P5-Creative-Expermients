function setup() {
  createCanvas(500, 500);
  frameRate(30);
}

function draw() {
  background(0);
  let lines = 20, spacing = width / lines, time = frameCount * 0.02;
  
  for (let i = 0; i < lines; i++) {
    let offset = sin(time + i * 0.1) * spacing;
    stroke(frameCount < 150 ? 255 : map(sin(time + i * 0.1), -1, 1, 50, 255), frameCount < 150 ? 255 : map(cos(time + i * 0.1), -1, 1, 50, 255), frameCount < 150 ? 255 : map(sin(time + i * 0.1), -1, 1, 150, 255));
    strokeWeight(1);
    line(i * spacing, 0, width - offset, height);
    line(width, i * spacing, offset, height);
    line(i * spacing, height, width - offset, 0);
    line(0, i * spacing, width, height - offset);
  }
}
