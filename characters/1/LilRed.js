const lilRed = {
    animFile1: {
        animationFileName: "characters/1/sprites/lilRed1.png",
        imgW: 1344,
        imgH: 1463,
        walkFrames: [],
        spriteSheet: null
    },


}

const populateLilRed = () => {
    lilRed.x = -50;
    lilRed.y = height - 100;
    loadImage(lilRed.animFile1.animationFileName, (spriteSheet) => {
        lilRed.animFile1.spriteSheet = spriteSheet;
        eventLineNextFrame.push({
            title: "LIL_RED_WALK_IN", data: {
                currentFrame: 0, startFrame: 0, endFrame: 23
            }
        })
    })

}



const displayLilRedSprite = (img, x, y) => {
    push();
    imageMode(CENTER);
    image(img, x, y)
    pop();
}

const lilRedWalkIn = (data) => {



    let widthInc = lilRed.animFile1.imgW / 12;
    let heightInc = lilRed.animFile1.imgH / 11;

    let sw = widthInc;
    let sh = heightInc;
    let dx = 0;
    let dy = 0;
    let dw = widthInc;
    let dh = heightInc;

    let sx = (data.currentFrame % 12) * widthInc;
    let sy = floor(data.currentFrame / 12) * heightInc;

    displayBg();
    push();
    scale(-1, 1);
    translate(-lilRed.x * 2, 0);
    copy(lilRed.animFile1.spriteSheet, sx, sy, sw, sh, lilRed.x, lilRed.y, -dw, dh);
    pop();
    if (data.currentFrame === data.endFrame) {
        data.currentFrame = data.startFrame;
    }
    eventLineNextFrame.push({
        title: "LIL_RED_WALK_IN", data: {
            currentFrame: data.currentFrame + 1, startFrame: 0, endFrame: 23
        }
    })
    lilRed.x = lilRed.x + 1;
    console.log(lilRed.x)
}
