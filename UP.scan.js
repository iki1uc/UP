class UP_SCAN {

    detect(value){
        return {
            type: typeof value,
            length: (""+value).length,
            hash: (value * 11) % 999999
        };
    }
}

window.UP_SCAN = new UP_SCAN();
