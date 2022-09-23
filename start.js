// entry point to program


// sudo code

// loop:
// listen for events
// if starting send event START
// 


// sprite sheet ref: https://github.com/CodingTrain/Coding-Challenges/blob/main/111_animated_sprite

let eventSignal = "START";

function setup() {
    // set width equal to div widht, we dont want it to be too small
    let dims = calcCanvasDimensions();
    var canvas = createCanvas(dims[0], dims[1]);
    canvas.parent("mainCanvas");

    noLoop();
}

function draw() {
    clear();

    listenforEvents();

    background(200, 30, 130);
}

function keyPressed() {
    return false;
}

function mouseReleased() {
    return false;
}

function calcCanvasDimensions() {

    return [windowWidth, windowHeight];
}

function windowResized() {
    let dims = calcCanvasDimensions();
    resizeCanvas(dims[0], dims[1]);
}
