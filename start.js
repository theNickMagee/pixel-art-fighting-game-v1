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

    cursor(CROSS);

    frameRate(30);

    displayMenuPage();

}

function draw() {
    // clear();

    //every 2 frames we listen for display updates
    listenForEvents();
    eventLine = eventLineNextFrame.slice();
    eventLineNextFrame = [];


}

function keyPressed() {
    return false;
}

function mouseReleased() {
    eventLineNextFrame.push({ title: "MOUSE_RELEASED", x: mouseX, y: mouseY });
    return false;
}

function mouseMoved() {
    eventLineNextFrame.push({ title: "MOUSE_MOVED", x: mouseX, y: mouseY });
    return false;
}

function calcCanvasDimensions() {

    return [windowWidth, windowHeight];
}

function windowResized() {
    let dims = calcCanvasDimensions();
    resizeCanvas(dims[0], dims[1]);
}
