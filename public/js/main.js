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

eval("// const sum = require('./module/sum.js');\n// const multiple = require('./module/multiple.js');\n// require('./module/constants/root.js');\n__webpack_require__(/*! ./module/burger/burger.js */ \"./src/js/module/burger/burger.js\");\n__webpack_require__(/*! ./module/dynamicAdapt/dynamicAdapt.js */ \"./src/js/module/dynamicAdapt/dynamicAdapt.js\")\n__webpack_require__(/*! ./module/dynamicAdapt/brkpoints.js */ \"./src/js/module/dynamicAdapt/brkpoints.js\");\n\n// console.log(sum(4, 5));\n// console.log(multiple(5, 5));\n\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger/burger.js":
/*!****************************************!*\
  !*** ./src/js/module/burger/burger.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const burgerLine = document.querySelector('.burger__line');\nconst catalogBtn = document.querySelector('.catalog__btn');\nconst btnMenuBtn = document.querySelector('.btn-menu__btn');\nconst catalog = document.querySelector('.catalog');\n// const menuList = document.querySelector('.menu__list');\nconst menuList = (__webpack_require__(/*! ../constants/root.js */ \"./src/js/module/constants/root.js\").menuList); \n// console.log(menuList);     \n// catalog btn\ncatalogBtn.addEventListener('click', () => {\n    burgerLine.classList.toggle('burger__line_active');\n    // set the closing mode of the product catalog\n    btnMenuBtn.classList.toggle('btn-menu__btn_catalog');    \n    catalog.classList.toggle('catalog_active');\n});\n\n// bottom header container, menu button\nbtnMenuBtn.addEventListener('click', e => {\n    const btnMenu = e.target.closest('.btn-menu__btn');\n    if(!btnMenu) return;\n    burgerLine.classList.toggle('burger__line_active');\n    // if the product catalog close mode\n    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {\n        catalog.classList.remove('catalog_active');\n        btnMenu.classList.toggle('btn-menu__btn_catalog');   \n    } else {\n        menuList.classList.toggle('menu__list_active');\n    }\n});\n\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/burger/burger.js?");

/***/ }),

/***/ "./src/js/module/constants/root.js":
/*!*****************************************!*\
  !*** ./src/js/module/constants/root.js ***!
  \*****************************************/
/***/ (function(module) {

eval("// breakpoints\nconst BREAK_POINT_MD = 768;\n// module.exports = BREAK_POINT_MD;\nmodule.exports.BREAK_POINT_MD = BREAK_POINT_MD;\n\n// dom elements\nmodule.exports.menuList = document.querySelector('.menu__list');\n\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/constants/root.js?");

/***/ }),

/***/ "./src/js/module/dynamicAdapt/brkpoints.js":
/*!*************************************************!*\
  !*** ./src/js/module/dynamicAdapt/brkpoints.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("\nconst constRoot = __webpack_require__(/*! ../constants/root.js */ \"./src/js/module/constants/root.js\");\nconst BREAK_POINT_MD = constRoot.BREAK_POINT_MD;\nconst contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');\nconst contactsHeaderWhatsappPrevText = contactsHeaderWhatsapp.textContent;\nconst contactsHeaderColumnPhone = document.querySelector('.contacts-header__column_phone');\n// console.log(contactsHeaderColumnPhone);\n// change the internal text for WhatsApp\nif(window.innerWidth <= BREAK_POINT_MD) {\n    contactsHeaderWhatsapp.textContent = 'WhatsApp';\n}\nwindow.addEventListener('resize', () => {\n    if(window.innerWidth <= BREAK_POINT_MD) {\n        // change text for WhatsApp\n        contactsHeaderWhatsapp.textContent = 'WhatsApp';\n        // adding container to change phone\n        if(!contactsHeaderColumnPhone.querySelector('.contacts-header__phone-container')) {\n            const contactsHeaderPhoneContainer = document.createElement('div');\n            const contactsHeaderPhoneMenu = document.createElement('div');\n            contactsHeaderPhoneMenu.classList.add('contacts-header__phone-menu');\n            contactsHeaderPhoneContainer.classList.add('contacts-header__phone-container');\n            const contactsAmount = contactsHeaderColumnPhone.children.length;\n            // move childrens from contactsHeaderColumnPhone to contactsHeaderPhoneContainer and contactsHeaderPhoneMenu\n            for(let i = 0; i < contactsAmount; i++) {\n                if(i !== 0) {\n                    contactsHeaderPhoneContainer.append(contactsHeaderColumnPhone.children[0]);\n                } else {\n                    contactsHeaderPhoneMenu.append(contactsHeaderColumnPhone.children[0]);\n                } \n            }\n            // insert phone menu\n            contactsHeaderColumnPhone.append(contactsHeaderPhoneContainer);\n            contactsHeaderColumnPhone.append(contactsHeaderPhoneMenu);\n            contactsHeaderColumnPhone.addEventListener('click', e => {\n                const target = e.target;\n                // show/close menu\n                contactsHeaderColumnPhone.classList.toggle('contacts-header__column_active');\n                // move the selected phone to the container\n                if(target.classList.contains('contacts-header__phone') && target.closest('.contacts-header__phone-container')) {\n                    contactsHeaderPhoneMenu.append(target);\n                    contactsHeaderPhoneContainer.append(contactsHeaderPhoneMenu.querySelector('.contacts-header__phone'));\n                }\n            });     \n        }\n    } else {\n        contactsHeaderWhatsapp.textContent = contactsHeaderWhatsappPrevText;\n    }\n});\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/dynamicAdapt/brkpoints.js?");

