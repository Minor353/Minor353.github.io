const parent = document.querySelector("body"),
  item1 = document.querySelector(".index-img__layer-1"),
  item2 = document.querySelector(".index-img__layer-2");

var center = {
  x: parent.offsetWidth / 2,
  y: parent.offsetHeight / 2
};

parent.onmousemove = function (event) {
  item1.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 30) + 'px, ' +
    Math.round((center.y - event.pageY) / 40) + 'px, 0);');

  item2.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 45) + 'px, ' +
    Math.round((center.y - event.pageY) / 35) + 'px, 0);');

}









/************************************************/

const timerScriptTriger = function () {
  var duration = {
      d: 1,
      h: 4,
      m: 1,
      s: 60
    },
    sf = 120,
    maxD = 2,
    maxH = 24,
    maxM = 60,
    maxS = 60;

  setInterval(function () {
    $('.d').html(duration.d);
    $('.h').html(duration.h);
    $('.m').html(duration.m)
      .attr('data-t', duration.m - 1);
    $('.s').html(duration.s)
      .attr('data-t', duration.s - 1);
    duration.s--;
    $('.s').addClass('flip');
    $('.m').removeClass('flip');
    $('.id .circle').css('stroke-dashoffset', sf - (duration.d * (sf / maxD)));
    $('.ih .circle').css('stroke-dashoffset', sf - (duration.h * (sf / maxH)));
    $('.im .circle').css('stroke-dashoffset', sf - (duration.m * (sf / maxM)));
    $('.is .circle').css('stroke-dashoffset', sf - (duration.s * (sf / maxS)));
    if (duration.s === 58) {
      $('.m').addClass('flip');
    }
    if (duration.s === 0) {
      duration.m--;
      duration.s = 59;
      if (duration.m === 0) {
        duration.h--;
        duration.m = 59
      }
    }
  }, 1000);
}



const btnTriger = document.querySelector('.trigerTimer');
const wrapTimer = document.querySelector('.timer-wrapp');
const itputField = document.querySelector('.input-field');


btnTriger.addEventListener('click', function (e) {
  e.preventDefault();
  if (itputField.value == '25епт') {
    wrapTimer.classList.add('timer-wrapp--active');
    timerScriptTriger();
  }

})