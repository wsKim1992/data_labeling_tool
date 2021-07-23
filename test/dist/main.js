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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scss/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scss/datalabel.scss":
/*!*****************************!*\
  !*** ./scss/datalabel.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scss/draw.scss":
/*!************************!*\
  !*** ./scss/draw.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scss/main.js":
/*!**********************!*\
  !*** ./scss/main.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw.scss */ "./scss/draw.scss");
/* harmony import */ var _draw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_draw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.scss */ "./scss/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.scss */ "./scss/toolbar.scss");
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toolbar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _datalabel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datalabel.scss */ "./scss/datalabel.scss");
/* harmony import */ var _datalabel_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_datalabel_scss__WEBPACK_IMPORTED_MODULE_3__);






const addClassListArea = document.querySelector("#classListArea tbody .class-list");
const addNewClassBtn = document.querySelector('#classListArea tbody .confirm');
const tfoot = document.querySelector("#classListArea tfoot");
const tfootClassList =document.querySelectorAll('#classListArea tfoot .class-list');
const tfootClassListTemplate = tfootClassList[0];
const dataLabelArea = document.querySelectorAll("#dataLabelArea tbody .data-label");

const removeClassList = function(e){
    const element = this.closest('.class-list');
    const id = element.querySelector('.class-name-wrap>span').innerText;
    console.log(`id : ${id}`);
    document.querySelector("#classListArea tfoot").removeChild(element);
    Array.from(dataLabelArea).forEach((cla)=>{
        console.log(cla);
        const select = cla.querySelectorAll('.select-wrap')[0].querySelectorAll('.select')[0];
        console.log(select);
        const optionsToDelete = select.querySelector(`#${id}`);
        console.log(optionsToDelete);
        select.removeChild(optionsToDelete);
    })
}

const reconfirmClass=function(event){
    const parentClassList = this.closest('.class-list');
    const mode = parentClassList.getAttribute('mode');
    console.log(`mode : ${mode}`);
    console.log(parentClassList);
    const classNameWrap = parentClassList.querySelectorAll('.class-name-wrap')[0];
    const classNameWrapSpan = classNameWrap.querySelectorAll('span')[0];
    const className = classNameWrapSpan.innerText;
    
    if(mode==="normal"){
        parentClassList.setAttribute('mode','modify');
        
        classNameWrapSpan.style.display='none';

        let input = document.createElement('input');
        input.style.display = 'block';
        input.style.width = '100px';
        input.style.height = '45px';  
        input.value = className;

        classNameWrap.appendChild(input);
    }else{
        parentClassList.setAttribute('mode','normal');
        const input = classNameWrap.querySelector('input');
        const input_value = input.value;
        input.remove();
        classNameWrapSpan.style.display='block';
        classNameWrapSpan.innerText=input_value;

    }
    
    
}

window.onload=()=>{
    let btn_color = document.querySelectorAll('.btn-color');
    Array.from(btn_color).forEach((color_li)=>{
        const data_color = color_li.getAttribute('data-color')
        console.log(data_color);
        color_li.style.backgroundColor=data_color;
    })
    
    Array.from(tfootClassList).forEach((element)=>{
        let trashCan = element.querySelectorAll('.trash-can')[0]
        let confirm = element.querySelectorAll('.confirm')[0]
        trashCan.querySelectorAll('i')[0].addEventListener('click',removeClassList)
        confirm.querySelectorAll('i')[0].addEventListener('click',reconfirmClass);
    })

    addNewClassBtn.addEventListener('click',(event)=>{
        const className =  addClassListArea.getElementsByClassName('class_name')[0].value;
        const color = addClassListArea.getElementsByClassName('color')[0].value;
        console.log(`className : ${className}`);
        console.log(`color : ${color}`);
        const classListNode = tfootClassListTemplate.cloneNode(true);
        classListNode.setAttribute('mode','normal');
        classListNode.querySelectorAll('.class-name-wrap>span')[0].innerText=className;
        classListNode.querySelectorAll('.select-color>.color>i')[0].style.color = color;
        classListNode.querySelectorAll('.trash-can>i')[0].addEventListener('click',removeClassList);
        tfoot.appendChild(classListNode);

        let newOption = document.createElement('option');
        newOption.value=className;
        newOption.id = className;
        newOption.innerText = className;

        Array.from(dataLabelArea).forEach(dla=>{
            console.log(dla);
            dla.querySelectorAll('.select-wrap')[0].querySelectorAll('.select')[0].appendChild(newOption);
        })
    });
}




