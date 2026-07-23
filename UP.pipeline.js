class UP_PIPE {

    fuse(up){
        return {
            upward: up.upward,
            next: "IN",
            signature: up.scan.hash,
            mode: up.mode.name
        };
    }
}

window.UP_PIPE = new UP_PIPE();
