if ($('.js--step-items').length && $(window).width() <= 1023) {
    $('.js--step-items').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }			
        ]
    });
}

if ($('.js--case-card__materials-items').length && $(window).width() <= 1023) {
    $('.js--case-card__materials-items').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
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
}

if ($('.calc-data__question').length) {
  $('.calc-data__question').click(function() {
    $('.calc-data__question-block').removeClass('active');
    $(this).parent().parent().find('.calc-data__question-block').toggleClass('active');
  });
  $('.calc-data__question-block-close').click(function() {
    $(this).parent().removeClass('active');
  });
}