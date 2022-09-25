const lilRed = {
    animFile1: {
        animationFileName: "characters/1/sprites/lilRed1.png",
        imgW: 1344,
        imgH: 1463,
        walkFrames: [],
        spriteSheet: null,
        walkInFrames: [77, 78, 120]
    },
    grounded: true,
    running: false,
    x: -100,
    y: 450,
    velX: 0,
    velY: 0,
    accX: 0,
    accY: 0
}

const updateLilRedPos = () => {
    lilRed.x = lilRed.x += lilRed.velX;
    lilRed.y = lilRed.y += lilRed.velY;
    lilRed.velX = lilRed.velX += lilRed.accX;
    lilRed.velY = lilRed.velY += lilRed.accY;



    // console.log(lilRed.y)
    if ((lilRed.y < 400 && lilRed.accY < 10) || (lilRed.x + 50 < width / 3 || lilRed.x - 50 > 2 * width / 3)) {
        lilRed.accY += 1;

    }
    if (lilRed.y > 450 && lilRed.x + 50 > width / 3 && lilRed.x - 50 < 2 * width / 3 && lilRed.y < 500) {
        lilRed.velY = 0;
        lilRed.accY = 0;
        lilRed.y = 450;

    }

    // if (lilRed.x > 200 || lilRed.x < 700) {
    //     lilRed.accY += 1;
    // }

    if (lilRed.accX > 0) {
        lilRed.accX -= 1;

    }

    if (lilRed.accX < 0) {
        lilRed.accX += 1;

    }

    if (lilRed.accX < 2 && lilRed.accX > -2) {
        lilRed.accX = 0;
        lilRed.velX = 0;

    }

    if (lilRed.velX < 1 && lilRed.velX > -1) {
        lilRed.accX = 0;
        lilRed.velX = 0;

    }

    if (lilRed.velX > 13) {
        lilRed.velX = 13;

    }

    if (lilRed.velX < -13) {
        lilRed.velX = -13;

    }



    if (lilRed.velY > 10) {
        lilRed.velY = 10;

    }

    if (lilRed.velY < -10) {
        lilRed.velY = -10;

    }




    // console.log("accelY: ", lilRed.accY);
    // console.log("y: ", lilRed.y);
    // console.log("velY: ", lilRed.velY);
    console.log("x: ", lilRed.x);

    //bottom border
    if (lilRed.y > height || lilRed.x < 0 || lilRed.x > width) {
        lilRed.y = 0;
        lilRed.x = width / 2;
    }



}



const populateLilRed = () => {
    loadImage(lilRed.animFile1.animationFileName, (spriteSheet) => {
        lilRed.animFile1.spriteSheet = spriteSheet;
        eventLineNextFrame.push({
            title: "LIL_RED_WALK_IN", data: {
                currentFrame: 0, startFrame: 0, endFrame: 23
            }
        })
    })

}



const displayLilRedSprite = (frameIndex) => {

    updateLilRedPos();

    let widthInc = lilRed.animFile1.imgW / 12;
    let heightInc = lilRed.animFile1.imgH / 11;

    let sw = widthInc;
    let sh = heightInc;
    let dx = 0;
    let dy = 0;
    let dw = widthInc;
    let dh = heightInc;

    let sx = (frameIndex % 12) * widthInc;
    let sy = floor(frameIndex / 12) * heightInc;

    push();
    imageMode(CENTER);
    scale(-1, 1);
    translate(-lilRed.x * 2, 0);
    copy(lilRed.animFile1.spriteSheet, sx, sy, sw, sh, lilRed.x - dw * 3 / 2, lilRed.y - dh * 3 / 2, dw * 3, dh * 3);
    // stroke(255, 0, 0);
    // strokeWeight(4);
    // rectMode(CENTER);
    // noFill();
    // rect(lilRed.x, lilRed.y, dw * 4, dh * 4)
    // fill(0, 255, 0);
    // rect(lilRed.x, lilRed.y, 50, 50)
    pop();
}

