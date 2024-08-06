function setup() {
    createCanvas(500, 500);
    strokeWeight(20);
    frameRate(15);
}

function draw() {
    background(0);
    for (let i = 0; i < width; i += 50) {
        for (let j = 0; j < height; j += 50) {
            criss(i, j);
            cross(i, j);
        }
    }
}

function criss(x, y) {
    push();
    translate(x, y);
    stroke(random(255), random(255), random(255));
    let offset1 = map(sin(frameCount * 0.1 + x + y), -1, 1, -10, 10);
    let offset2 = map(cos(frameCount * 0.1 + x + y), -1, 1, -10, 10);
    line(0 + offset1, 0 + offset2, 50 + offset1, 50 + offset2);
    pop();
}

function cross(x, y) {
    push();
    translate(x, y);
    stroke(random(255), random(255), random(255));
    let offset1 = map(sin(frameCount * 0.1 + x + y), -1, 1, -10, 10);
    let offset2 = map(cos(frameCount * 0.1 + x + y), -1, 1, -10, 10);
    line(50 + offset1, 0 + offset2, 0 + offset1, 50 + offset2);
    pop();
}
