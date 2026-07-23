class UP_MODE {

    set(mode){
        return {
            name: mode,
            value: mode.length * 7
        };
    }
}

window.UP_MODE = new UP_MODE();
