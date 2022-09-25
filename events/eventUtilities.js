const mouseIn = (mx, my, bx, by, bw, bh) => {
    if (mx > bx && mx < bx + bw
        && my > by && my < by + bh) {
        return true
    }
    return false;
}

const mouseInCenterMode = (mx, my, bx, by, bw, bh) => {
    if (mx > bx - bw / 2 && mx < bx + bw / 2
        && my > by - bh / 2 && my < by + bh / 2) {
        return true
    }
    return false;
}


const removeEventOfType = (title) => {
    eventLine = eventLine.filter((e) => {
        if (e.title === title) {
            return false;
        } else {
            return true;
        }
    })
    eventLineNextFrame = eventLineNextFrame.filter((e) => {
        if (e.title === title) {
            return false;
        } else {
            return true;
        }
    })

    console.log("removing type from: ", eventLineNextFrame)
}