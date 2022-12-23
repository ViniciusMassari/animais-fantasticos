/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var o=n(698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var r=e&&e.prototype instanceof p?e:p,i=Object.create(r.prototype),s=new O(o||[]);return a(i,"_invoke",{value:E(t,n,s)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function p(){}function y(){}function m(){}var g={};h(g,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&i.call(w,u)&&(g=w);var k=m.prototype=p.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function n(r,a,s,u){var c=v(t[r],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==o(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var r;a(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function E(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=v(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}function x(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=v(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return y.prototype=m,a(k,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=h(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},L(M.prototype),h(M.prototype,c,(function(){return this})),e.AsyncIterator=M,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new M(f(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),h(k,l,"Generator"),h(k,u,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),u=i.call(r,"finallyLoc");if(s&&u){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var o=n(61)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,a=void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===o(a)?a:String(a)),r)}var i,a}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){function n(t){var o,r;e(this,n),this.sections=document.querySelectorAll(t),this.halfWindow=.6*window.innerHeight,this.checkDistance=(o=this.checkDistance.bind(this),50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r&&clearTimeout(r),r=setTimeout((function(){o.apply(void 0,e),r=null}),50)})}return i(n,[{key:"getDistance",value:function(){var e,n=this;this.distance=(e=this.sections,function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-n.halfWindow)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),n}(),s=function(){function t(n,o){e(this,t),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return i(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),t}(),u=function(){function t(n,o){e(this,t),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}return i(t,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){return t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),t}(),c=function(){function t(n){e(this,t),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return i(t,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),t}(),l=function(){function t(n,o,r){e(this,t),this.openModal=document.querySelector(n),this.closeModal=document.querySelector(o),this.modalContainer=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickOutsideModal=this.clickOutsideModal.bind(this)}return i(t,[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutsideModal",value:function(t){t.target===this.modalContainer&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.openModal.addEventListener("click",this.eventToggleModal),this.closeModal.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.clickOutsideModal)}},{key:"init",value:function(){return this.modalContainer&&this.openModal&&this.closeModal&&this.addModalEvent(),this}}]),t}(),h=function(){function t(n){e(this,t),this.toolTips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return i(t,[{key:"onMouseMove",value:function(t){var e=t.pageY,n=t.pageX;this.toolTipBox.style.top="".concat(e+20,"px"),n+240>window.innerWidth?this.toolTipBox.style.left="".concat(n-190,"px"):this.toolTipBox.style.left="".concat(n+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.toolTipBox.remove(),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mouseleave",this.onMouseLeave)}},{key:"createToolTipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("toolTip"),e.innerText=n,document.body.appendChild(e),this.toolTipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createToolTipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.toolTips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.toolTips.length&&this.addTooltipsEvent(),this}}]),t}();function f(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){return o.addEventListener(t,i)}))})),t.setAttribute(r,""))}var v=function(){function t(n,o){e(this,t),this.dropDownMenus=document.querySelectorAll(n),this.events=void 0===o?["touchstart","click"]:o,this.activeClass="ativo",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)}return i(t,[{key:"activeDropDownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),f(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addEventDropDownMenu",value:function(){var t=this;this.dropDownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropDownMenu)}))}))}},{key:"init",value:function(){return this.dropDownMenus.length&&this.addEventDropDownMenu(),this}}]),t}(),d=function(){function t(n,o,r){e(this,t),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(o),this.activeClass="ativo",this.events=void 0===r?["click","touschstart"]:r,this.openMenu=this.openMenu.bind(this),this.init()}return i(t,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),f(this.menuList,this.events,(function(){t.menuButton.classList.remove(t.activeClass),t.menuList.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){return t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.addMenuMobileEvents(),this}}]),t}(),p=function(){function t(n,o){e(this,t),this.operating=document.querySelector(n),this.activeClass=o}return i(t,[{key:"operatingData",value:function(){this.daysWeek=this.operating.dataset.semana.split(",").map(Number),this.hoursWeek=this.operating.dataset.horario.split(",").map(Number)}},{key:"dataNow",value:function(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.hourNow=this.dateNow.getUTCHours()-3}},{key:"isOpen",value:function(){var t=-1!==this.daysWeek.indexOf(this.dayNow),e=this.hourNow>=this.hoursWeek[0]&&this.hourNow<this.hoursWeek[1];return t&&e}},{key:"activeOpen",value:function(){this.isOpen()&&this.operating.classList.add(this.activeClass)}},{key:"init",value:function(){return this.operating&&(this.operatingData(),this.dataNow(),this.activeOpen()),this}}]),t}();function y(t,e,n,o,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(o,r)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){y(i,o,r,a,s,"next",t)}function s(t){y(i,o,r,a,s,"throw",t)}a(void 0)}))}}var g=n(687),b=n.n(g),w=function(){function t(n,o,r){e(this,t),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(o),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}return i(t,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementNumber(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.observerTarget&&this.numeros.length&&this.addMutationObserver(),this}}],[{key:"incrementNumber",value:function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),1e3*Math.random())}}]),t}();new s("[data-menu='suave'] a[href^='#']").init(),new c('[data-anime="accordion"] dt').init(),new u('[data-tab="menu"] li','[data-tab="content"] section').init(),new l("[data-modal='abrir']","[data-modal='fechar']","[data-modal='container']").init(),new a("[data-anime='scroll']").init(),new h("[data-tooltip]").init(),new v("[data-dropdown]").init(),new d("[data-menu='button']","[data-menu='list']").init(),new p("[data-semana]","ativo").init(),function(t,e){var n=document.querySelector(".numeros-grid");function o(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3> <span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function r(){new w("[data-numero]",".numeros","ativo").init()}function i(){return(i=m(b().mark((function e(){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){return o(t)})),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}("./animais-api.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){return console.log(Error(t))}))})()})();
