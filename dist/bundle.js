/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Element; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/options.js");

class Element {
  constructor(element) {
    // load options
    let optionsObj = this.buildOptionsObject(element); // build and return an object

    this.spin = optionsObj.spin;
    this.speed = optionsObj.speed;
    this.popUp = optionsObj.popUp;
    this.popSide = optionsObj.popSide;
    this.reset = optionsObj.reset;
    this.resetDelay = optionsObj.resetDelay;
    this.shadow = optionsObj.shadow;
    this.ELEMENT = element;
    this.CLONE = this.cloneElement(this.ELEMENT);
    this.TICKRATE = 60; // animation update interval

    this.running = false; // initial running state

    this.elementID = element.getAttribute('data-drop-id'); // element ID
    // this.CLONE.style.boxShadow = `5px 5px 40px rgba(0,0,0,.3)`

    this.x = 0;
    this.y = 0;
    this.orientation = 0;
    this.velX = this.popSide;
    this.velY = -this.popUp;

    this.__starttimer__(); // start time upon initialization

  } // build options object from data-drop attributes


  buildOptionsObject(element) {
    let optionsObj = new _options__WEBPACK_IMPORTED_MODULE_0__["default"](element);
    return optionsObj;
  }

  clockTick() {
    // translate and rotation occurs here, called repeatedly by __starttime__
    if (this.running === false) {
      // stop simulation 
      clearInterval(this.sim);
    } // perform velocity adjustments


    this.velY += this.speed; // perform translations

    this.x += this.velX / this.TICKRATE;
    this.y += this.velY / this.TICKRATE;
    this.orientation += this.spin / this.TICKRATE; // add spin speed to orientation
    // apply styles
    // apply styles by requesting new frame

    requestAnimationFrame(() => {
      this.CLONE.style.transform = `translateY(${this.y}px) translateX(${this.x}px) rotate(${this.orientation}deg)`;
    }); // if element has fallen length greater than height of page, stop timer

    if (this.y > window.innerHeight) {
      this.__stopTimer__();
    }
  } // run simulation


  __starttimer__() {
    this.running = true;
    this.addClone();
    this.sim = setInterval(this.clockTick.bind(this), 1000 / this.TICKRATE);
  }

  __stopTimer__() {
    // stop tickrate
    this.running = false;
    this.removeClone();
    return true; // true returned for element being killed
  } // events


  click() {
    console.log('new click handler');
  }

  placeInContainerElement(target, dropContainer) {
    dropContainer.append(target);
  }

  cloneElement(element) {
    let clone = element.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.width = this.ELEMENT.offsetWidth + 'px';
    clone.style.height = this.ELEMENT.offsetHeight + 'px';
    clone.style.top = this.ELEMENT.getBoundingClientRect().top;
    +'px';
    clone.style.left = this.ELEMENT.getBoundingClientRect().left + 'px';
    return clone;
  }

  addClone() {
    this.ELEMENT.style.visibility = 'hidden'; // set original to hidden, but still occupying space

    this.ELEMENT.parentNode.insertBefore(this.CLONE, this.ELEMENT);
  }

  removeClone() {
    this.CLONE.parentNode.removeChild(this.CLONE);

    if (this.reset === true) {
      this.ELEMENT.style.visibility = 'visible';
    }
  }

  resetDelay() {
    setTimeout(() => {}, this.resetDelay);
  }

}

/***/ }),

/***/ "./src/ElementContainer.js":
/*!*********************************!*\
  !*** ./src/ElementContainer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/Element.js");

class Container {
  constructor() {
    this.elements = [];
  } // adds new element to array and returns index


  addNewElement(element) {
    let newEl = new _Element__WEBPACK_IMPORTED_MODULE_0__["default"](element); // pass in dom element and options to new Element object

    this.elements.push(newEl);
    return this.elements.indexOf(newEl);
  }

  addAllElements(nodeList) {}

  removeElement(index) {
    this.elements.splice(index, 1);
  }

  getIndex(dataDropId) {
    return this.elements.indexOf(dataDropId);
  }

  addClickHandlers() {
    this.elements.forEach(element => {
      element.addEventListener('click');
    });
  }

}

/***/ }),

/***/ "./src/dimensioner.js":
/*!****************************!*\
  !*** ./src/dimensioner.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimensioner; });
function Dimensioner() {
  this.returnWidth = function (element) {
    return element.offsetWidth;
  };

  this.returnHeight = function (element) {
    return element.offsetHeight;
  };

  this.returnDisplayType = function (element) {
    let displayType = element.style.display;
    return displayType || 'block';
  };

  this.returnDimensionObject = function (element) {
    let dimensionObject = {
      width: this.returnWidth(element),
      height: this.returnHeight(element),
      displayType: this.returnDisplayType(element)
    };
    return dimensionObject;
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _ElementContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementContainer */ "./src/ElementContainer.js");
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholders */ "./src/placeholders.js");
/* harmony import */ var _dimensioner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensioner */ "./src/dimensioner.js");
// options object instantiated for each element, contains any data attributes
// that change the default drop options





