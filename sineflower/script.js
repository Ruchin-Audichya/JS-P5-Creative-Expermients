function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    background(0); 
}

function draw() {
    if (frameCount === 180) {
        // capturer.start()
    }

    background(0, 30); 
    noFill();
    stroke(255); // Set stroke color to white

    translate(width / 2, height / 2);

    for (var n = 0; n < 10; n++) {
        beginShape();
        for (var i = 0; i < 360; i += 4) {
            var rad = map(sin(i * 2 + frameCount), -1, 1, 50, 150);
            var x = rad * cos(i);
            var y = rad * sin(i);

            vertex(x, y);
        }
        endShape(CLOSE);
        rotate(frameCount / 10);
    }

}
