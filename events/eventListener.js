let eventLine = ["START"];

var eventData;


const listenForEvents = () => {
    // console.log(eventSignal);

    while (eventLine.length > 0) {
        let currentEvent = eventLine.shift();

        if (currentEvent === "START") {
            displayMenuPage();
        }

        if (currentEvent === "WAIT_MENU") {
            waitForActionMenuPage();
        }

        if (currentEvent === "MOUSE_MOVED") {
        }
    }

}