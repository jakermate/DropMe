import Options from './options'

export default class Element{
    constructor(element){
        // load options
        let optionsObj = this.buildOptionsObject(element) // build and return an object

        this.spin = optionsObj.spin
        this.speed = optionsObj.speed
        this.initialVelY = optionsObj.style
        this.popSide = optionsObj.popSide 
        this.reset = optionsObj.reset
        this.resetDelay = optionsObj.resetDelay
        this.shadow = optionsObj.shadow
        this.threeD = optionsObj.threeD
        


        this.ELEMENT = element // original element to be hidden
        this.CLONE = this.cloneElement(this.ELEMENT) // copy element to be dropper
        this.CHILDREN = this.findChildren(this.ELEMENT)

        this.TICKRATE = 60 // animation update interval

        this.running = false // initial running state

        this.elementID = element.getAttribute('data-drop-id') // element ID
        // this.CLONE.style.boxShadow = `5px 5px 10px rgba(0,0,0,.3)`

        this.x = 0
        this.y = 0
        this.z = 0
        this.orientation = 0


        this.velX = this.popSide
        this.velY = -this.initialVelY


        this.__starttimer__() // start time upon initialization
    }

    // build options object from data-drop attributes
    buildOptionsObject(element){
        let optionsObj = new Options(element)
        return optionsObj
    }



    clockTick(){ // translate and rotation occurs here, called repeatedly by __starttime__
        if(this.running === false){ // stop simulation 
            clearInterval(this.sim)
        }
        // perform velocity adjustments
        this.velY += this.speed


        // perform translations
        this.x += this.velX/this.TICKRATE
        this.y += this.velY/this.TICKRATE
        this.orientation += this.spin/this.TICKRATE // add spin speed to orientation
        // apply styles

        // apply styles by requesting new frame
        requestAnimationFrame(()=>{
            this.CLONE.style.transform = `translate3d(${this.x}px, ${this.y}px, 0) rotate3d(1,1,1,${this.orientation}deg)`
        })
        
        // if element has fallen length greater than height of page, stop timer
        if(this.y > window.innerHeight){ 
            this.__stopTimer__()
        }
    }


    // run simulation
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

    // events
    click(){
        console.log('new click handler')
    }



    placeInContainerElement(target, dropContainer){
        dropContainer.append(target)
    }
    cloneElement(element){
        let clone = element.cloneNode(true)
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
        this.ELEMENT.style.visibility = ''
        
    }
    resetDelay(){
        setTimeout(()=>{

        }, this.resetDelay)
    }

    findChildren(element){
        let allChildren = [] // array to hold recursively found children
        let elementChildren = element.childNodes
        allChildren = [...elementChildren]



        return allChildren

    }

}