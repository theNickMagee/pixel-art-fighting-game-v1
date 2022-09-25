let eventLine = [];
let eventLineNextFrame = [];
var eventData;

var state = { page: "home", in: "wait" };

const listenForEvents = () => {



    while (eventLine.length > 0) {



        let currentEvent = eventLine.shift();
        // console.log(currentEvent);

        if (currentEvent.title === "MOUSE_MOVED") {
            //mouse move logic here for now
            // this should probably be routing of some kind
            if (state.page === "home" && state.in === "wait") {
                waitForActionMenuPage(currentEvent.x, currentEvent.y);
            }
        }

        if (currentEvent.title === "MOUSE_RELEASED") {
            if (state.page === "home" && (state.in === "wait" || state.in === "loading")) {
                checkIfEnterGamePressed(currentEvent.x, currentEvent.y);
            }
        }

        if (currentEvent.title === "DROP_CHARACTER") {
            //could check oage and state here
            state.in = "game";
            populateLilRed();
        }

        if (currentEvent.title === "LIL_RED_WALK_IN") {
            lilRedWalkIn(currentEvent.data);
        }
    }

}