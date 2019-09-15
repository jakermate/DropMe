class DropBoxProto{
    constructor(){
        this.width = this.findPageWidth
        this.height = this.findPageHeight
        this.zIndex = 9999
    }
    findPageHeight = () => {
        return window.innerHeight
    }
    findPageWidth = () => {
        return window.innerWidth
    }
}


// find all elements with a drop-me class and create nodelist
const dropNodes = document.getElementsByClassName('drop-me')
// create drop object containing all elements to be dropped
const dropElements = {
}
// create data-drop-id attributes to identify each node on it's own
const elementArray = []
for(i in dropNodes){
    elementArray[i] = dropNodes[i]
}
// loop through array of indexed elements with drop properties and insert into object dropElements
// using data-drop-id value as its key
elementArray.forEach(function(dropElement, index){
    //give each dropNode element a data-drop-id name
    dropElement.setAttribute(`data-drop-id`, `drop-me-${index}`)
    // append each element into the dropElements object with data-drop-id as it's key
    dropElements[dropElement.getAttribute('data-drop-id')] = dropElement
})
console.log(dropElements)
// set onclick listeners to every element in dropElements
for(i in dropElements){
    dropElements[i].addEventListener('click', dropMe)
    console.log(`${i} can be dropped`)
}


// create a placeholder div
function returnPlaceholder(id, dimensionObject){
    let newEl = document.createElement('div')
    newEl.id = `drop-placeholder-${id}`
    newEl.style.width = dimensionObject.width
    newEl.style.height = dimensionObject.height
    return newEl
}

// Function to get dimensions of element
function returnDimensions(element){
    // object to store triggered elements displayed dimensions
    let dimensionObject = {
        width: element.offsetWidth,
        height: element.offsetHeight
    }

    return dimensionObject
} 

// to apply computed styles into actual styles for element
function restyleElement(element){
    let dimensionObject = returnDimensions(element)
    element.style.height = dimensionObject.height+'px'
    element.style.width = dimensionObject.width+'px'
    return element
}
    
// FUNCTION TO INITIATE DROP 
function dropMe(event){
    console.log('dropping')
    // store target element in variable using event
    let target = event.target
    // crates new placeholder div with data-drop-id set as main ID and styled dimensions
    // based on target elements offset dimensions
    let placeholderEl = returnPlaceholder(event.target.getAttribute('data-drop-id'), returnDimensions(target))
    //apply computed styles as dictated styles for element being moved
    target = restyleElement(target)
    console.log(`moving ${target.getAttribute('data-drop-id')}`)
    dropContainer.appendChild(target)
}

// log the dropElements object
console.log(dropElements)



// make sure BODY element is positioned so that dropContainer may be absolutely positioned inside it
if(document.body.style.position !== 'relative' | 'absolute | fixed | sticky'){
    document.body.style.position = 'relative'
}
// create element to append dropped elements into
document.body.innerHTML += `<div id="drop-container"></div>`
let dropContainer = document.getElementById('drop-container')
// set drop container styles
dropContainer.setAttribute('style', // position and size of container mimick the body element
    `position: absolute; height: 100vh; width: 100vw; top: 0; z-index: 9999; pointer-events: none`
)