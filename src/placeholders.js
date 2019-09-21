export default class Placeholders{
    constructor(){
        this.placeholders = []
        this.indexes = {

        }
    }
    // create a clone of the object without any color or content styling
    createPlaceholder(element){
        // clone the node
        let newEl = element.cloneNode(false)
        // remove infractive styling
        newEl.innerHtml = '' // no content
        newEl.style.backgroundColor = 'rgba(0,0,0,0)' // no background color
        let dropId = newEl.getAttribute('data-drop-id')
        dropId += '-clone'
        return newEl
    }
    addToPlaceholders(placeholder){
        let index = this.placeholders.push(placeholder)
        this.indexes[placeholder.getAttribute('data-drop-id').toString] = index
    }
    placeInDom(target, placeholder){
        target.parentNode.insertBefore(placeholder, target)
    }
}