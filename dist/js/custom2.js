if ($('.js--step-items').length) {
  $('.js--step-items').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: 'unslick'
      }
    ]
  });
}

if ($('.js--case-card__materials-items').length) {
  $('.js--case-card__materials-items').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    mobileFirst: true,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: 'unslick'
      }
    ]
  });
}

if ($('.js-styled-search').length) {
  $('.js-styled-search').styler({
    selectPlaceholder: 'Выбрать',
    selectSearch: true,
    selectSearchPlaceholder: 'Введите город',
    onSelectOpened: function () {
      $(".jq-selectbox ul").mCustomScrollbar({
        theme: "dark-thin",
        autoExpandScrollbar: true,
        advanced: {
          autoExpandHorizontalScroll: true
        }
      });
    }
  });
};

if ($('.calc-data__question').length) {
  $('.calc-data__question').click(function (e, index) {
    let questionBlock = $(this).index('.calc-data__question');
    $('.calc-data__question-block').removeClass('active');
    $('.calc-data__question-block').eq(questionBlock).addClass('active');
    if (viewport().width < 767) {
      $("body").addClass('blur-bg no-scroll');
    }
    
  });
  $('.calc-data__question-block-close').click(function () {
    $('.calc-data__question-block').removeClass('active');
    $("body").removeClass('blur-bg no-scroll');
  });
};

if ($('.cases-top-bar__show').length) {
  $('.show-block').click(function () {
    $('.cases-top-bar__show li').removeClass('active');
    $(this).addClass('active');
    $('.cases-items').addClass('hide');
    $('.card-items__block-type').removeClass('hide');
  });
  $('.show-list').click(function () {
    $('.cases-top-bar__show li').removeClass('active');
    $(this).addClass('active');
    $('.cases-items').addClass('hide');
    $('.cases-items__list-type').removeClass('hide');
  });
};

if ($('.tabs-menu').length) {
  $('.show-bar .tabs-menu li').click(function (e) {
    e.preventDefault();
    $('.show-bar .tabs-menu li').removeClass('active');
    $(this).addClass('active');
  });
  $('.cases-map__filter .tabs-menu li').click(function (e) {
    e.preventDefault();
    $('.cases-map__filter .tabs-menu li').removeClass('active');
    $(this).addClass('active');
  });

}

/* tabs*/
$('.case-card__section-materials li a').click(function () {
  $('.section-top-bar .tabs-menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.tab-cont').addClass('hide-tab');
  var id = $(this).attr('href');
  $(id).removeClass('hide-tab');
  return false;
});

$('.tabs-menu_side li a').click(function () {
  $('.tabs-menu_side li').removeClass('active');
  $(this).parent().addClass('active');
  $('.catalog-filter-wrap').addClass('hide-tab');
  var id = $(this).attr('href');
  $(id).removeClass('hide-tab');
  return false;
});

$('.questions-tabs li a').click(function () {
  $('.questions-tabs li').removeClass('active');
  $(this).parent().addClass('active');
  $('.questions-tab').addClass('hide-tab');
  var id = $(this).attr('href');
  $(id).removeClass('hide-tab');
  return false;
});

/* tabs*/

if ($('.calculator-table__arrow').length) {
  $('.calculator-table__arrow').click(function () {
    $(this).toggleClass('active');
    $(this).parent().parent().find('.calc-table__mob-cont').toggleClass('active');
  });
}


/* calendar */

$("#calc-datepicker").datepicker({
  firstDay: 1,
  dateFormat: "dd.mm.yy",
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  onSelect: function (date) {
    $('.box-field__date').addClass('active');
  }
});

/* calendar */


$('.js--link-icon').click(function () {
  $("body").addClass('blur-bg');
  $('.mask-tablet').addClass('active');
  $('.calc-popup').addClass('show-popup');
  if ($(document).height() > $(window).height()) {
    var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
    $('html').addClass('noscroll').css('top', -scrollTop);
  }
  return false;
});
$('.js-calc-close').click(function () {
  $("body").removeClass('noscroll');
  $("html").removeClass('noscroll');
  $("body").removeClass('blur-bg');
  $('.mask-tablet').removeClass('active');
  $('.calc-popup').removeClass('show-popup');
  var scrollTop = parseInt($('html').css('top'));
  $('html').removeClass('noscroll');
  $('html,body').scrollTop(-scrollTop);
  return false;
});

