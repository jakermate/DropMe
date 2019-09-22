export default class Element{
    constructor(element, options){
        // load options
        this.spin = options.spin
        this.speed = options.speed
        this.pop = options.pop
        this.reset = options.reset
        this.timeToRESET = options.timeToReset

        this.TICKRATE = 60 // animation update interval

        this.running = false // initial running state

        this.elementID = element.getAttribute('data-drop-id') // element ID

        this.velX = 0
        this.velY = 0
        this.x = 0 // initial relative translation positions
        this.y = 0
        this.rotation = 0

        this.__starttimer__() // start time upon initialization
        this.sim = setInterval(this.clockTick, 1000/this.TICKRATE)
    }
    clockTick(){ // translate and rotation occurs here, called repeatedly by __starttime__
        if(this.running === true){ // stop simulation 
            clearInterval(this.sim)
        }
        // perform velocity adjustments
        this.velX += this.speed

        // perform translations
        this.x -= this.velX
        this.rotation += this.rotation

        // if element has fallen length greater than height of page, stop timer
        if(this.x > document.body.offsetHeight){ 
            this.__stopTimer__()
        }
    }
    __starttimer__(){
        this.running = true
        this.sim()
    }
    __stopTimer__(){ // stop tickrate
        this.running = false
        return true // true returned for element being killed
    }
}