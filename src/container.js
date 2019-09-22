
export default class Container{
    constructor(){
        this.elements = []
    }
    // adds new element to array and returns index
    addNewElement(element){
        this.elements.push(element)
        return this.elements.indexOf(element)
    }
    removeElement(index){
        this.elements.splice(index,1)
    }
    placeInContainerElement(target, dropContainer){
        dropContainer.append(target)
    }
    getIndex(dataDropId){
        return this.elements.indexOf(dataDropId)
    }
}