const lilRedWalkIn = (data) => {

    displayBg();

    displayLilRedSprite(data.currentFrame);

    if (data.currentFrame === data.endFrame) {
        data.currentFrame = data.startFrame;
    }

    lilRed.velX = 20;
    updateLilRedPos();
    if (lilRed.x > width / 2) {
        lilRed.x = width / 2;
        removeEventOfType("LIL_RED_WALK_IN");
        eventLineNextFrame.push({ title: "LIL_RED_IDLE", data: { frames: [50, 51], currentFrameIndex: 0 } });
        lilRed.velX = 0;
    } else {
        eventLineNextFrame.push({
            title: "LIL_RED_WALK_IN", data: {
                currentFrame: data.currentFrame + 1, startFrame: 0, endFrame: 23
            }
        })
    }
    // console.log(lilRed.x)
}


const idleBigRed = (data) => {

    // console.log("idling")
    displayBg();

    displayLilRedSprite(data.frames[data.currentFrameIndex])

    if (frameCount % 15 === 0) {
        let nextFrameIndex = data.currentFrameIndex + 1;
        if (nextFrameIndex === 2) {
            nextFrameIndex = 0;
        }
        eventLineNextFrame.push({ title: "LIL_RED_IDLE", data: { frames: [50, 51], currentFrameIndex: nextFrameIndex } })
    } else {
        eventLineNextFrame.push({ title: "LIL_RED_IDLE", data: { frames: data.frames, currentFrameIndex: data.currentFrameIndex } })
    }
    return;
}

const lilRedJump = (data) => {


    displayBg();

    displayLilRedSprite(data.currentFrame);

    console.log("Jumping")


    if (frameCount % 2 === 0) {
        if (data.currentFrame === data.endFrame) {
            lilRed.grounded = true;
            eventLineNextFrame.push({ title: "LIL_RED_IDLE", data: { frames: [50, 51], currentFrameIndex: 0 } })
            return;
        }
        eventLineNextFrame.push({ title: "LIL_RED_JUMP", data: { startFrame: 36, endFrame: 51, currentFrame: data.currentFrame + 1 } });
    } else {
        eventLineNextFrame.push({ title: "LIL_RED_JUMP", data: { startFrame: 36, endFrame: 51, currentFrame: data.currentFrame } });
    }

}

const lilRedRun = (data) => {
    if (data.direction === "right") {
        displayBg();

        displayLilRedSprite(data.currentFrame);

        console.log("Running")


        if (frameCount % 2 === 0) {
            if (data.currentFrame === data.endFrame) {
                lilRed.running = false;
                eventLineNextFrame.push({ title: "LIL_RED_IDLE", data: { frames: [50, 51], currentFrameIndex: 0 } })
                return;
            }
            eventLineNextFrame.push({
                title: "LIL_RED_RUN", data: {
                    currentFrame: data.currentFrame + 1, startFrame: 0, endFrame: 23, direction: "right"
                }
            });
        } else {
            eventLineNextFrame.push({
                title: "LIL_RED_RUN", data: {
                    currentFrame: data.currentFrame, startFrame: 0, endFrame: 23, direction: "right"
                }
            });
        }


    }
}

const lilRedMoveRight = () => {
    lilRed.accX = 20;

    if (lilRed.grounded && !lilRed.running) {

        lilRed.running = true;
        eventLineNextFrame.push({
            title: "LIL_RED_RUN", data: {
                currentFrame: 0, startFrame: 0, endFrame: 23, direction: "right"
            }
        });
        removeEventOfType("LIL_RED_IDLE")
        removeEventOfType("LIL_RED_JUMP")
    }
}
const lilRedMoveUp = () => {
    if (lilRed.grounded) {
        lilRed.accY = -1;

        lilRed.grounded = false;
        console.log("call event")
        eventLineNextFrame.push({ title: "LIL_RED_JUMP", data: { startFrame: 36, endFrame: 52, currentFrame: 36 } });
        removeEventOfType("LIL_RED_IDLE")
    }
}
const lilRedMoveLeft = () => {
    lilRed.accX = -10;
    // if (lilRed.grounded) {
    //     eventLineNextFrame.push({ title: "LIL_RED_RUN", data: { direction: "left", startFrame: 36, endFrame: 52, currentFrame: 36 } });
    // }
    // updateLilRedPos();
}

const lilRedMoveDown = () => {
    lilRed.accY = 2;
}



