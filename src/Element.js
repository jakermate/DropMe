export default class Element{
    constructor(element, options){
        // load options
        this.spin = options.spin
        this.speed = options.speed
        this.popUp = options.popUp
        this.popSide = options.popSide
        this.reset = options.reset
        this.timeToRESET = options.timeToReset


        this.ELEMENT = element
        this.CLONE = this.cloneElement(this.ELEMENT)

        this.TICKRATE = 60 // animation update interval

        this.running = false // initial running state

        this.elementID = element.getAttribute('data-drop-id') // element ID


        this.x = 0
        this.y = 0


        this.velX = this.popSide
        this.velY = -this.popUp
        this.rotation = 0


        this.__starttimer__() // start time upon initialization
    }
    clockTick(){ // translate and rotation occurs here, called repeatedly by __starttime__
        if(this.running === false){ // stop simulation 
            clearInterval(this.sim)
        }
        // perform velocity adjustments
        this.velY += this.speed

        // perform translations
        this.y += this.velY/this.TICKRATE
        this.rotation += this.rotation
        // apply styles
        this.CLONE.style.transform = `translateY(${this.y}px)`
        // if element has fallen length greater than height of page, stop timer
        if(this.y > window.innerHeight){ 
            this.__stopTimer__()
        }
    }

    __starttimer__(){
        this.running = true
        this.addClone()
        this.sim = setInterval(this.clockTick.bind(this), 1000/this.TICKRATE)
    }
    __stopTimer__(){ // stop tickrate
        this.running = false
        this.removeClone()
        return true // true returned for element being killed
    }
    placeInContainerElement(target, dropContainer){
        dropContainer.append(target)
    }
    cloneElement(element){
        let clone = element.cloneNode()
        clone.style.position = 'absolute'
        clone.style.width = this.ELEMENT.offsetWidth+'px'
        clone.style.height = this.ELEMENT.offsetHeight+'px'
        clone.style.top = this.ELEMENT.getBoundingClientRect().top;+'px'
        clone.style.left = this.ELEMENT.getBoundingClientRect().left+'px'
        return clone
    }
    addClone(){
        this.ELEMENT.style.visibility = 'hidden' // set original to hidden, but still occupying space
        this.ELEMENT.parentNode.insertBefore(this.CLONE,this.ELEMENT)
    }
    removeClone(){
        this.CLONE.parentNode.removeChild(this.CLONE)
        this.ELEMENT.style.visibility = 'visible'
    }

}