$('.services-descr__link').click(function (e) {
  e.preventDefault();
  $(this).parent().find('.services-descr__info-decision').css('display', 'block');
  $(this).css('display', 'none');
});

// about page acc

$('.js--principle-block__title').click(function (e) {
  $(this).parent().siblings().removeClass('active');
  $(this).parent().siblings().find('.principle-block__info').slideUp();
  $(this).parent().toggleClass('active');
  $(this).parent().find('.principle-block__info').slideToggle();
  return false;
});

$('.js--vacancies-block__title').click(function (e) {
  var togggleBtn = $(this).find('.vacancies-block__btn');
  if (togggleBtn.text() == '-') {
    $('.vacancies-block__btn').text('+');
    togggleBtn.text('+');
    $('.vacancies-block__info').slideUp();
  } else {
    $('.vacancies-block__btn').text('+');
    togggleBtn.text('-');
    $('.vacancies-block__info').slideUp();
    $(this).parent().find('.vacancies-block__info').slideDown();
  }
});

$('.js--main-categories-list__item').click(function (e) {
  $(this).parent().toggleClass('active');
  $(this).parent().find('.main-categories-list__submenu').toggleClass('active');
  return false;
});

$('.main-categories-list__type').click(function (e) {
  $(this).parent().toggleClass('active');
  $(this).toggleClass('active');
  return false;
});

$('.main-categories-list-dropdown-back').click(function (e) {
  $('.main-categories-list-dropdown').css('display', 'none');
  return false;
});

$('.main-categories-list__drop').click(function (e) {
  $(this).find('.main-categories-list-dropdown').css('display', 'block');
  return false;
});

if ($('.js--related-items').length) {
  $('.js--related-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<span class='slick-prev btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
    nextArrow: "<span class='slick-next btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
};

if ($('.js--quality-items').length) {
  $('.js--quality-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<span class='slick-prev btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
    nextArrow: "<span class='slick-next btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
};

if ($('.js--sportMain-info__slider').length) {
  $('.js--sportMain-info__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<span class='slick-prev btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
    nextArrow: "<span class='slick-next btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }]
  });
};

$('.finding-form__btn').click(function (e) {
  $('.finding-form-step1').css('display', 'block');
  $('.finding-form__overlay').css('display', 'block');
  if (viewport().width < 767) {
    $('body').addClass('no-scroll blur-bg');
  }

  return false;
});

$('.finding-form__close').click(function (e) {
  $('.finding-form-step').css('display', 'none');
  $('.finding-form__overlay').css('display', 'none');
  $('body').removeClass('no-scroll blur-bg');
  return false;
});

if ($('.js--filter-popup').length) {
  $('.js--filter-btn').click(function (e) {
    e.preventDefault();
    $('.js--filter-popup').addClass('filter-popup_active');
  });

  $('.filter-popup__cross').click(function () {
    $('.js--filter-popup').removeClass('filter-popup_active');
  });

  $('.list-radio__btn-back').click(function (e) {
    e.preventDefault();
    $('.js--filter-popup').removeClass('filter-popup_active');
  });
};


$('.catalog-search-mob .search__icon').click(function (e) {
  $(this).parent().addClass('active');
  return false;
});

$('.catalog-search-mob__close').click(function (e) {
  $('.catalog-search-mob').removeClass('active');
  return false;
});

if ($('.tabs-menu-anchor').length) {
  $(function () {
    var $window = $(window);
    var $tabs = $(".tabs-menu-anchor");
    var $tabsTop = $tabs.offset().top;

    $window.scroll(function (event) {
      var $scrollTop = $window.scrollTop();
      if ($scrollTop >= $tabsTop) {
        $tabs.addClass("tabs-menu-anchor__fixed");
      } else {
        $tabs.removeClass("tabs-menu-anchor__fixed");
      }
    });
  });

  var topMenu = $(".tabs-menu-anchor"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind to scroll
  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
  });
};

if ($('.header-nav__drop').length) {
  $('.header-nav__drop').hover(
    function(){ $('body').addClass('no-scroll') },
    function(){ $('body').removeClass('no-scroll') }
  )
};


// if ($('.cases-item-info').length) {
//   $('.cases-item-info').mCustomScrollbar({
//     axis:"x"
//   });
// };