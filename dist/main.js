/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  text-decoration: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(230, 196, 196);
  padding: 1% 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 70px;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Adjust the maximum width as needed */
}

.logo-container img {
  max-height: 50px; /* Adjust the logo height as needed */
  margin-right: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.menu li {
  margin: 0 15px; /* Adjust the spacing between menu items */
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-size: 18px; /* Adjust the font size as needed */
  font-weight: bold;
}

.menu span {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #333;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.3s ease-in-out;
}

.menu li:hover span {
  transform: scaleX(1);
  transform-origin: left center;
}

#list {
  margin-top: 10%; /* Increase the margin-top for more spacing */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.meal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px; /* Increase the gap for better separation */
  width: calc(33.33% - 20px); /* Adjust the width for better alignment */
  padding: 15px; /* Increase padding for a softer look */
  margin-bottom: 20px; /* Increase margin-bottom for better spacing */
  border: 1px solid #e0e0e0; /* Use a lighter border color */
  border-radius: 8px; /* Increase border radius for rounded corners */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  transition: transform 0.3s;
}

.meal img {
  width: 100%;
  border-radius: 8px; /* Match border radius for consistency */
}

.meal img:hover {
  transform: scale(1.05); /* Slightly reduce the scale factor for a smoother hover effect */
}

/* Updated Modal Styles with New Class Names */
.modal-beautiful {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.774);
  backdrop-filter: blur(5px);
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 0.4s;
  animation-name: fadein;
  animation-duration: 0.4s;
}

/* Updated Modal Content Styles for a Smaller Modal */
.modal-content-beautiful {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 500px; /* Adjust the maximum width as needed */
  width: 90%; /* Adjust the width as needed */
}

