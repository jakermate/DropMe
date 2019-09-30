// options class with default options
export default class Options{
    constructor(element){  // take in element and check for data-drop attributes

        // DOES ELEMENT RETURN HOME
        let reset = element.dataset.dropReset
        switch(reset){
            case `true`:
                this.reset = true
                break
            case `false`:
                this.reset = false
                break
            default:
                this.reset = true
        }

        // DELAY PRIOR TO ELEMENT RESET
        let resetDelay = element.dataset.dropResetDelay
        if(!isNaN(resetDelay)){
            this.resetDelay = resetDelay
        }
        else{
            this.resetDelay = 1000 // default to 1 second
        }

        // SPINRATE
        let spin = element.dataset.dropSpin
        switch(spin){
            case `none`:
                this.spin = 0
                break
            case `slow`:
                this.spin = 100
                break
            case `medium`:
                this.spin = 400
                break
            case `fast`:
                this.spin = 1000
                break
            default:
                this.spin = 400 // default set to slow spin
        }

        // DROP SPEED
        let speed = element.dataset.dropSpeed
        switch(speed){
            case `slow`:
                this.speed = 10
                break
            case `medium`:
                this.speed = 30
                break
            case `fast`:
                this.speed = 50
                break
            default:
                this.speed = 30 // default medium
        }

        // DROP OR POP
        let style = element.dataset.dropStyle
        switch(style){ // popup is initial negative Y velocity 
            case `pop`:
                this.style = 500
                break
            case `drop`:
                this.style = 0
                break
            default:
                this.style = 500
        }

        // ADD A DROP SHADOW
        let shadow = element.dataset.dropShadow
        switch(shadow){
            case `true`:
                this.shadow = true
                break
            case 'false':
                this.shadow = false
                break
            default:
                this.shadow = false
        }

        // 3D
        let threeD = element.dataset.dropThreeD
        switch(threeD){
            case 'true':
                this.threeD = true
                break
            case 'false':
                this.threeD = false
                break
            default:
                this.threeD = true
        }
       
        // RESET TIME
        this.timeToReset = 3000  // time in ms until object gets replaced from where it fell
       
        // initial x velocity
        // set x velocity to 0 if the element is not being popped
        if(this.style === 0){
            this.popSide = 0
        }
        else{
            // find a random number for the initial x velocity
            let random = Math.floor((Math.random() * 200 + 1))
            // determine which direction to send velocity
            if(random % 2 == 0){
                this.popSide = random
            }
            else{
                this.popSide = -random
            }
        }
    } 

    

}