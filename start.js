// entry point to program


// sudo code

// loop:
// listen for events
// if starting send event START
// 


// sprite sheet ref: https://github.com/CodingTrain/Coding-Challenges/blob/main/111_animated_sprite


function setup() {
    // set width equal to div widht, we dont want it to be too small
    let dims = calcCanvasDimensions();
    var canvas = createCanvas(dims[0], dims[1]);
    canvas.parent("mainCanvas");

    frameRate(30);

    noLoop();
}

function draw() {
    clear();



    listenForEvents();

}

function keyPressed() {
    return false;
}

function mouseReleased() {
    return false;
}

function mouseMoved() {
    eventLine.push("MOUSE_MOVED");
    listenForEvents();
}

function calcCanvasDimensions() {

    return [windowWidth, windowHeight];
}

function windowResized() {
    let dims = calcCanvasDimensions();
    resizeCanvas(dims[0], dims[1]);
}