/* Updated Close Button Styles */
.close-beautiful {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-beautiful:hover,
.close-beautiful:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* Updated Item Section Styles */
.itemSection-beautiful {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  padding: 1rem;
}

/* Updated Comment Section Styles */
.commentSection-beautiful {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  padding: 1rem;
}

/* Updated Comment Box Styles */
.commentBox-beautiful {
  display: flex;
  flex-direction: column;
  background-color: #efeaea;
  width: 100%;
  padding: 1.5rem 1rem;
}

/* Updated Comment Text Styles */
.commentText-beautiful, .comment-name {
  font-size: medium;
  color: #5a5858;
}

/* Updated Date Styles */
.date-beautiful {
  color: #aaa;
  font-style: italic;
}

/* Updated Image Styles to Fit Within Modal */
.img-beautiful {
  max-width: 100%; /* Ensure the image fits within the modal */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove any residual padding/margin */
  margin: 0 auto; /* Center the image horizontally */
}

/* Updated Styles for the "Add Comment" Button */
.comments-button-beautiful {
  background-color: #4CAF50; /* Change the background color */
  color: white; /* Text color */
  padding: 12px 20px; /* Padding for the button */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.comments-button-beautiful:hover {
  background-color: #45a049; /* Darker background color on hover */
}

/* Updated Comment Title Styles */
.commentTitle-beautiful {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

/* Updated Username Input Styles */
.usernameInput-beautiful {
  margin-bottom: 1rem;
  padding: 12px;
  width: 100%;
}

/* Updated Textarea Styles */
.textarea-beautiful {
  margin-bottom: 1rem;
  padding: 12px;
  width: 100%;
}

/* Updated Likes Container Styles */
.likes-container-beautiful {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1em;
}

/* Updated Likes Icon Styles */
.likes-icon-beautiful {
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.4s;
}

.likes-icon-beautiful:hover {
  transform: scale(1.1);
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(230, 196, 196); /* Set your preferred background color */
  text-align: center;
  padding: 10px 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    text-decoration: none;\n    padding: 0;\n    margin: 0;\n    font-family: 'Poppins', sans-serif;\n  }\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgb(230, 196, 196);\n    padding: 1% 0;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    height: 70px;\n  }\n  \n  nav {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 1200px; /* Adjust the maximum width as needed */\n  }\n  \n  .logo-container img {\n    max-height: 50px; /* Adjust the logo height as needed */\n    margin-right: 20px;\n  }\n  \n  .menu {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n  }\n  \n  .menu li {\n    margin: 0 15px; /* Adjust the spacing between menu items */\n    position: relative;\n  }\n  \n  .menu a {\n    text-decoration: none;\n    color: #333;\n    font-size: 18px; /* Adjust the font size as needed */\n    font-weight: bold;\n  }\n  \n  .menu span {\n    position: absolute;\n    bottom: -4px;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: #333;\n    transform: scaleX(0);\n    transform-origin: right center;\n    transition: transform 0.3s ease-in-out;\n  }\n  \n  .menu li:hover span {\n    transform: scaleX(1);\n    transform-origin: left center;\n  }\n  \n\n \n\n  #list {\n    margin-top: 10%; /* Increase the margin-top for more spacing */\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  \n  .meal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px; /* Increase the gap for better separation */\n    width: calc(33.33% - 20px); /* Adjust the width for better alignment */\n    padding: 15px; /* Increase padding for a softer look */\n    margin-bottom: 20px; /* Increase margin-bottom for better spacing */\n    border: 1px solid #e0e0e0; /* Use a lighter border color */\n    border-radius: 8px; /* Increase border radius for rounded corners */\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */\n    transition: transform 0.3s;\n  }\n  \n  .meal img {\n    width: 100%;\n    border-radius: 8px; /* Match border radius for consistency */\n  }\n  \n  .meal img:hover {\n    transform: scale(1.05); /* Slightly reduce the scale factor for a smoother hover effect */\n  }\n    /* Updated Modal Styles with New Class Names */\n.modal-beautiful {\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.774);\n    backdrop-filter: blur(5px);\n    -webkit-animation-name: fadein;\n    -webkit-animation-duration: 0.4s;\n    animation-name: fadein;\n    animation-duration: 0.4s;\n  }\n  \n/* Updated Modal Content Styles for a Smaller Modal */\n.modal-content-beautiful {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    max-width: 500px; /* Adjust the maximum width as needed */\n    width: 90%; /* Adjust the width as needed */\n  }\n  \n  \n  /* Updated Close Button Styles */\n  .close-beautiful {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close-beautiful:hover,\n  .close-beautiful:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  /* Updated Item Section Styles */\n  .itemSection-beautiful {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    width: 100%;\n    align-items: flex-start;\n    padding: 1rem;\n  }\n  \n  /* Updated Comment Section Styles */\n  .commentSection-beautiful {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    width: 100%;\n    align-items: flex-start;\n    padding: 1rem;\n  }\n  \n  /* Updated Comment Box Styles */\n  .commentBox-beautiful {\n    display: flex;\n    flex-direction: column;\n    background-color: #efeaea;\n    width: 100%;\n    padding: 1.5rem 1rem;\n  }\n  \n  /* Updated Comment Text Styles */\n  .commentText-beautiful, .comment-name {\n    font-size: medium;\n    color: #5a5858;\n  }\n  \n  /* Updated Date Styles */\n  .date-beautiful {\n    color: #aaa;\n    font-style: italic;\n  }\n  \n /* Updated Image Styles to Fit Within Modal */\n.img-beautiful {\n    max-width: 100%; /* Ensure the image fits within the modal */\n    height: auto; /* Maintain aspect ratio */\n    display: block; /* Remove any residual padding/margin */\n    margin: 0 auto; /* Center the image horizontally */\n  }\n  \n  /* Updated Styles for the \"Add Comment\" Button */\n.comments-button-beautiful {\n    background-color: #4CAF50; /* Change the background color */\n    color: white; /* Text color */\n    padding: 12px 20px; /* Padding for the button */\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease; /* Smooth background color transition */\n  }\n  \n  .comments-button-beautiful:hover {\n    background-color: #45a049; /* Darker background color on hover */\n  }\n  \n  /* Updated Comment Title Styles */\n  .commentTitle-beautiful {\n    padding: 2rem;\n    display: flex;\n    justify-content: center;\n  }\n  \n  /* Updated Username Input Styles */\n  .usernameInput-beautiful {\n    margin-bottom: 1rem;\n    padding: 12px;\n    width: 100%;\n  }\n  \n  /* Updated Textarea Styles */\n  .textarea-beautiful {\n    margin-bottom: 1rem;\n    padding: 12px;\n    width: 100%;\n  }\n  \n  /* Updated Likes Container Styles */\n  .likes-container-beautiful {\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    gap: 1em;\n  }\n  \n  /* Updated Likes Icon Styles */\n  .likes-icon-beautiful {\n    font-size: 2em;\n    cursor: pointer;\n    transition: transform 0.4s;\n  }\n  \n  .likes-icon-beautiful:hover {\n    transform: scale(1.1);\n  }\n  \n  footer {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-color: rgb(230, 196, 196); /* Set your preferred background color */\n    text-align: center;\n    padding: 10px 0;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (comments) => {
  if (comments === null || comments === undefined) return 0;
  return comments.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);


/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchComments = async (endpoint) => {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`;
  const res = await fetch(apiUrl);
  const commentsData = await res.json();
  return commentsData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);


/***/ }),

/***/ "./src/modules/getDetail.js":
/*!**********************************!*\
  !*** ./src/modules/getDetail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getDetail = async (endpoint) => {
  const apiurl = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const res = await fetch(apiurl);
  return res.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDetail);


/***/ }),

/***/ "./src/modules/mealCounter.js":
/*!************************************!*\
  !*** ./src/modules/mealCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countCategoryMeals: () => (/* binding */ countCategoryMeals),
/* harmony export */   updateCategoryCounts: () => (/* binding */ updateCategoryCounts)
/* harmony export */ });
const API_KEY = '1';
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1';

const countCategoryMeals = async (category) => {
  if (!category || typeof category !== 'string') {
    return 0;
  }
  const response = await fetch(`${API_BASE_URL}/${API_KEY}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals ? data.meals.length : 0;
};

const updateCategoryCounts = async () => {
  const headerLinks = document.querySelectorAll('header a');

  headerLinks.forEach(async (link) => {
    const { dataset: { category } } = link;
    const mealCount = await countCategoryMeals(category);
    const countElement = link.nextElementSibling;
    countElement.textContent = ` (${mealCount})`;
  });
};




/***/ }),