/***/ }),

/***/ "./scss/slider.scss":
/*!**************************!*\
  !*** ./scss/slider.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scss/toolbar.scss":
/*!***************************!*\
  !*** ./scss/toolbar.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9kYXRhbGFiZWwuc2Nzcz8zYzEyIiwid2VicGFjazovLy8uL3Njc3MvZHJhdy5zY3NzP2RjNjgiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Njc3Mvc2xpZGVyLnNjc3M/ODlmNiIsIndlYnBhY2s6Ly8vLi9zY3NzL3Rvb2xiYXIuc2Nzcz83Y2M1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFCO0FBQ0U7QUFDQztBQUNFOzs7QUFHMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsR0FBRztBQUM1RDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0M7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0MsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDbkdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Njc3MvbWFpbi5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9kcmF3LnNjc3MnO1xyXG5pbXBvcnQgJy4vc2xpZGVyLnNjc3MnO1xyXG5pbXBvcnQgJy4vdG9vbGJhci5zY3NzJztcclxuaW1wb3J0ICcuL2RhdGFsYWJlbC5zY3NzJztcclxuXHJcblxyXG5jb25zdCBhZGRDbGFzc0xpc3RBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGFzc0xpc3RBcmVhIHRib2R5IC5jbGFzcy1saXN0XCIpO1xyXG5jb25zdCBhZGROZXdDbGFzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGFzc0xpc3RBcmVhIHRib2R5IC5jb25maXJtJyk7XHJcbmNvbnN0IHRmb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGFzc0xpc3RBcmVhIHRmb290XCIpO1xyXG5jb25zdCB0Zm9vdENsYXNzTGlzdCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NsYXNzTGlzdEFyZWEgdGZvb3QgLmNsYXNzLWxpc3QnKTtcclxuY29uc3QgdGZvb3RDbGFzc0xpc3RUZW1wbGF0ZSA9IHRmb290Q2xhc3NMaXN0WzBdO1xyXG5jb25zdCBkYXRhTGFiZWxBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkYXRhTGFiZWxBcmVhIHRib2R5IC5kYXRhLWxhYmVsXCIpO1xyXG5cclxuY29uc3QgcmVtb3ZlQ2xhc3NMaXN0ID0gZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jbG9zZXN0KCcuY2xhc3MtbGlzdCcpO1xyXG4gICAgY29uc3QgaWQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGFzcy1uYW1lLXdyYXA+c3BhbicpLmlubmVyVGV4dDtcclxuICAgIGNvbnNvbGUubG9nKGBpZCA6ICR7aWR9YCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsYXNzTGlzdEFyZWEgdGZvb3RcIikucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICBBcnJheS5mcm9tKGRhdGFMYWJlbEFyZWEpLmZvckVhY2goKGNsYSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGEpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGNsYS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LXdyYXAnKVswXS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JylbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0KTtcclxuICAgICAgICBjb25zdCBvcHRpb25zVG9EZWxldGUgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uc1RvRGVsZXRlKTtcclxuICAgICAgICBzZWxlY3QucmVtb3ZlQ2hpbGQob3B0aW9uc1RvRGVsZXRlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlY29uZmlybUNsYXNzPWZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGNvbnN0IHBhcmVudENsYXNzTGlzdCA9IHRoaXMuY2xvc2VzdCgnLmNsYXNzLWxpc3QnKTtcclxuICAgIGNvbnN0IG1vZGUgPSBwYXJlbnRDbGFzc0xpc3QuZ2V0QXR0cmlidXRlKCdtb2RlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhgbW9kZSA6ICR7bW9kZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHBhcmVudENsYXNzTGlzdCk7XHJcbiAgICBjb25zdCBjbGFzc05hbWVXcmFwID0gcGFyZW50Q2xhc3NMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGFzcy1uYW1lLXdyYXAnKVswXTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZVdyYXBTcGFuID0gY2xhc3NOYW1lV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJylbMF07XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVXcmFwU3Bhbi5pbm5lclRleHQ7XHJcbiAgICBcclxuICAgIGlmKG1vZGU9PT1cIm5vcm1hbFwiKXtcclxuICAgICAgICBwYXJlbnRDbGFzc0xpc3Quc2V0QXR0cmlidXRlKCdtb2RlJywnbW9kaWZ5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xhc3NOYW1lV3JhcFNwYW4uc3R5bGUuZGlzcGxheT0nbm9uZSc7XHJcblxyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaW5wdXQuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xyXG4gICAgICAgIGlucHV0LnN0eWxlLmhlaWdodCA9ICc0NXB4JzsgIFxyXG4gICAgICAgIGlucHV0LnZhbHVlID0gY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICBjbGFzc05hbWVXcmFwLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBhcmVudENsYXNzTGlzdC5zZXRBdHRyaWJ1dGUoJ21vZGUnLCdub3JtYWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGNsYXNzTmFtZVdyYXAucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBpbnB1dF92YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNsYXNzTmFtZVdyYXBTcGFuLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAgICAgICBjbGFzc05hbWVXcmFwU3Bhbi5pbm5lclRleHQ9aW5wdXRfdmFsdWU7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxud2luZG93Lm9ubG9hZD0oKT0+e1xyXG4gICAgbGV0IGJ0bl9jb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY29sb3InKTtcclxuICAgIEFycmF5LmZyb20oYnRuX2NvbG9yKS5mb3JFYWNoKChjb2xvcl9saSk9PntcclxuICAgICAgICBjb25zdCBkYXRhX2NvbG9yID0gY29sb3JfbGkuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJylcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhX2NvbG9yKTtcclxuICAgICAgICBjb2xvcl9saS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ZGF0YV9jb2xvcjtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIEFycmF5LmZyb20odGZvb3RDbGFzc0xpc3QpLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICAgICAgbGV0IHRyYXNoQ2FuID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gtY2FuJylbMF1cclxuICAgICAgICBsZXQgY29uZmlybSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZpcm0nKVswXVxyXG4gICAgICAgIHRyYXNoQ2FuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2knKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVtb3ZlQ2xhc3NMaXN0KVxyXG4gICAgICAgIGNvbmZpcm0ucXVlcnlTZWxlY3RvckFsbCgnaScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZWNvbmZpcm1DbGFzcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGFkZE5ld0NsYXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gIGFkZENsYXNzTGlzdEFyZWEuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xhc3NfbmFtZScpWzBdLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gYWRkQ2xhc3NMaXN0QXJlYS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2xvcicpWzBdLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGFzc05hbWUgOiAke2NsYXNzTmFtZX1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29sb3IgOiAke2NvbG9yfWApO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdE5vZGUgPSB0Zm9vdENsYXNzTGlzdFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBjbGFzc0xpc3ROb2RlLnNldEF0dHJpYnV0ZSgnbW9kZScsJ25vcm1hbCcpO1xyXG4gICAgICAgIGNsYXNzTGlzdE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmNsYXNzLW5hbWUtd3JhcD5zcGFuJylbMF0uaW5uZXJUZXh0PWNsYXNzTmFtZTtcclxuICAgICAgICBjbGFzc0xpc3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QtY29sb3I+LmNvbG9yPmknKVswXS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGNsYXNzTGlzdE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnRyYXNoLWNhbj5pJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbW92ZUNsYXNzTGlzdCk7XHJcbiAgICAgICAgdGZvb3QuYXBwZW5kQ2hpbGQoY2xhc3NMaXN0Tm9kZSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBuZXdPcHRpb24udmFsdWU9Y2xhc3NOYW1lO1xyXG4gICAgICAgIG5ld09wdGlvbi5pZCA9IGNsYXNzTmFtZTtcclxuICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKGRhdGFMYWJlbEFyZWEpLmZvckVhY2goZGxhPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRsYSk7XHJcbiAgICAgICAgICAgIGRsYS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LXdyYXAnKVswXS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JylbMF0uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9