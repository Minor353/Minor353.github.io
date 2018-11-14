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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**Аккордеон */\n$('.js-accordeon dd:not(:first)').slideUp();\n\n$('.js-accordeon dt').on('click', function (ev) {\n  $(ev.target).next('dd').slideToggle().siblings('dd').slideUp();\n});\n\nvar btnTriangle = document.querySelectorAll('.fa-caret-right');\nvar btnTextTriangleToogle = document.querySelectorAll('.faq_accordeon-header-title');\n\nvar _loop = function _loop(i) {\n  btnTextTriangleToogle[i].addEventListener('click', function () {\n    for (var _i = 0; _i < btnTriangle.length; _i++) {\n      btnTriangle[_i].classList.remove('fa-caret-right--active');\n    }\n    btnTriangle[i].classList.add('fa-caret-right--active');\n  });\n};\n\nfor (var i = 0; i < btnTextTriangleToogle.length; i++) {\n  _loop(i);\n}\n\n/**Слайдер с отзывами */\n$('.reviews_slider-wrap').slick({\n  centerMode: true,\n  centerPadding: '200px',\n  slidesToShow: 1,\n  arrows: false,\n  infinite: true,\n  autoplay: true,\n  autoplaySpeed: 5000,\n  responsive: [{\n    breakpoint: 850,\n    settings: {\n      arrows: false,\n      centerMode: true,\n      centerPadding: '40px',\n      slidesToShow: 1\n    }\n  }, {\n    breakpoint: 480,\n    settings: {\n      arrows: false,\n      centerMode: true,\n      centerPadding: '0px',\n      slidesToShow: 1\n    }\n  }]\n});\n\n/**Мобильное меню**/\n$(document).ready(function () {\n  $('.menu-icon').click(function () {\n    $(this).toggleClass('active');\n    $('.header-mobile_bg').toggleClass('header-mobile_bg--active');\n    $('.heade-mobile').toggleClass('heade-mobile--active');\n  });\n  $('.nav_item-link--mobile').click(function () {\n    $('.header-mobile_bg').toggleClass('header-mobile_bg--active');\n    $('.heade-mobile').toggleClass('heade-mobile--active');\n    $('.menu-icon').toggleClass('active');\n  });\n});\n\n/********Форма обратной связи**********/\n\nvar formWrap = document.querySelector('.form-wrapper');\n\nvar btnForm = document.querySelectorAll('.form-link');\n\nfor (var i = 0; i < btnForm.length; i++) {\n  btnForm[i].addEventListener('click', function (e) {\n    e.preventDefault();\n    formWrap.classList.add('form-wrapper--active');\n  });\n\n  formWrap.addEventListener('click', function () {\n    if (event.target == formWrap) {\n      formWrap.classList.remove('form-wrapper--active');\n    }\n  });\n}\n\n/**********Плавный скрол***********/\n\n$(\".nav_item-link\").on(\"click\", function (event) {\n  //отменяем стандартную обработку нажатия по ссылке\n  event.preventDefault();\n  //забираем идентификатор бока с атрибута href\n  var id = $(this).attr('href'),\n\n  //узнаем высоту от начала страницы до блока на который ссылается якорь\n  top = $(id).offset().top;\n  //анимируем переход на расстояние - top за 500 мс\n  $('body,html').animate({ scrollTop: top }, 1200);\n});\n\n/*const textWrapToggle = document.querySelector('#slider-1-layer-10');\nconst btnLinkToggle = document.querySelector('#slider-1-layer-8 a');\n\ntextWrapToggle.innerHTML = 'Закажи дизайн проекта до 31.12.2018 и получи авторский надзор бесплатно';*/\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });