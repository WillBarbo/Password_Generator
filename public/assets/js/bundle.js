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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #a5e3e7
}


* {
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0;
  padding: 0;
  background: var(--primary-color);
  font-family: 'Open sans', sans-serif;
  font-size: 1.5em;
  line-height: 1.5em;
}

.container {
  max-width: 840px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

form button {
  border: none;
  background: #e43434;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transition: 0.3s all;
}

form button:hover{
  background: rgb(177, 44, 44)
}

button:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
}

h1 {
  text-align: center;
}

label{
  display: inline-block;
  font-size: 23px;
}

form input {
  width: 20px;
  height: 20px;
}

.copy, .reload {
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.generate {
  animation: is-rotating 0.6s;
}

.char {
  width: 60px;
  height: 30px;
  font-size: 28px;
  margin-bottom: 30px;
}

.result {
  font-size: 1.55em;
  text-align: center;
  color: blue;
  display: inline-block;
}

.join, .img, .lineChar {
  display: flex;
  justify-content: space-between;
}

.num, .upper, .lower, .symbol {
  cursor: pointer;
}

.lineChar {
  width: 350px;
}

.slidecontainer {
  width: 100%; 
}


.slider {
  -webkit-appearance: none;  
  appearance: none;
  width: 100%; 
  height: 9px; 
  background: #d3d3d3; 
  outline: none; 
  opacity: 0.7; 
  -webkit-transition: .2s; 
  transition: opacity .2s;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #e51a1a;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #e43434;
  cursor: pointer;
}

.power {
  background-color: rgb(245, 245, 245);
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  height: 11px;
  margin-bottom: 30px;
}
.power0 {
  background-color: rgb(245, 245, 245);
  width: 0%;
}
.power1 {
  background-color: rgb(223, 102, 97);
  width: 25%;
}
.power2 {
  background-color: rgb(239, 194, 15);
  width: 50%;
}
.power3 {
  background-color: rgb(0, 168, 120);
  width: 75%;
}
.power4 {
  background-color: rgb(0, 107, 77);
  width: 100%;
}

.power0, .power1, .power2, .power3, .power4 {
  height: 10px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  transition: 0.6s;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAEA;EACE;AACF;;;AAGA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,gDAAgD;EAChD,oBAAoB;AACtB;;AAEA;EACE;AACF;;AAEA;IACI,sBAAsB;IACtB,gDAAgD;IAChD,gDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;;AAGA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,+BAA+B;EAC/B,4BAA4B;EAC5B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,+BAA+B;EAC/B,4BAA4B;EAC5B,8BAA8B;EAC9B,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,UAAU;AACZ;AACA;EACE,mCAAmC;EACnC,UAAU;AACZ;AACA;EACE,kCAAkC;EAClC,UAAU;AACZ;AACA;EACE,iCAAiC;EACjC,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,+BAA+B;EAC/B,4BAA4B;EAC5B,8BAA8B;EAC9B,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --primary-color: #a5e3e7\r\n}\r\n\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.5em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 840px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: #e43434;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);\r\n  transition: 0.3s all;\r\n}\r\n\r\nform button:hover{\r\n  background: rgb(177, 44, 44)\r\n}\r\n\r\nbutton:active {\r\n    transform: scale(0.98);\r\n    /* Scaling button to 0.98 to its original size */\r\n    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\r\n    /* Lowering the shadow */\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nlabel{\r\n  display: inline-block;\r\n  font-size: 23px;\r\n}\r\n\r\nform input {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.copy, .reload {\r\n  cursor: pointer;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.generate {\r\n  animation: is-rotating 0.6s;\r\n}\r\n\r\n.char {\r\n  width: 60px;\r\n  height: 30px;\r\n  font-size: 28px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.result {\r\n  font-size: 1.55em;\r\n  text-align: center;\r\n  color: blue;\r\n  display: inline-block;\r\n}\r\n\r\n.join, .img, .lineChar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.num, .upper, .lower, .symbol {\r\n  cursor: pointer;\r\n}\r\n\r\n.lineChar {\r\n  width: 350px;\r\n}\r\n\r\n.slidecontainer {\r\n  width: 100%; \r\n}\r\n\r\n\r\n.slider {\r\n  -webkit-appearance: none;  \r\n  appearance: none;\r\n  width: 100%; \r\n  height: 9px; \r\n  background: #d3d3d3; \r\n  outline: none; \r\n  opacity: 0.7; \r\n  -webkit-transition: .2s; \r\n  transition: opacity .2s;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #e51a1a;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #e43434;\r\n  cursor: pointer;\r\n}\r\n\r\n.power {\r\n  background-color: rgb(245, 245, 245);\r\n  border-bottom-right-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  width: 100%;\r\n  height: 11px;\r\n  margin-bottom: 30px;\r\n}\r\n.power0 {\r\n  background-color: rgb(245, 245, 245);\r\n  width: 0%;\r\n}\r\n.power1 {\r\n  background-color: rgb(223, 102, 97);\r\n  width: 25%;\r\n}\r\n.power2 {\r\n  background-color: rgb(239, 194, 15);\r\n  width: 50%;\r\n}\r\n.power3 {\r\n  background-color: rgb(0, 168, 120);\r\n  width: 75%;\r\n}\r\n.power4 {\r\n  background-color: rgb(0, 107, 77);\r\n  width: 100%;\r\n}\r\n\r\n.power0, .power1, .power2, .power3, .power4 {\r\n  height: 10px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.6s;\r\n}\r\n\r\n@keyframes is-rotating {\r\n  to {\r\n    transform: rotate(1turn);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


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