/***/ }),

/***/ "./src/js/module/dynamicAdapt/dynamicAdapt.js":
/*!****************************************************!*\
  !*** ./src/js/module/dynamicAdapt/dynamicAdapt.js ***!
  \****************************************************/
/***/ (function() {

"use strict";
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\n\nfunction DynamicAdapt(type) {\n\tthis.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n\tconst _this = this;\n\t// массив объектов\n\tthis.оbjects = [];\n\tthis.daClassname = \"_dynamic_adapt_\";\n\t// массив DOM-элементов\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\n\n\t// наполнение оbjects объктами\n\tfor (let i = 0; i < this.nodes.length; i++) {\n\t\tconst node = this.nodes[i];\n\t\tconst data = node.dataset.da.trim();\n\t\tconst dataArray = data.split(\",\");\n\t\tconst оbject = {};\n\t\tоbject.element = node;\n\t\tоbject.parent = node.parentNode;\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\n\t\tthis.оbjects.push(оbject);\n\t}\n\n\tthis.arraySort(this.оbjects);\n\n\t// массив уникальных медиа-запросов\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n\t}, this);\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\n\t});\n\n\t// навешивание слушателя на медиа-запрос\n\t// и вызов обработчика при первом запуске\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\n\t\tconst media = this.mediaQueries[i];\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\n\t\tconst mediaBreakpoint = mediaSplit[1];\n\n\t\t// массив объектов с подходящим брейкпоинтом\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\n\t\t\treturn item.breakpoint === mediaBreakpoint;\n\t\t});\n\t\tmatchMedia.addListener(function () {\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\n\t\t});\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\n\t}\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n\tif (matchMedia.matches) {\n\t\tfor (let i = 0; i < оbjects.length; i++) {\n\t\t\tconst оbject = оbjects[i];\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\n\t\t}\n\t} else {\n\t\tfor (let i = 0; i < оbjects.length; i++) {\n\t\t\tconst оbject = оbjects[i];\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\n\t\t\t}\n\t\t}\n\t}\n};\n\n// Функция перемещения\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n\telement.classList.add(this.daClassname);\n\tif (place === 'last' || place >= destination.children.length) {\n\t\tdestination.insertAdjacentElement('beforeend', element);\n\t\treturn;\n\t}\n\tif (place === 'first') {\n\t\tdestination.insertAdjacentElement('afterbegin', element);\n\t\treturn;\n\t}\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\n}\n\n// Функция возврата\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n\telement.classList.remove(this.daClassname);\n\tif (parent.children[index] !== undefined) {\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\n\t} else {\n\t\tparent.insertAdjacentElement('beforeend', element);\n\t}\n}\n\n// Функция получения индекса внутри родителя\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n\tconst array = Array.prototype.slice.call(parent.children);\n\treturn Array.prototype.indexOf.call(array, element);\n};\n\n// Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\nDynamicAdapt.prototype.arraySort = function (arr) {\n\tif (this.type === \"min\") {\n\t\tArray.prototype.sort.call(arr, function (a, b) {\n\t\t\tif (a.breakpoint === b.breakpoint) {\n\t\t\t\tif (a.place === b.place) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\n\t\t\t\t\treturn -1;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\n\t\t\t\t\treturn 1;\n\t\t\t\t}\n\n\t\t\t\treturn a.place - b.place;\n\t\t\t}\n\n\t\t\treturn a.breakpoint - b.breakpoint;\n\t\t});\n\t} else {\n\t\tArray.prototype.sort.call(arr, function (a, b) {\n\t\t\tif (a.breakpoint === b.breakpoint) {\n\t\t\t\tif (a.place === b.place) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\n\t\t\t\t\treturn 1;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\n\t\t\t\t\treturn -1;\n\t\t\t\t}\n\n\t\t\t\treturn b.place - a.place;\n\t\t\t}\n\n\t\t\treturn b.breakpoint - a.breakpoint;\n\t\t});\n\t\treturn;\n\t}\n};\n\nconst da = new DynamicAdapt(\"max\");\nda.init();\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/dynamicAdapt/dynamicAdapt.js?");

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