/***/ "./src/modules/popupModal.js":
/*!***********************************!*\
  !*** ./src/modules/popupModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getDetail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDetail.js */ "./src/modules/getDetail.js");
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");
/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitComment.js */ "./src/modules/submitComment.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");





const newModal = document.getElementById('new-modal');
const newClosebtn = document.getElementById('new-close');
const newItemSection = document.getElementById('new-itemSection');
const newCommentSection = document.getElementById('new-commentSection');
const newCommentsHeading = document.getElementById('new-commentsHeading');
const newBtnAddComment = document.getElementById('new-btnAddComment');
const newUsernameInput = document.getElementById('new-username');
const newCommentInput = document.getElementById('new-comment');

const closeModal = () => {
  newModal.style.display = 'none';
  clearElements([newItemSection, newCommentsHeading, newCommentSection]);
};

const clearElements = (elements) => {
  elements.forEach((element) => {
    element.innerHTML = '';
  });
};

const displayItemDetail = async (id, data, comments) => {
  newModal.style.display = 'flex';

  newItemSection.innerHTML = `
    <img class='img-beautiful' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
  `;

  if (comments.length > 0) {
    const count = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(comments);
    newCommentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
    newCommentSection.innerHTML = comments
      .map(
        (comment) => `
          <div class="commentBox-beautiful">
            <p class="comment-name">${comment.username}:</p>
            <p class="commentText-beautiful">${comment.comment}</p>
            <p class="date-beautiful">${comment.creation_date}</p>
          </div>
        `,
      )
      .join('');
  }

  newBtnAddComment.addEventListener('click', async () => {
    const username = newUsernameInput.value;
    const comment = newCommentInput.value;

    if (username !== '' && comment !== '') {
      await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id, username, comment);
      newUsernameInput.value = '';
      newCommentInput.value = '';
      closeModal();
    }
  });

  newClosebtn.addEventListener('click', closeModal);
};

