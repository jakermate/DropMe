// options object instantiated for each element, contains any data attributes
// that change the default drop options
import Options from './options'
import DropBox from './container'
import Placeholders from './placeholders'
import Dimensioner from './dimensioner'


function __runscript__(optionObject){
    
    // conditionally set options id optionObject argument is not undefined
    if(optionObject){
//
    }
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
    

    // make sure BODY element is positioned so that dropContainer may be absolutely positioned inside it
    if(document.body.style.position !== 'relative' | 'absolute | fixed | sticky'){
        document.body.style.position = 'relative'
    }
    // create element to append dropped elements into
    const dropContainer = document.createElement('div')
    // set dropcontainer id
    dropContainer.id = 'drop-container'
    // set dropcontainer styles
    dropContainer.setAttribute('style', // position and size of container mimick the body element
    `position: absolute; height: 100vh; width: 100vw; top: 0; z-index: 9999; pointer-events: none`
)   // append the dropcontainer to end of body tag
    document.body.appendChild(dropContainer)
    // set drop container styles
  

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
    let dropContainer = document.getElementById('drop-container')
    console.log('dropping')
    // store target element in variable using event
    let target = event.target
    
    // crates new placeholder div with data-drop-id set as main ID and styled dimensions
    // based on target elements offset dimensions
    let placeholderEl = returnPlaceholder(event.target.getAttribute('data-drop-id'), dimensioner.returnDimensionObject(target))
    //apply computed styles as dictated styles for element being moved
    target = restyleElement(target)
    PLACEHOLDERS.createPlaceholder(target) // pass in dropped element to clone for placeholder
    // place target element in CONTAINER object
    DROPBOX.addNewElement(target)
    // place target in container element
    DROPBOX.placeInContainerElement(target, dropContainer)
    console.log(`moving ${target.getAttribute('data-drop-id')}`)
}



// setup contstants
const DROPBOX = new DropBox() // container for currently falling objects
const PLACEHOLDERS = new Placeholders() // container for placeholder elements inserted into dropped elements positiones
const dimensioner = new Dimensioner()

// RUN SCRIPT
__runscript__()
console.log(dimensioner)