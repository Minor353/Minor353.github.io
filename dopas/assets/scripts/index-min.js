!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n(1)(),n(2)(),n(3)(),n(4)()},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelector(".nav_list"),e=document.querySelector(".nav_burger"),n=document.querySelector(".nav_cross");e.addEventListener("click",(function(){t.classList.add("nav_list--active")})),n.addEventListener("click",(function(){t.classList.remove("nav_list--active")}))}},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelectorAll(".advertising-contact_item-title"),e=document.querySelectorAll(".advertising-contact_list-item");if(t[0]){e[0].classList.add("advertising-contact_list-item--active");for(var n=function(n){t[n].addEventListener("click",(function(){for(var i=0;i<t.length;i++)e[i].classList.remove("advertising-contact_list-item--active");e[n].classList.add("advertising-contact_list-item--active")}))},i=0;i<t.length;i++)n(i)}}},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelectorAll(".international-card_list-item"),e=document.querySelectorAll(".international-card_item-popup-cross");if(t[0])for(var n=function(n){t[n].addEventListener("click",(function(){for(var e=0;e<t.length;e++)t[e].classList.remove("international-card_list-item--active");t[n].classList.add("international-card_list-item--active")})),e[n].addEventListener("click",(function(e){e.stopPropagation(),t[n].classList.remove("international-card_list-item--active")}))},i=0;i<t.length;i++)n(i)}},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelectorAll(".news_list-item");if(t[0])for(var e=function(e){t[e].addEventListener("click",(function(){for(var n=0;n<t.length;n++)t[n].classList.remove("news_list-item--active");t[e].classList.add("news_list-item--active")}))},n=0;n<t.length;n++)e(n)}}]);