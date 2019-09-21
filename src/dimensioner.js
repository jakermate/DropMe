export default function Dimensioner(){
    this.returnWidth = function(element){
        return element.offsetWidth
    }
    this.returnHeight = function(element){
        return element.offsetHeight
    }
    this.returnDisplayType = function(element){
        let displayType = element.style.display
        return displayType || 'block'
    }
    this.returnDimensionObject = function(element){
        let dimensionObject = {
            width: this.returnWidth(element),
            height: this.returnHeight(element),
            displayType: this.returnDisplayType(element)
        }
        return dimensionObject
    }
}