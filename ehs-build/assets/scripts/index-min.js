/**Табы на главной */
if ($('.services-section')) {
    $('.services-section').each(function () {
        let ths = $(this);
        ths.find('.services-section__box-item').not(':first').hide();
        ths.find('.services-section__tabs-item').click(function () {
            ths.find('.services-section__tabs-item').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.services-section__box-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });
}


/********************Маркер секции*******************************/
const articles = document.querySelectorAll('.section-box');
const articleTitles = document.querySelectorAll('.pagination__item');
let activeArticleId = null;
let isBeingAnimated = false;


function getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function setArticleActive() {
    function setActive(artcl) {
        if (artcl.dataset.idtitle !== activeArticleId) {
            let allTitles = document.querySelectorAll('.pagination__item');
            allTitles.forEach((title) => {
                title.classList.remove('active');
            });
            document.getElementById(artcl.dataset.idtitle).classList.add('active');
            activeArticleId = artcl.dataset.idtitle;
        }
    }

    if (window.pageYOffset < getCoords(articles[0]).top) {
        setActive(articles[0]);
    } else if (window.pageYOffset + window.innerHeight === document.body.offsetHeight) {
        setActive(articles[articles.length - 1]);
    } else {
        articles.forEach((article) => {
            const elemTop = getCoords(article).top;
            if (window.pageYOffset > elemTop - 150) {
                setActive(article);
            }
        });
    }
}
/***************/


/************Ресайз сетки******************** */
    let gridWidth = $('.wrapper').width() + 2;
    $('.decor-grid').css( "width", gridWidth );

$( window ).resize(function() {
    let gridWidth = $('.wrapper').width() + 2;
    $('.decor-grid').css( "width", gridWidth );
});
/*************************** */


/***************События на скроле*******************/
window.onscroll = () => {
    if (articles[0]) {
        setArticleActive();
    }


    if (self.pageYOffset > $('.main-section').height() / 2) {
        $('.pagination').addClass('dark');
    } else {
        $('.pagination').removeClass('dark');
    }

    if (self.pageYOffset > 300) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }


    if (self.pageYOffset > 1080) {
        $('header').addClass('show');
    } else {
        $('header').removeClass('show');
    }


    /**************Фиксация текста в сайдбаре*****************/
    $('.aside-img').css( 'margin-top', self.pageYOffset);

};


/***********Попап в Our team**********/
if ($('.about-popups')) {
    $('.js-team-popup').click(function (e) {
        e.preventDefault();
        $('.about-popups').addClass('active');
    });

    $('.about-popups__cross').click(function (e) {
        $('.about-popups').removeClass('active');
    });

    $('.about-popups').on('touchstart click', function (e) {
        if ($(e.target).parents().filter('.about-popups:visible').length != 1) {
            $('.about-popups').removeClass('active');
        }
    });
}


/***********Попап Request**********/
if ($('.proposal-popup')) {
    $('.js-request-popup').click(function (e) {
        e.preventDefault();
        $('.proposal-popup').addClass('active');
    });


    $('.proposal-popup').on('touchstart click', function (e) {
        if ($(e.target).parents().filter('.proposal-popup:visible').length != 1) {
            $('.proposal-popup').removeClass('active');
        }
    });
}

/***********Попап cv**********/
if ($('.cv-popup')) {
    $('.js-cv-popup').click(function (e) {
        e.preventDefault();
        $('.cv-popup').addClass('active');
    });


    $('.cv-popup').on('touchstart click', function (e) {
        if ($(e.target).parents().filter('.cv-popup:visible').length != 1) {
            $('.cv-popup').removeClass('active');
        }
    });
}

/**********Добавление имени файлов в форме***************/
$('.cv-popup__upload-btn').click(function () {
    $('.cv-popup__upload-input').change(function () {
        var filename = $('.cv-popup__upload-input').val();
        if (filename.substring(3, 11) == 'fakepath') {
            filename = filename.substring(12);
        }
        $('.cv-popup__upload-text').html(filename);
    });
});

$('.proposal-popup__upload-btn').click(function () {
    $('.proposal-popup__upload-input').change(function () {
        var filename = $('.proposal-popup__upload-input').val();
        if (filename.substring(3, 11) == 'fakepath') {
            filename = filename.substring(12);
        }
        $('.proposal-popup__upload-text').html(filename);
    });
});
/*************************************************************/


/********Слайдер в проекте*******/
$('.project-slide ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.project-box__slider-nav',
    fade: true,
    cssEase: 'linear'
});
$('.project-box__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project-slide ',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});



/************видео*************/
var video;

window.onload = function() {
	video = document.querySelector('.about-video__box video');
};

function play() {
    video.play();
}


$('.about-video__play').on('click', function() {
    play();
    $('.about-video__banner').addClass('play');
});




/**************Бургер******************/
$('.burger').click(function (e) {
    e.preventDefault();
    $('.nav').addClass('active');
});

$('.nav__cross').click(function (e) {
    e.preventDefault();
    $('.nav').removeClass('active');
});

$('.nav').on('touchstart click', function (e) {
    if ($(e.target).parents().filter('.nav:visible').length != 1) {
        $('.nav').removeClass('active');
    }
});