/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/PasswordGenerator.js":
/*!******************************************!*\
  !*** ./src/modules/PasswordGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordGenerator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PasswordGenerator = /*#__PURE__*/function () {
  function PasswordGenerator() {
    _classCallCheck(this, PasswordGenerator);
  }
  _createClass(PasswordGenerator, [{
    key: "number",
    value: function number() {
      var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var random = Math.round(Math.random() * (number.length - 1));
      return number[random];
    }
  }, {
    key: "upper",
    value: function upper() {
      var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var random = Math.round(Math.random() * (upper.length - 1));
      return upper[random];
    }
  }, {
    key: "lower",
    value: function lower() {
      var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var random = Math.round(Math.random() * (lower.length - 1));
      return lower[random];
    }
  }, {
    key: "symbol",
    value: function symbol() {
      var symbol = ['!', '@', '#', '$', '%', '&', '*', '^'];
      var random = Math.round(Math.random() * (symbol.length - 1));
      return symbol[random];
    }
  }, {
    key: "generator",
    value: function generator(numUser, array) {
      var arrayPass = [];
      var _final = '';
      var arrayNumbers = array;
      for (var i = 0; i < numUser; i++) {
        var random = Math.round(Math.random() * (arrayNumbers.length - 1));
        arrayPass.push(arrayNumbers[random]);
      }
      for (var _i = 0; _i < numUser; _i++) {
        if (arrayPass[_i] === 1) _final += this.number();else if (arrayPass[_i] === 2) _final += this.upper();else if (arrayPass[_i] === 3) _final += this.lower();else _final += this.symbol();
      }
      return _final;
    }
  }]);
  return PasswordGenerator;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PasswordGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/PasswordGenerator */ "./src/modules/PasswordGenerator.js");

var arrayNum = [1, 2, 3, 4];
var numUser2 = document.querySelector('.char').value = 11;
var numUser = Number(document.querySelector('.char').value);
var copiedPass = '';
var img = document.getElementById('copy');
var power = document.getElementById('levelPower');
var slider = document.getElementById('myRange');
runPasswordGenerator(arrayNum, numUser2);
slider.oninput = function () {
  document.querySelector('.char').value = this.value;
  numUser2 = document.querySelector('.char').value;
  runPasswordGenerator(arrayNum, numUser2);
  levelPower();
};
document.addEventListener('click', function (e) {
  var el = e.target;
  numUser2 = document.querySelector('.char').value;
  if (Number(numUser2) > 25) {
    numUser2 = document.querySelector('.char').value = '25';
  } else if (Number(numUser2) < 1) {
    numUser2 = document.querySelector('.char').value = '1';
  }
  slider.value = numUser2;
  if (el.classList.contains('slider')) {
    document.querySelector('.char').value = slider.value;
  }
  numUser2 = Math.round(document.querySelector('.char').value);
  document.querySelector('.char').value = numUser2;
  if (el.classList.contains('num')) {
    classContains(1, '.num');
  } else if (el.classList.contains('upper')) {
    classContains(2, '.upper');
  } else if (el.classList.contains('lower')) {
    classContains(3, '.lower');
  } else if (el.classList.contains('symbol')) {
    classContains(4, '.symbol');
  } else if (el.classList.contains('submit')) {
    e.preventDefault();
    runPasswordGenerator(arrayNum, numUser2);
    numUser = numUser2;
  } else if (numUser !== numUser2) {
    runPasswordGenerator(arrayNum, numUser2);
    numUser = numUser2;
  }
  levelPower();
  if (el.classList.contains('copy')) {
    navigator.clipboard.writeText(copiedPass);
    img.src = './static/images/copyGif.gif';
    img.disabled = true;
    setTimeout(function () {
      img.disabled = false;
      img.src = './static/images/copyImg.png';
    }, 1200);
  }
  if (el.classList.contains('reload')) {
    var element = document.getElementById('reload');
    element.classList.add('generate');
    element.disabled = true;
    setTimeout(function () {
      element.disabled = false;
      element.classList.remove('generate');
    }, 600);
    runPasswordGenerator(arrayNum, numUser2);
  }
});
function levelPower() {
  if (Number(numUser2) > 10) {
    power.classList.add('power4');
  } else if (Number(numUser2) > 8) {
    power.classList.remove('power4');
    power.classList.add('power3');
  } else if (Number(numUser2) > 6) {
    power.classList.remove('power3', 'power4');
    power.classList.add('power2');
  } else if (Number(numUser2) > 3) {
    power.classList.remove('power2', 'power3', 'power4');
    power.classList.add('power1');
  } else {
    power.classList.remove('power1', 'power2', 'power3', 'power4');
    power.classList.add('power0');
  }
}
function classContains(removeNum, checkmarkClass) {
  removeCharacter(removeNum, checkmarkClass);
  runPasswordGenerator(arrayNum, numUser2);
  numUser = numUser2;
  return;
}
function removeCharacter(num, checkmarkClass) {
  if (arrayNum.includes(num)) {
    if (arrayNum.length !== 1) {
      var index = arrayNum.indexOf(num);
      arrayNum.splice(index, 1);
    } else {
      document.querySelector(checkmarkClass).checked = true;
    }
  } else {
    arrayNum.push(num);
  }
  return;
}
function runPasswordGenerator(array, numUser2) {
  var runPass = new _modules_PasswordGenerator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var result = document.querySelector('.result');
  copiedPass = runPass.generator(numUser2, array);
  result.textContent = copiedPass;
  return;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map