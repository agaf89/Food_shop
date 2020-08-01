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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function calc(){
       ////calc
       const result = document.querySelector( '.calculating__result span');

       let sex = 'female', height, weight, age, ratio = 1.375;
   
       if (localStorage.getItem('sex')){
           sex = localStorage.getItem('sex');
       } else{
           sex = 'female';
           localStorage.setItem('sex', 'female');
       }
   
       if (localStorage.getItem('ratio')){
           ratio = localStorage.getItem('ratio');
       } else{
           ratio = 1.375;
           localStorage.setItem('ratio', 1.375);
       }
       //public from Localstorage
       function initLocalCalc(select, activeclass){
           const elem = document.querySelectorAll(select);
           elem.forEach(i =>{
               i.classList.remove(activeclass);
               i.classList.remove(activeclass);
               if (i.getAttribute('id')===localStorage.getItem('sex')){
                   i.classList.add(activeclass);
               }
               if (i.getAttribute('data-ratio')===localStorage.getItem('ratio')){            
                   i.classList.add(activeclass);
               }
           });
       }
       initLocalCalc('#gender div','calculating__choose-item_active');
       initLocalCalc('.calculating__choose_big div','calculating__choose-item_active');
   
       function calcTotal(){
           if (!sex || !height || !weight || !age || !ratio){
               result.textContent= "___";
               return;
           }
           if(sex=='female'){
               result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 *age)) * ratio);
           } else{
               result.textContent = Math.round((88.36 + (13.4* weight) + (4.8 * height) - (5.7 *age)) * ratio);
           }
       }
       calcTotal();
       function getStaticinf(parentSelector,activeClass){
           const elements = document.querySelectorAll(`${parentSelector} div`);
           document.querySelector(parentSelector).addEventListener('click',(e)=>{
               if(e.target.classList.contains('calculating__choose')){
                   return;
               }
               if(e.target.getAttribute('data-ratio')){
                   ratio = +e.target.getAttribute('data-ratio');
                   localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
               } else {
                   sex = e.target.getAttribute('id');
                   localStorage.setItem('sex', e.target.getAttribute('id'));
               }   
               elements.forEach(el=>{
                  el.classList.remove(activeClass);
               });
               e.target.classList.add(activeClass);
               
               calcTotal();
           });
       }
       getStaticinf('#gender','calculating__choose-item_active');
       getStaticinf('.calculating__choose_big','calculating__choose-item_active');
   
       function getDynamicInf(selector){
           const input = document.querySelector(selector);
   
           input.addEventListener('input', ()=>{
               if(input.value.match(/\D/g)){ //не число
                   input.style.border = "1px solid red";
               } else{
                   input.style.border = 'none';
               }
   
   
               switch (input.getAttribute('id')) {
                   case "height":
                       height = +input.value;
                       break;
                   case "weight":
                       weight = +input.value;
                       break;
                   case "age":
                       age = +input.value;
                       break;
               }
               calcTotal();
           });
           
       }
       getDynamicInf('#height');
       getDynamicInf('#weight');
       getDynamicInf('#age');
   
       
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards(){
    //рендер карточек
    class MenuCard {
        constructor(src, alt, title, decr, price, parentSelector, ...Classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.decr = decr;
            this.price = price;
            this.Classes = Classes; //как массив возращается
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeTOUAH();
        }
        changeTOUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div'); //создаем элемент и добавляем класс через аргументы класса
            if (this.Classes.length === 0) { //проверка если Классес пустой, то добавь классы
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.Classes.forEach(ClassName => {
                    element.classList.add(ClassName);
                });
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.decr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>  
                    </div>
            `;
            this.parent.append(element);
        }
    }
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg, //динамически формируем карточки
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./js/modules/modals.js");



function forms(){
    
    const modal = document.querySelector('.modal');
    // Forms
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'spinner.svg',
        success: 'Спасибо, с Вами скоро свяжутся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        bindData(item);
    });
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            //create client window status
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanks(message.success);
                    statusMessage.src='';
                }).catch(() => {
                    showThanks(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }
    function showThanks(message) {
        const prevModal = document.querySelector('.modal__dialog');
        prevModal.style.display = "none";
        modal.style.display = "block";
        Object(_modals__WEBPACK_IMPORTED_MODULE_0__["openModal"])(_modals__WEBPACK_IMPORTED_MODULE_0__["btns"]);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div class='modal__close'>×</div>
                <div class='modal__title'>${message}</div>
            </div>
        `;
        thanksModal.addEventListener("click", (e) => {
            if (e.target.classList.contains('modal__close')) {
                modal.style.display = "none";
            }
        });
        /////!!!!!!
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModal.style.display = "block";
            modal.style.display = "none";
        }, 4000);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modals.js":
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
/*! exports provided: default, openModal, btns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btns", function() { return btns; });
const modal = document.querySelector('.modal');

function OpenMod(num) {
    if (modal.style.display == "block") {
        return;
    } else {
        setTimeout(() => {
            modal.style.display = "block";
            document.body.style.overflow = 'hidden';
        }, num);
    }
}

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        OpenMod(10);
        window.removeEventListener('scroll', showModalByScroll); //удаляем
    }
}
window.addEventListener('scroll', showModalByScroll);

function openModal(open) {
    open.forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target && e.target.classList.contains("btn_white") || e.target.classList.contains("btn_dark")) {
                modal.style.display = "block";
            }
            document.body.style.overflow = 'hidden';
            window.removeEventListener('scroll', showModalByScroll);
        });
    });

}
const btns = document.querySelectorAll("[data-modal]");

function modals() {
    const close1 = document.querySelector('.modal__close');
    openModal(btns);

    function closeModal(close) {
        close.addEventListener("click", (e) => {
            if (e.target === close) {
                modal.style.display = "none";
            }
            document.body.style.overflow = '';
        });
    }
    closeModal(close1);
    closeModal(modal);
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modal.style.display = "none";
            document.body.style.overflow = '';
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = (modals);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sliders({container,slide, next,prev,totalCount,currentCounter, wrapper,field }){
    const Prev = document.querySelector(prev);
    const Next = document.querySelector(next);
    const slides = document.querySelectorAll(slide);
    const totaltBtn = document.querySelector(totalCount);
    const currentBtn = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;
    const slider = document.querySelector(container);

    let count = 1;
    let offset = 0;
    if (slides.length < 10) {
        totaltBtn.textContent = `0${slides.length}`;
        currentBtn.textContent = `0${count}`;
    } else {
        totaltBtn.textContent = slides.length;
        currentBtn.textContent = count;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    slider.style.position = 'relative';
    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none; 
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNonDig(e) {
        return +e.replace(/\D/g, '');
    }
    Next.addEventListener('click', () => {
        if (offset == deleteNonDig(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNonDig(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (count == slides.length) {
            count = 1;
        } else {
            count++;
        }
        if (slides.length < 10) {
            currentBtn.textContent = `0${count}`;
        } else {
            currentBtn.textContent = count;
        }
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[count - 1].style.opacity = 1;

    });
    Prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNonDig(width) * (slides.length - 1);
        } else {
            offset -= deleteNonDig(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (count == 1) {
            count = slides.length;
        } else {
            count--;
        }
        if (slides.length < 10) {
            currentBtn.textContent = `0${count}`;
        } else {
            currentBtn.textContent = count;
        }
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[count - 1].style.opacity = 1;
    });
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slidesTo = e.target.getAttribute('data-slide-to');
            count = slidesTo;
            offset = deleteNonDig(width) * (slidesTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[count - 1].style.opacity = 1;
            if (slides.length < 10) {
                currentBtn.textContent = `0${count}`;
            } else {
                currentBtn.textContent = count;
            }
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Tabs() {
    //табы
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => { //табы убираем видимость
            item.style.display = "none";
            item.classList.add('fade');
        });
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        }); //убираем активность класса
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabsContent[i].classList.add("fade");
        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) { //проверям есть ли нужный класс у элемента
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id,deadline){

    //create a time difference
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), //получаем милисекунды в конечном времени
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'minutes': minutes,
            'hours': hours,
            'seconds': seconds
        };
    }

    function Getzero(num) {
        if (num >= 0 && num <= 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateClock, 1000);
        updateClock(); //fix bag flicker

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = Getzero(t.days);
            hours.innerHTML = Getzero(t.hours);
            minutes.innerHTML = Getzero(t.minutes);
            seconds.innerHTML = Getzero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
            }
        }
    }
    setClock(id, deadline);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./js/modules/modals.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");








window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer','2020-12-04');
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        next: '.offer__slider-next',
        prev: '.offer__slider-prev',
        slide: ".offer__slide",
        totalCount: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map