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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/component/answers.js":
/*!******************************************!*\
  !*** ./src/scripts/component/answers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var answersBlock = document.querySelector('.answers_list');\n  var answersItems = document.querySelectorAll('.answers_item');\n  var answersTriger = document.querySelectorAll('.answers_item-title');\n\n  if (answersBlock) {\n    answersItems[0].classList.add('answers_item-active');\n\n    var _loop = function _loop(i) {\n      answersTriger[i].addEventListener('click', function () {\n        for (var _i = 0; _i < answersItems.length; _i++) {\n          answersItems[_i].classList.remove('answers_item-active');\n        }\n        answersItems[i].classList.add('answers_item-active');\n      });\n    };\n\n    for (var i = 0; i < answersItems.length; i++) {\n      _loop(i);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/component/answers.js?");

/***/ }),

/***/ "./src/scripts/component/catalog.js":
/*!******************************************!*\
  !*** ./src/scripts/component/catalog.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var bntCategory = document.querySelector('.catalog_categories-btn');\n  var catalogLinksList = document.querySelector('.catalog_categories');\n\n  if (bntCategory) {\n    bntCategory.addEventListener('click', function () {\n      catalogLinksList.classList.toggle('catalog_categories--active');\n      bntCategory.classList.toggle('catalog_categories-btn--active');\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/scripts/component/catalog.js?");

/***/ }),

/***/ "./src/scripts/component/main-form.js":
/*!********************************************!*\
  !*** ./src/scripts/component/main-form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  /**Сабмит форм обратной связи*/\n  $('.form_wrap').on('submit', submitMainForm);\n\n  function submitMainForm(e) {\n    e.preventDefault();\n\n    var form = $(e.target),\n        data = form.serialize(),\n        url = form.attr('action');\n\n    var request = $.ajax({\n      type: 'POST',\n      url: url,\n      data: data\n    });\n\n    var popupBlock = document.querySelector('.popup-success');\n    var formWrap = document.querySelector('.product-form');\n\n    function closePopup() {\n      popupBlock.classList.remove('popup-success--active');\n      if (formWrap) {\n        formWrap.classList.remove('product-form--active');\n      }\n      document.querySelector('.form_wrap').reset();\n    }\n\n    request.done(function (msg) {\n      popupBlock.classList.add('popup-success--active');\n      setTimeout(closePopup, 2500);\n    });\n\n    request.fail(function (jqXHR, textStatus) {\n      popupBlock.classList.add('popup-success--active');\n      setTimeout(closePopup, 2500);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/scripts/component/main-form.js?");

/***/ }),

/***/ "./src/scripts/component/nav-mobile.js":
/*!*********************************************!*\
  !*** ./src/scripts/component/nav-mobile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  $(\".navBurger\").click(function () {\n    $('.navBurger').toggleClass(\"active\");\n    $(\".menu-popup\").toggleClass(\"menu-popup-open\");\n    // this line ▼ prevents content scroll-behind\n    $(\"body\").toggleClass(\"locked\");\n  });\n};\n\n//# sourceURL=webpack:///./src/scripts/component/nav-mobile.js?");

/***/ }),

/***/ "./src/scripts/component/popup-form.js":
/*!*********************************************!*\
  !*** ./src/scripts/component/popup-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var popupForm = document.querySelector('.popup-form');\n  var popupBtns = document.querySelectorAll('.call-btn--js');\n\n  for (var i = 0; i < popupBtns.length; i++) {\n    popupBtns[i].addEventListener('click', function (e) {\n      e.preventDefault();\n      popupForm.classList.add('popup-form--active');\n    });\n  }\n\n  popupForm.addEventListener('click', function (event) {\n    if (event.target == popupForm) {\n      popupForm.classList.remove('popup-form--active');\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/scripts/component/popup-form.js?");

/***/ }),

/***/ "./src/scripts/component/product-form.js":
/*!***********************************************!*\
  !*** ./src/scripts/component/product-form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var btnOrder = document.querySelector('.main-product_order-btn'); //Кнопка оформления заказа\n  var btnPreOrder = document.querySelector('.main-product_preorder-btn'); //Кнопка оформления рассрочки\n\n  var formTitle = document.querySelector('.product-form_title'); //Текст на вызваной форме\n\n  var productTitle = document.querySelector('.main-product_description-title'); //Название товара\n\n\n  var productTitleInput = document.querySelector('.product-form_product-name'); //Инпут который принимает название продукта\n  var formTitleInput = document.querySelector('.product-form_type'); //Инпут который принимает тип формы\n\n  var formWraper = document.querySelector('.product-form'); //Контейнер формы\n  var formCross = document.querySelector('.product-form_cross'); //Крестик закрытия формы\n\n  if (btnOrder) {\n\n    btnOrder.addEventListener('click', function (e) {\n      e.preventDefault();\n      formTitle.innerHTML = 'Оформить заказ';\n      formWraper.classList.add('product-form--active');\n\n      productTitleInput.value = productTitle.textContent;;\n      formTitleInput.value = formTitle.textContent;\n    });\n\n    btnPreOrder.addEventListener('click', function (e) {\n      e.preventDefault();\n      formTitle.innerHTML = 'Вызвать замерщика';\n      formWraper.classList.add('product-form--active');\n\n      productTitleInput.value = productTitle.textContent;\n      formTitleInput.value = formTitle.textContent;\n    });\n\n    formCross.addEventListener('click', function () {\n      formWraper.classList.remove('product-form--active');\n    });\n  }\n\n  /**Сабмит формы заказа*/\n  $('.product-form_form').on('submit', submitForm);\n\n  function submitForm(e) {\n    e.preventDefault();\n\n    var form = $(e.target),\n        data = form.serialize(),\n        url = form.attr('action');\n\n    var request = $.ajax({\n      type: 'POST',\n      url: url,\n      data: data\n    });\n\n    var popupBlock = document.querySelector('.popup-success');\n    var formWrap = document.querySelector('.product-form');\n\n    function closePopup() {\n      popupBlock.classList.remove('popup-success--active');\n      if (formWrap) {\n        formWrap.classList.remove('product-form--active');\n      }\n      document.querySelector('.product-form_form').reset();\n    }\n\n    request.done(function (msg) {\n      popupBlock.classList.add('popup-success--active');\n      setTimeout(closePopup, 2500);\n    });\n\n    request.fail(function (jqXHR, textStatus) {\n      popupBlock.classList.add('popup-success--active');\n      setTimeout(closePopup, 2500);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/scripts/component/product-form.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar popupForm = __webpack_require__(/*! ./component/popup-form.js */ \"./src/scripts/component/popup-form.js\");\npopupForm();\n\nvar answers = __webpack_require__(/*! ./component/answers.js */ \"./src/scripts/component/answers.js\");\nanswers();\n\nvar catalog = __webpack_require__(/*! ./component/catalog.js */ \"./src/scripts/component/catalog.js\");\ncatalog();\n\nvar navMobile = __webpack_require__(/*! ./component/nav-mobile.js */ \"./src/scripts/component/nav-mobile.js\");\nnavMobile();\n\nvar productForm = __webpack_require__(/*! ./component/product-form.js */ \"./src/scripts/component/product-form.js\");\nproductForm();\n\nvar mainForm = __webpack_require__(/*! ./component/main-form.js */ \"./src/scripts/component/main-form.js\");\nmainForm();\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });