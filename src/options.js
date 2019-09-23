// options class with default options
export default class Options{
    constructor(){
        this.reset = false // will the element be replaced
        this.spin = 0 // will there be spin to the falling element
        this.timeToReset = 3000  // time in ms until object gets replaced from where it fell
        this.speed = 30 // pixels per second of acceleration
        this.popUp = 500
        this.popSide = 300
    } 
}