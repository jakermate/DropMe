import Element from './Element'

export default class Container{
    constructor(){
        this.elements = []
    }
    // adds new element to array and returns index
    addNewElement(element){
        let newEl = new Element(element) // pass in dom element and options to new Element object
        this.elements.push(newEl)
        return this.elements.indexOf(newEl)
    }
    

    removeElement(index){
        this.elements.splice(index,1)
    }
    
    getIndex(dataDropId){
        return this.elements.indexOf(dataDropId)
    }
}