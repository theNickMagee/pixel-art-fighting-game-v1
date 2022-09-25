var mainMenuPage = {
    backgroundImageRoute: 'pages/1/staircase.jpeg',
    titleRoute: 'pages/1/title.png',
    playButton: 'pages/1/playButton.png',
    playButtonHover: 'pages/1/playButtonHover.png',
}

const displayMenuPage = () => {

    let pbImg;
    let bgImg;
    let titleImg;

    let backgroundImageLoaded = false;
    let playImageLoaded = false;
    let titleImageLoaded = false;

    loadImage(mainMenuPage.backgroundImageRoute, img => {
        backgroundImageLoaded = true;
        imageMode(CORNER);
        mainMenuPage.bgImg = img;
        checkIfFinished();
    });

    push();

    loadImage(mainMenuPage.titleRoute, titleImg => {
        titleImageLoaded = true;
        imageMode(CENTER);

        mainMenuPage.titleImg = titleImg;

        mainMenuPage.titleImgX = width / 2;
        mainMenuPage.titleImgY = height / 3;
        mainMenuPage.titleImgW = titleImg.width;
        mainMenuPage.titleImgH = titleImg.height;

        checkIfFinished();
    });

    loadImage(mainMenuPage.playButton, bgImg => {
        playImageLoaded = true;
        // rect(0, 0, img.width, img.height)
        imageMode(CENTER);

        mainMenuPage.playButtonX = width / 2;
        mainMenuPage.playButtonY = 2 * height / 3;
        mainMenuPage.playButtonW = bgImg.width;
        mainMenuPage.playButtonH = bgImg.height;

        mainMenuPage.playButton = bgImg;
        checkIfFinished();
    });

    loadImage(mainMenuPage.playButtonHover, hoverImg => {
        mainMenuPage.hoverPlayButton = hoverImg;
    });

    const checkIfFinished = () => {
        if (backgroundImageLoaded && titleImageLoaded && playImageLoaded) {
            displayBg();
            displayTitle();
            displayBtn();


            // eventLine.push("WAIT_MENU");
            // listenForEvents();
        }
    }

    pop();

}
const displayBtn = () => {
    image(mainMenuPage.playButton, mainMenuPage.playButtonX, mainMenuPage.playButtonY);
}

const displayBg = () => {
    push();
    imageMode(CORNER);
    background(mainMenuPage.bgImg);
    pop();
}

const displayTitle = () => {
    push();
    imageMode(CENTER);
    image(mainMenuPage.titleImg, mainMenuPage.titleImgX, mainMenuPage.titleImgY);
    pop();
}

const waitForActionMenuPage = (mx, my) => {
    fill(200, 200, 40);
    rectMode(CENTER)
    // rect(mainMenuPage.playButtonX, mainMenuPage.playButtonY, mainMenuPage.playButtonW, mainMenuPage.playButtonH);
    displayBg();

    displayTitle();

    if (mouseInCenterMode(mx, my,
        mainMenuPage.playButtonX,
        mainMenuPage.playButtonY,
        mainMenuPage.playButtonW,
        mainMenuPage.playButtonH)) {
        // console.log("in")
        image(mainMenuPage.hoverPlayButton, mainMenuPage.playButtonX, mainMenuPage.playButtonY);

    } else {
        image(mainMenuPage.playButton, mainMenuPage.playButtonX, mainMenuPage.playButtonY);
    }

}


const checkIfEnterGamePressed = (mx, my) => {
    // console.log("check if enter");
    if (mouseInCenterMode(mx, my,
        mainMenuPage.playButtonX,
        mainMenuPage.playButtonY,
        mainMenuPage.playButtonW,
        mainMenuPage.playButtonH)) {
        // console.log("in")
        if (state.in === "wait") {
            state.in = "loading";

        }

        // while (mainMenuPage.playButtonY < windowHeight) {
        //     console.log("moving y")
        //     push();
        //     imageMode(CORNER);
        //     background(mainMenuPage.bgImg);
        //     pop();

        push();
        imageMode(CORNER);
        background(mainMenuPage.bgImg);
        pop();

        mainMenuPage.titleImgY += 10;
        image(mainMenuPage.titleImg, mainMenuPage.titleImgX, mainMenuPage.titleImgY);

        mainMenuPage.playButtonY += 10;
        image(mainMenuPage.playButton, mainMenuPage.playButtonX, mainMenuPage.playButtonY);

        if (mainMenuPage.titleImgY - 40 < windowHeight) {
            eventLineNextFrame.push({ title: "MOUSE_RELEASED", x: mx, y: mainMenuPage.playButtonY });
        } else {
            if (state.in === "loading") {
                eventLineNextFrame.push({ title: "DROP_CHARACTER" })
            }
        }
    }

}
