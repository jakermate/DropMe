// options object instantiated for each element, contains any data attributes
// that change the default drop options
import Options from './options'
import DropBox from './ElementContainer'
import Placeholders from './placeholders'
import Dimensioner from './dimensioner'


function __runscript__(optionObject){
    
    // find all elements with a drop-me class and create nodelist
    const dropNodes = document.getElementsByClassName('drop-me')
    
    // create drop object containing all elements to be dropped
    const dropElements = {
    }
    // loop through array of indexed elements with drop properties and insert into object dropElements
    // using data-drop-id value as its key
    for(let i = 0; i < dropNodes.length; i++){
            console.log(dropNodes)
            //give each dropNode element a data-drop-id name
            let element = dropNodes[i]
            element.setAttribute(`data-drop-id`, `drop-me-${i}`)
            // append each element into the dropElements object with data-drop-id as it's key
            dropElements[dropNodes[i].getAttribute('data-drop-id')] = dropNodes[i]
           
            addClickListener(element)
    }
    // log the dropElements object
    console.log(dropElements)    
    

    
  

}

// function to create new element for contaiing drop objects (append to end of body element)
function createDropContainer(){
}


function addClickListener(element){
    element.addEventListener("click", dropMe)
    console.log('event listener added to: '+ element)
    console.log(`${element} can be dropped`)
}

// create a placeholder div
function returnPlaceholder(id, dimensionObject){
    let newEl = document.createElement('div')
    newEl.id = `drop-placeholder-${id}`
    newEl.style.width = dimensionObject.width
    newEl.style.height = dimensionObject.height
    return newEl
}



// to apply computed styles into actual styles for element
function restyleElement(element){
    let dimensionObject = dimensioner.returnDimensionObject(element)
    element.style.height = dimensionObject.height+'px'
    element.style.width = dimensionObject.width+'px'
    element.style.display = 'block' // display as block to prevent flexing or stretching
    element.style.position = 'absolute'
    return element

}
    
// FUNCTION TO INITIATE DROP 
function dropMe(event){
    
    console.log('dropping')
    // store target element in variable using event
    let target = event.target
    
    PLACEHOLDERS.createPlaceholder(target) // pass in dropped element to clone for placeholder
    // place target element in CONTAINER object
    DROPBOX.addNewElement(target)
    // place target in container element
    console.log(`moving ${target.getAttribute('data-drop-id')}`)
}



const DROPBOX = new DropBox() // container for currently falling objects
const PLACEHOLDERS = new Placeholders() // container for placeholder elements inserted into dropped elements positiones
const dimensioner = new Dimensioner()

// RUN SCRIPT
__runscript__()
console.log(dimensioner)