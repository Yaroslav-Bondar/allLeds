/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const sum = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\nconst multiple = __webpack_require__(/*! ./module/multiple.js */ \"./src/js/module/multiple.js\");\n__webpack_require__(/*! ./module/burger/burger.js */ \"./src/js/module/burger/burger.js\");\nconsole.log(sum(4, 5));\nconsole.log(multiple(5, 5));\n\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger/burger.js":
/*!****************************************!*\
  !*** ./src/js/module/burger/burger.js ***!
  \****************************************/
/***/ (function() {

eval("const burgerLine = document.querySelector('.burger__line');\n\nif(burgerLine) {\n    // menuBody = document.querySelector('menu__body');\n    burgerLine.addEventListener('click', (e) => {\n        burgerLine.classList.toggle('burger__line_active');\n        // menuBody.classList.toggle('_active');\n        document.body.classList.toggle('body_lock');\n    });\n}\n// let menuOpen = false;\n// burgerLine.addEventListener('click', ()=> {\n//     if(!menuOpen) {\n//         burgerLine.classList.add('burger__line_open');\n//         menuOpen=true;\n//     }\n//     else {\n//         burgerLine.classList.remove('burger__line_open');\n//         menuOpen=false;\n//     }\n// })\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/burger/burger.js?");

/***/ }),

/***/ "./src/js/module/multiple.js":
/*!***********************************!*\
  !*** ./src/js/module/multiple.js ***!
  \***********************************/
/***/ (function(module) {

eval("module.exports = (a, b) => b * a;\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/multiple.js?");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(module) {

eval("module.exports = (a, b) => b + a;\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/sum.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;