const popupModal = async (id) => {
  const data = await (0,_getDetail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`lookup.php?i=${id}`);
  const result = data.meals;
  const comments = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`);
  displayItemDetail(id, result[0], comments);
};

window.onclick = (event) => {
  if (event.target === newModal) {
    newModal.style.display = 'none';
    clearElements([newItemSection, newCommentsHeading, newCommentSection]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupModal);


/***/ }),

/***/ "./src/modules/renderList.js":
/*!***********************************!*\
  !*** ./src/modules/renderList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMeals: () => (/* binding */ displayMeals),
/* harmony export */   fetchCategoryMeals: () => (/* binding */ fetchCategoryMeals),
/* harmony export */   sendLike: () => (/* binding */ sendLike),
/* harmony export */   updateLikesCount: () => (/* binding */ updateLikesCount)
/* harmony export */ });
/* harmony import */ var _popupModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupModal.js */ "./src/modules/popupModal.js");


const newApiKey = '1';
const newApiBaseUrl = 'https://www.themealdb.com/api/json/v1';
const newAppId = 'RjyF2atccOw1gRFQE3W0';
const newInvolvementApiBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const mealListContainer = document.getElementById('list');

const fetchCategoryMeals = async (category) => {
  const res = await fetch(`${newApiBaseUrl}/${newApiKey}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

const fetchMealLikes = async (mealName) => {
  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`);
  const data = await res.json();
  const mealLikes = data.find((item) => item.item_id === mealName);
  return mealLikes ? mealLikes.likes : 0;
};

const updateLikesCount = (element, count) => {
  element.textContent = `${count} Likes`;
};

const sendLike = async (mealName) => {
  const requestBody = {
    item_id: mealName,
  };

  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  return res.status === 201;
};

const displayMeals = async (meals) => {
  mealListContainer.innerHTML = '';

  meals.forEach(async (meal) => {
    const mealElement = document.createElement('div');
    mealElement.classList.add('meal');

    const mealImage = document.createElement('img');
    mealImage.src = `${meal.strMealThumb}/preview`;
    mealImage.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.textContent = meal.strMeal;

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container-beautiful');

    const likesIcon = document.createElement('span');
    likesIcon.classList.add('likes-icon');
    likesIcon.textContent = '❤️';

    const likesCount = document.createElement('span');
    likesCount.classList.add('likes-count');

    const commentsButton = document.createElement('button');
    commentsButton.textContent = 'Comments';
    commentsButton.classList.add('comments-button-beautiful');

    commentsButton.addEventListener('click', () => (0,_popupModal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meal.idMeal));

    likesContainer.appendChild(likesIcon);
    likesContainer.appendChild(likesCount);

    mealElement.appendChild(mealImage);
    mealElement.appendChild(mealTitle);
    mealElement.appendChild(likesContainer);
    mealElement.appendChild(commentsButton);

    mealListContainer.appendChild(mealElement);

    const likes = await fetchMealLikes(meal.strMeal);
    updateLikesCount(likesCount, likes);
  });
};




/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const submitComment = async (id, userName, com) => {
  const apiurl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`;
  const response = await fetch(apiurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id.toString(),
      username: userName,
      comment: com,
    }),
  });
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitComment);


/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _modules_renderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderList */ "./src/modules/renderList.js");
/* harmony import */ var _modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mealCounter.js */ "./src/modules/mealCounter.js");





const headerLinks = document.querySelectorAll('header a');
const mealListContainer = document.getElementById('list');

const renderMealCategory = async (category) => {
  const categoryMeals = await (0,_modules_renderList__WEBPACK_IMPORTED_MODULE_2__.fetchCategoryMeals)(category);
  (0,_modules_renderList__WEBPACK_IMPORTED_MODULE_2__.displayMeals)(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  headerLinks.forEach((link) => {
    const { dataset: { category } } = link;
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      await renderMealCategory(category);
    });
  });
};

const initializeApp = async () => {
  await (0,_modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_3__.updateCategoryCounts)();
  setupHeaderLinkListeners();
  renderMealCategory('Seafood');
};

mealListContainer.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const mealTitleElement = e.target.closest('.meal').querySelector('h3');
    const mealTitle = mealTitleElement.textContent;
    const likesCountElement = e.target.nextElementSibling;
    const currentLikes = parseInt(likesCountElement.textContent, 10);
    const updatedLikes = currentLikes + 1;
    const success = await (0,_modules_renderList__WEBPACK_IMPORTED_MODULE_2__.sendLike)(mealTitle);
    if (success) {
      (0,_modules_renderList__WEBPACK_IMPORTED_MODULE_2__.updateLikesCount)(likesCountElement, updatedLikes);
    }
  }
});

initializeApp();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map