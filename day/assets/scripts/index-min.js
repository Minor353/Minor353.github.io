!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r(1)(),r(2)(),r(3)()},function(t,e,r){"use strict";t.exports=function(){var t=0;window.onscroll=function(r){var n=window.pageYOffset;t>n?(e.classList.add("header--scroll-active"),e.classList.remove("header--active")):t<n&&(e.classList.remove("header--scroll-active"),e.classList.remove("header--active"));0==n&&(e.classList.add("header--active"),e.classList.remove("header--scroll-active"));t=n};var e=document.querySelector(".header")}},function(t,e,r){"use strict";t.exports=function(){var t=document.querySelector("body"),e=document.querySelector(".present_text-left"),r=document.querySelector(".present_text--right"),n=document.querySelector(".present_block-left"),i=document.querySelector(".present_block--right"),a=t.offsetWidth/2,o=t.offsetHeight/12;t.onmousemove=function(t){e.setAttribute("style","transform: translate3d("+Math.round((a-t.pageX)/40)+"px, "+Math.round((o-t.pageY)/40)+"px, 0);"),r.setAttribute("style","transform: translate3d("+Math.round((a-t.pageX)/40)+"px, "+Math.round((o-t.pageY)/40)+"px, 0);"),n.setAttribute("style","transform: translate3d("+Math.round((a-t.pageX)/20)+"px, "+Math.round((o-t.pageY)/20)+"px, 0);"),i.setAttribute("style","transform: translate3d("+Math.round((a-t.pageX)/20)+"px, "+Math.round((o-t.pageY)/20)+"px, 0);")}}},function(t,e,r){"use strict";t.exports=function(){var t=document.querySelector("canvas");t.width=window.innerWidth,t.height=window.innerHeight;var e=t.getContext("2d");function r(t,r,n,i){var a=this;this.x=t,this.y=r,this.width=n,this.speed=i,this.color="#fff",this.draw=function(){e.fillStyle=this.color,e.fillRect(this.x,this.y,n,n)},this.update=function(){a.x+a.width>innerWidth&&(a.x=0),a.x+=a.speed,a.draw()}}window.addEventListener("resize",(function(){t.width=window.innerWidth,t.height=window.innerHeight,a()}));var n={nearStar:{width:3,speed:.2},midStar:{width:2,speed:.1},farStar:{width:1,speed:.025}},i=[];function a(){i=[];for(var t=0;t<50;++t){var e=Math.random()*(innerWidth-n.nearStar.width),a=Math.random()*(innerHeight-n.nearStar.width);i.push(new r(e,a,n.nearStar.width,n.nearStar.speed))}for(var o=0;o<100;++o){var d=Math.random()*(innerWidth-n.midStar.width),s=Math.random()*(innerHeight-n.midStar.width);i.push(new r(d,s,n.midStar.width,n.midStar.speed))}for(var u=0;u<350;++u){var c=Math.random()*(innerWidth-n.farStar.width),h=Math.random()*(innerHeight-n.farStar.width);i.push(new r(c,h,n.farStar.width,n.farStar.speed))}}a(),function t(){requestAnimationFrame(t),e.clearRect(0,0,innerWidth,innerHeight);var r=!0,n=!1,a=void 0;try{for(var o,d=i[Symbol.iterator]();!(r=(o=d.next()).done);r=!0){o.value.update()}}catch(t){n=!0,a=t}finally{try{!r&&d.return&&d.return()}finally{if(n)throw a}}}()}}]);