function __runscript__(optionObject) {
  // find all elements with a drop-me class and create nodelist
  const dropNodes = document.getElementsByClassName('drop-me'); // create drop object containing all elements to be dropped

  const dropElements = {}; // loop through array of indexed elements with drop properties and insert into object dropElements
  // using data-drop-id value as its key

  for (let i = 0; i < dropNodes.length; i++) {
    console.log(dropNodes); //give each dropNode element a data-drop-id name

    let element = dropNodes[i];
    element.setAttribute(`data-drop-id`, `drop-me-${i}`); // append each element into the dropElements object with data-drop-id as it's key

    dropElements[dropNodes[i].getAttribute('data-drop-id')] = dropNodes[i];
    addClickListener(element);
  } // log the dropElements object


  console.log(dropElements);
} // function to create new element for contaiing drop objects (append to end of body element)


function createDropContainer() {}

function addClickListener(element) {
  element.addEventListener("click", dropMe);
  console.log('event listener added to: ' + element);
  console.log(`${element} can be dropped`);
} // create a placeholder div


function returnPlaceholder(id, dimensionObject) {
  let newEl = document.createElement('div');
  newEl.id = `drop-placeholder-${id}`;
  newEl.style.width = dimensionObject.width;
  newEl.style.height = dimensionObject.height;
  return newEl;
} // to apply computed styles into actual styles for element


function restyleElement(element) {
  let dimensionObject = dimensioner.returnDimensionObject(element);
  element.style.height = dimensionObject.height + 'px';
  element.style.width = dimensionObject.width + 'px';
  element.style.display = 'block'; // display as block to prevent flexing or stretching

  element.style.position = 'absolute';
  return element;
} // FUNCTION TO INITIATE DROP 


function dropMe(event) {
  console.log('dropping'); // store target element in variable using event

  let target = event.target; // crates new placeholder div with data-drop-id set as main ID and styled dimensions
  // based on target elements offset dimensions

  let placeholderEl = returnPlaceholder(event.target.getAttribute('data-drop-id'), dimensioner.returnDimensionObject(target));
  PLACEHOLDERS.createPlaceholder(target); // pass in dropped element to clone for placeholder
  // place target element in CONTAINER object

  DROPBOX.addNewElement(target); // place target in container element

  console.log(`moving ${target.getAttribute('data-drop-id')}`);
}

const DROPBOX = new _ElementContainer__WEBPACK_IMPORTED_MODULE_1__["default"](); // container for currently falling objects

const PLACEHOLDERS = new _placeholders__WEBPACK_IMPORTED_MODULE_2__["default"](); // container for placeholder elements inserted into dropped elements positiones

const dimensioner = new _dimensioner__WEBPACK_IMPORTED_MODULE_3__["default"](); // RUN SCRIPT

__runscript__();

console.log(dimensioner);

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Options; });
// options class with default options
class Options {
  constructor(element) {
    // take in element and check for data-drop attributes
    let reset = element.dataset.dropReset;

    switch (reset) {
      case `true`:
        this.reset = true;
        break;

      case `false`:
        this.reset = false;
        break;

      default:
        this.reset = true;
    }

    let resetDelay = element.dataset.dropResetDelay;

    if (resetDelay != null || undefined) {
      this.resetDelay = resetDelay;
    } else {
      this.resetDelay = 1000; // default to 1 second
    }

    let spin = element.dataset.dropSpin;

    switch (spin) {
      case `none`:
        this.spin = 0;
        break;

      case `slow`:
        this.spin = 100;
        break;

      case `medium`:
        this.spin = 400;
        break;

      case `fast`:
        this.spin = 800;
        break;

      default:
        this.spin = 400;
      // default set to slow spin
    }

    let speed = element.dataset.dropSpeed;

    switch (speed) {
      case `slow`:
        this.speed = 10;
        break;

      case `medium`:
        this.speed = 30;
        break;

      case `fast`:
        this.speed = 50;
        break;

      default:
        this.speed = 30;
      // default medium
    }

    let popUp = element.dataset.pop;

    switch (popUp) {
      // popup is initial negative Y velocity 
      case `true`:
        this.popUp = 500;
        break;

      case `false`:
        this.popUp = 0;
        break;

      default:
        this.popUp = 500;
    }

    let shadow = element.dataset.dropShadow;

    switch (shadow) {
      case `true`:
        this.shadow = true;
        break;

      default:
        this.shadow = false;
    }

    this.timeToReset = 3000; // time in ms until object gets replaced from where it fell

    this.popSide = 30;
  }

}

/***/ }),

/***/ "./src/placeholders.js":
/*!*****************************!*\
  !*** ./src/placeholders.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Placeholders; });
class Placeholders {
  // leaving in case of use-cases where a blank placeholder might be necessary
  constructor() {
    this.placeholders = [];
    this.indexes = {};
  } // create a clone of the object without any color or content styling


  createPlaceholder(element) {
    // clone the node
    let newEl = element.cloneNode(false); // remove infractive styling

    newEl.innerHtml = ''; // no content

    newEl.style.backgroundColor = 'rgba(0,0,0,0)'; // no background color

    let dropId = newEl.getAttribute('data-drop-id');
    dropId += '-clone';
    return newEl;
  }

  addToPlaceholders(placeholder) {
    let index = this.placeholders.push(placeholder);
    this.indexes[placeholder.getAttribute('data-drop-id').toString] = index;
  }

  placeInDom(target, placeholder) {
    target.parentNode.insertBefore(placeholder, target);
  }

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map