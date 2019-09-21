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

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
class Container {
  constructor() {
    this.elements = [];
  } // adds new element to array and returns index


  addNewElement(element) {
    this.elements.push(element);
    return this.elements.indexOf(element);
  }

  removeElement(index) {
    this.elements.splice(index, 1);
  }

  placeInContainerElement(target, dropContainer) {
    dropContainer.append(target);
  }

  getIndex(dataDropId) {
    return this.elements.indexOf(dataDropId);
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
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholders */ "./src/placeholders.js");
/* harmony import */ var _dimensioner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensioner */ "./src/dimensioner.js");
// options object instantiated for each element, contains any data attributes
// that change the default drop options





function __runscript__(optionObject) {
  // conditionally set options id optionObject argument is not undefined
  if (optionObject) {} //
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


  console.log(dropElements); // make sure BODY element is positioned so that dropContainer may be absolutely positioned inside it

  if (document.body.style.position !== 'relative' | 'absolute | fixed | sticky') {
    document.body.style.position = 'relative';
  } // create element to append dropped elements into


  const dropContainer = document.createElement('div'); // set dropcontainer id

  dropContainer.id = 'drop-container'; // set dropcontainer styles

  dropContainer.setAttribute('style', // position and size of container mimick the body element
  `position: absolute; height: 100vh; width: 100vw; top: 0; z-index: 9999; pointer-events: none`); // append the dropcontainer to end of body tag

  document.body.appendChild(dropContainer); // set drop container styles
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
  let dropContainer = document.getElementById('drop-container');
  console.log('dropping'); // store target element in variable using event

  let target = event.target; // crates new placeholder div with data-drop-id set as main ID and styled dimensions
  // based on target elements offset dimensions

  let placeholderEl = returnPlaceholder(event.target.getAttribute('data-drop-id'), dimensioner.returnDimensionObject(target)); //apply computed styles as dictated styles for element being moved

  target = restyleElement(target);
  PLACEHOLDERS.createPlaceholder(target); // pass in dropped element to clone for placeholder
  // place target element in CONTAINER object

  CONTAINER.addNewElement(target); // place target in container element

  CONTAINER.placeInContainerElement(target, dropContainer);
  console.log(`moving ${target.getAttribute('data-drop-id')}`);
} // setup contstants


const CONTAINER = new _container__WEBPACK_IMPORTED_MODULE_1__["default"](); // container for currently falling objects

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
  constructor() {
    this.reset = false; // will the element be replaced

    this.spin = false; // will there be spin to the falling element

    this.timeToReset = 3000; // time in ms until object gets replaced from where it fell

    this.speed = 20; // pixels per second of acceleration
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