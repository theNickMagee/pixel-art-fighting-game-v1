

const displayMenuPage = () => {
    console.log("displaying menu page");

    var mainMenuPage = {
        backgroundImageRoute: 'pages/1/staircase.jpeg',
        titleRoute: 'pages/1/title.png',
        playButton: 'pages/1/playButton.png',
        playButtonHover: 'pages/1/playButtonHover.png'
    }

    let pbImg;
    let bgImg;
    let titleImg;

    let backgroundImageLoaded = false;
    let playImageLoaded = false;
    let titleImageLoaded = false;

    loadImage(mainMenuPage.backgroundImageRoute, img => {
        backgroundImageLoaded = true;
        imageMode(CORNER);
        background(img);
        checkIfFinished();
    });

    push();

    loadImage(mainMenuPage.titleRoute, titleImg => {
        titleImageLoaded = true;
        imageMode(CENTER);

        image(titleImg, width / 2, height / 3);
        checkIfFinished();
    });

    loadImage(mainMenuPage.playButton, bgImg => {
        playImageLoaded = true;
        // rect(0, 0, img.width, img.height)
        imageMode(CENTER);

        image(bgImg, width / 2, 2 * height / 3);
        checkIfFinished();
    });

    const checkIfFinished = () => {
        if (backgroundImageLoaded && titleImageLoaded && playImageLoaded) {
            eventLine.push("WAIT_MENU");
            listenForEvents();
        }
    }

    pop();

}

const waitForActionMenuPage = () => {
    console.log("waiting for action menu page")
}