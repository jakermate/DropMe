// options class with default options
export default class Options{
    constructor(element){  // take in element and check for data-drop attributes

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

        let resetDelay = element.dataset.dropResetDelay
        if(resetDelay != null || undefined){
            this.resetDelay = resetDelay
        }
        else{
            this.resetDelay = 1000 // default to 1 second
        }

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
                this.spin = 800
                break
            default:
                this.spin = 400 // default set to slow spin
        }

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

        let popUp = element.dataset.pop
        switch(popUp){ // popup is initial negative Y velocity 
            case `true`:
                this.popUp = 500
                break
            case `false`:
                this.popUp = 0
                break
            default:
                this.popUp = 500
        }

        let shadow = element.dataset.dropShadow
        switch(shadow){
            case `true`:
                this.shadow = true
                break
            default:
                this.shadow = false
        }
       
        this.timeToReset = 3000  // time in ms until object gets replaced from where it fell
       
        this.popSide = 30
    } 

    

}