
const listenForKeys = () => {
    if (state.in === "game") {
        if (keyIsDown(LEFT_ARROW)) {
            eventLine.push({ title: "LEFT" });
        } else if (keyIsDown(RIGHT_ARROW)) {
            eventLine.push({ title: "RIGHT" });
        } else if (keyIsDown(UP_ARROW)) {
            eventLine.push({ title: "UP" });
        } else if (keyIsDown(DOWN_ARROW)) {
            eventLine.push({ title: "DOWN" });
        }
    }
}