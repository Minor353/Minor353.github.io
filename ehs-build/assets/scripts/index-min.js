!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";$(".services-section")&&$(".services-section").each((function(){var e=$(this);e.find(".services-section__box-item").not(":first").hide(),e.find(".services-section__tabs-item").click((function(){e.find(".services-section__tabs-item").removeClass("active").eq($(this).index()).addClass("active"),e.find(".services-section__box-item").hide().eq($(this).index()).fadeIn()})).eq(0).addClass("active")}));var i=document.querySelectorAll(".section-box"),n=(document.querySelectorAll(".pagination__item"),null);function a(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}var s,p=$(".wrapper").width()+2;$(".decor-grid").css("width",p),$(window).resize((function(){var e=$(".wrapper").width()+2;$(".decor-grid").css("width",e)})),window.onscroll=function(){i[0]&&function(){function e(e){e.dataset.idtitle!==n&&(document.querySelectorAll(".pagination__item").forEach((function(e){e.classList.remove("active")})),document.getElementById(e.dataset.idtitle).classList.add("active"),n=e.dataset.idtitle)}window.pageYOffset<a(i[0]).top?e(i[0]):window.pageYOffset+window.innerHeight===document.body.offsetHeight?e(i[i.length-1]):i.forEach((function(t){var o=a(t).top;window.pageYOffset>o-150&&e(t)}))}(),self.pageYOffset>$(".main-section").height()/2?$(".pagination").addClass("dark"):$(".pagination").removeClass("dark"),self.pageYOffset>300?$("header").addClass("fixed"):$("header").removeClass("fixed"),self.pageYOffset>1080?$("header").addClass("show"):$("header").removeClass("show"),$(".aside-img img").css("margin-top",self.pageYOffset)},$(".about-popups")&&($(".js-team-popup").click((function(e){e.preventDefault(),$(".about-popups").addClass("active")})),$(".about-popups__cross").click((function(e){$(".about-popups").removeClass("active")})),$(".about-popups").on("touchstart click",(function(e){1!=$(e.target).parents().filter(".about-popups:visible").length&&$(".about-popups").removeClass("active")}))),$(".proposal-popup")&&($(".js-request-popup").click((function(e){e.preventDefault(),$(".proposal-popup").addClass("active")})),$(".proposal-popup").on("touchstart click",(function(e){1!=$(e.target).parents().filter(".proposal-popup:visible").length&&$(".proposal-popup").removeClass("active")}))),$(".cv-popup")&&($(".js-cv-popup").click((function(e){e.preventDefault(),$(".cv-popup").addClass("active")})),$(".cv-popup").on("touchstart click",(function(e){1!=$(e.target).parents().filter(".cv-popup:visible").length&&$(".cv-popup").removeClass("active")}))),$(".cv-popup__upload-btn").click((function(){$(".cv-popup__upload-input").change((function(){var e=$(".cv-popup__upload-input").val();"fakepath"==e.substring(3,11)&&(e=e.substring(12)),$(".cv-popup__upload-text").html(e)}))})),$(".proposal-popup__upload-btn").click((function(){$(".proposal-popup__upload-input").change((function(){var e=$(".proposal-popup__upload-input").val();"fakepath"==e.substring(3,11)&&(e=e.substring(12)),$(".proposal-popup__upload-text").html(e)}))})),$(".project-slide ").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".project-box__slider-nav",fade:!0,cssEase:"linear"}),$(".project-box__slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".project-slide ",dots:!1,arrows:!0,focusOnSelect:!0,responsive:[{breakpoint:440,settings:{slidesToShow:2,slidesToScroll:1}}]}),window.onload=function(){s=document.querySelector(".about-video__box video")},$(".about-video__play").on("click",(function(){s.play(),$(".about-video__banner").addClass("play")})),$(".burger").click((function(e){e.preventDefault(),$(".nav").addClass("active")})),$(".nav__cross").click((function(e){e.preventDefault(),$(".nav").removeClass("active")})),$(".nav").on("touchstart click",(function(e){1!=$(e.target).parents().filter(".nav:visible").length&&$(".nav").removeClass("active")}))}]);