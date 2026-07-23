class UP {

    constructor(){
        this.input = null;
        this.scan = null;
        this.mode = null;
        this.upward = 0;
    }

    enter(value){
        this.input = value;
    }

    compute(){
        this.upward = (this.scan.hash + this.mode.value) % 999999;
        return {
            input: this.input,
            scan: this.scan,
            mode: this.mode,
            upward: this.upward
        };
    }
}

window.UP = new UP();
