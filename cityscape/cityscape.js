let buildings = [];

function setup() {
    createCanvas(600, 600);
    frameRate(30);

    // Create buildings with windows
    for (let i = 0; i < width; i += 60) {
        let buildingHeight = random(100, 400);
        let windows = [];
        for (let j = 0; j < buildingHeight; j += 20) {
            for (let k = 0; k < 60; k += 20) {
                windows.push({ x: i + k + 5, y: height - buildingHeight + j + 5, on: random() > 0.5 });
            }
        }
        buildings.push({ x: i, y: height - buildingHeight, w: 60, h: buildingHeight, windows: windows });
    }
}

function draw() {
    // Draw gradient background
    for (let y = 0; y < height; y++) {
        stroke(lerpColor(color(75, 0, 130), color(238, 130, 38), y / height));
        line(0, y, width, y);
    }
    
    noStroke();
    
    // Define window colors
    const windowColors = [color(254), color(254, 160, 0), color(254, 50, 200)]; // white, light orange, light yellow
    
    // Draw buildings and windows
    for (let building of buildings) {
        fill(10);
        rect(building.x, building.y, building.w, building.h);
        for (let window of building.windows) {
            let windowColor = window.on ? random(windowColors) : color(20); // Pick a random color if window is on, else dark color
            fill(windowColor);
            rect(window.x, window.y, 15, 8);
        }
    }
    
    // Randomly toggle windows
    if (frameCount % 10 === 0) {
        for (let building of buildings) {
            for (let window of building.windows) {
                window.on = random() > 0.5;
            }
        }
    }
}
