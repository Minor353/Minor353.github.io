!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";$(".services-section")&&$(".services-section").each((function(){var e=$(this);e.find(".services-section__box-item").not(":first").hide(),e.find(".services-section__tabs-item").click((function(){e.find(".services-section__tabs-item").removeClass("active").eq($(this).index()).addClass("active"),e.find(".services-section__box-item").hide().eq($(this).index()).fadeIn()})).eq(0).addClass("active")}));var i=document.querySelectorAll(".section-box"),o=(document.querySelectorAll(".pagination__item"),null);function r(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}window.onscroll=function(){!function(){function e(e){e.dataset.idtitle!==o&&(document.querySelectorAll(".pagination__item").forEach((function(e){e.classList.remove("active")})),document.getElementById(e.dataset.idtitle).classList.add("active"),o=e.dataset.idtitle)}window.pageYOffset<r(i[0]).top?e(i[0]):window.pageYOffset+window.innerHeight===document.body.offsetHeight?e(i[i.length-1]):i.forEach((function(t){var n=r(t).top;window.pageYOffset>n-150&&e(t)}))}(),self.pageYOffset>$(".main-section").height()/2?$(".pagination").addClass("dark"):$(".pagination").removeClass("dark"),self.pageYOffset>300?$("header").addClass("fixed"):$("header").removeClass("fixed"),self.pageYOffset>1080?$("header").addClass("show"):$("header").removeClass("show")}}]);