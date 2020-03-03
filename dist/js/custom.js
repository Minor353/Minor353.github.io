$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
	$('.js-map').html('<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&mode=release&coordorder=latlong"></script>');
	setTimeout(function () {
		if ($('#map').length) {
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map', {
						center: [58.516977, 142.470694],
						zoom: 5.4
					}),
					myPlacemark = new ymaps.Placemark([58.451220, 136.138031], {
						hintContent: ''
					}, {
						iconLayout: 'default#image',
						iconImageHref: 'img/pin-1.png',
						iconImageSize: [20, 20],
						iconImageOffset: [-10, -10]
					});
				myPlacemark2 = new ymaps.Placemark([59.481273, 145.484152], {
					hintContent: ''
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'img/pin-2.png',
					iconImageSize: [57, 57],
					iconImageOffset: [-26, -26]
				});
				myPlacemark3 = new ymaps.Placemark([57.580142, 126.962810], {
					hintContent: ''
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'img/pin-3.png',
					iconImageSize: [57, 57],
					iconImageOffset: [-26, -26]
				});
				myPlacemark4 = new ymaps.Placemark([54.833154, 134.181425], {
					hintContent: ''
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'img/pin-4.png',
					iconImageSize: [57, 57],
					iconImageOffset: [-26, -26]
				});
				myMap.geoObjects
					.add(myPlacemark)
					.add(myPlacemark2)
					.add(myPlacemark3)
					.add(myPlacemark4)
				myMap.behaviors.disable('scrollZoom');
				if ($("body").hasClass("ios")) {
					myMap.behaviors.disable('multiTouch');
					myMap.behaviors.disable('drag');
				}
			});
		}
		/*map*/
	}, 1000);
});
/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */
$(function () {
	/* placeholder*/
	$('input, textarea').each(function () {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function () {
			$(this).attr('placeholder', '');
			$(this).addClass('sm-placeholder');
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);
			$(this).removeClass('sm-placeholder');
		});
	});
	/* placeholder*/
	/*input label animation*/
	$('.form-control').focus(function () {
		$(this).parents('.box-field').addClass('focused-field').removeClass('filled-field');
	});
	$('input, textarea').each(function () {
		var valField = $(this).val().length;
		if (valField >= 1) {
			$(this).parents('.box-field').addClass('focused-field');
		} else {
			$(this).parents('.box-field').removeClass('focused-field');
		};
	});
	$('.form-control').focusout(function () {
		var valField = $(this).val().length;
		if (valField >= 1) {
			$(this).parents('.box-field').addClass('focused-field').addClass('filled-field');
		} else {
			$(this).parents('.box-field').removeClass('focused-field');
		};
	});
	/*input label animation*/
	$('.button-nav').click(function () {
		$(this).toggleClass('active'),
			$('.main-nav-list').slideToggle();
		return false;
	});
	$('.js-search-full').click(function () {
		$('.search-full').addClass('show-popup');
		return false;
	});
	$('.js-search-close').click(function () {
		$('.search-full').removeClass('show-popup');
		return false;
	});

	$('.js-search-full-tags').click(function () {
		$('.search-full-tags').addClass('show-popup');
		return false;
	});
	$('.js-search-close-tags').click(function () {
		$('.search-full-tags').removeClass('show-popup');
		return false;
	});

	$('.js-main-nav').click(function () {
		$("body").addClass('blur-bg');
		$('.mask-tablet').addClass('active');
		$('.main-nav').addClass('show-popup');
		$('.main-nav-sport').removeClass('show-popup');
		if ($(document).height() > $(window).height()) {
			var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
			$('html').addClass('noscroll').css('top', -scrollTop);
		}
		return false;
	});
	$('.js-main-nav-sport').click(function () {
		$("body").addClass('blur-bg');
		$('.mask-tablet').addClass('active');
		$('.main-nav-sport').addClass('show-popup');
		if ($(document).height() > $(window).height()) {
			var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
			$('html').addClass('noscroll').css('top', -scrollTop);
		}
		return false;
	});
	$('.js-nav-close').click(function () {
		$("body").removeClass('noscroll');
		$("html").removeClass('noscroll');
		$("body").removeClass('blur-bg');
		$('.mask-tablet').removeClass('active');
		$('.main-nav').removeClass('show-popup');
		$('.main-nav-sport').removeClass('show-popup');
		var scrollTop = parseInt($('html').css('top'));
		$('html').removeClass('noscroll');
		$('html,body').scrollTop(-scrollTop);
		return false;
	});
	$('.mask-tablet').click(function () {
		$("body").removeClass('noscroll');
		$("html").removeClass('noscroll');
		$("body").removeClass('blur-bg');
		$('.mask-tablet').removeClass('active');
		$('.main-nav').removeClass('show-popup');
		$('.main-nav-sport').removeClass('show-popup');
		var scrollTop = parseInt($('html').css('top'));
		$('html').removeClass('noscroll');
		$('html,body').scrollTop(-scrollTop);
		return false;
	});




	/*pagination fullpage*/
	$('.js-next-setion').click(function () {
		fullpage_api.moveSectionDown();
	});
	$('.js-prev-setion').click(function () {
		fullpage_api.moveSectionUp();
	});
	/*pagination fullpage*/

	/*close fancubox popup*/
	$('.js-close-popup').click(function () {
		$('.fancybox-close').click();
		return false;
	});
	/*close fancubox popup*/
	/*counter product*/
	$('.counter__link_prev').click(function () {
		var $input = $(this).parents('.counter').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.counter__link_next').click(function () {
		var $input = $(this).parents('.counter').find('input');
		var count = parseInt($input.val()) + 1;
		count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
		$input.val(count);
		$input.change();
		return false;
	});
	/*counter product*/

	/**Open About block on page materials.html**/
	if ($('.about-block').length) {
		$('.link-more_read').click(function (e) {
			e.preventDefault();
			$('.about-block').toggleClass('about-block_active');
		})
	};
	/**^^Open About block on page materials.html^^**/

	/**Custom scroll on page materials.html**/
	if ($('.card-item-popup__content').length) {
		$('.card-item-popup__content').mCustomScrollbar();
	};
	/**^^Custom scroll on page materials.html^^**/




	/**open card info on page materials-card.html**/
	if ($('.card-popup-open-js').length) {
		$('.card-popup-open-js').click(function (e, index) {
			let cardBtnCount = $('.card-popup-open-js').index(this);
			e.preventDefault();
			$('.card-popup-js').eq(cardBtnCount).addClass('card-item-popup_active')
		});

		$('.card-item-popup__cross').click(function (e, index) {
			let cardBtnCount = $('.card-item-popup__cross').index(this);
			e.preventDefault();
			$('.card-popup-js').eq(cardBtnCount).removeClass('card-item-popup_active')
		});
	};
	/**^^open card info on page materials-card.html^^**/

	/**anchor scroll on page materials-card.html**/
	if ($('.tabs-menu-anchor').length) {
		$('.js-scroll-anchor').click(function () {
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);
			return false;
		});
	};
	/**^^anchor scroll info on page materials-card.html^^**/

	/**Tabs on page materials.html**/
	if ($('.card-list-tab').length) {
		for (let i = 0; i < $('.card-list-tab_wrap').length; i++) {
			$('.card-list-tab_wrap').eq(i).children('.card-list-tab').eq(0).addClass('active')
		}

		$('ul.tabs-menu').on('click', 'li:not(.active)', function (e) {
			e.preventDefault();
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.section-block').find('div.card-list-tab').removeClass('active').eq($(this).index()).addClass('active');
		})
	};
	/**Tabs on page materials-card.html**/


	/**Tabs on page faq.html**/
	if ($('.section-questions').length) {
		$('.section-questions').eq(0).addClass('section-questions_active')


		$('.content-faq .tabs-menu li').click(function (e, index) {

			for (let i = 0; i < $('.section-questions').length; i++) {
				$('.section-questions').eq(i).removeClass('section-questions_active')
			}

			let cardBtnCount = $('.content-faq .tabs-menu li').index(this);
			e.preventDefault();
			$('.section-questions').eq(cardBtnCount).addClass('section-questions_active')
		});
	};
	/**Tabs on page faq.html**/

	/**Custom scroll on page materials.html**/
	if ($('.tabs-menu_wrap').length) {
		$('.tabs-menu_wrap').mCustomScrollbar({
			autoHideScrollbar: true,
			axis: "x"
		});
	};

	/**^^Custom scroll on page materials.html^^**/

	/**item-added-popup on page materials-card.html**/
	if ($('.item-added-js').length) {
		$('.item-added-js').click(function (e) {
			e.preventDefault();
			$('.item-added').addClass('item-added_active');
		});

		$('.item-added-close-js').click(function (e) {
			e.preventDefault();
			$('.item-added').removeClass('item-added_active');
			$('.add-board').addClass('add-board_active');
		});
	};

	if ($('.checkout-open-js').length) {
		$('.checkout-open-js').click(function (e) {
			e.preventDefault();
			$('.item-added').removeClass('item-added_active');
			$('.checkout-board').addClass('checkout-board_active');
		});

		$('.next-board-js').click(function (e) {
			e.preventDefault();
			$('.checkout-second').removeClass('checkout-board_hidden');
			$('.checkout-first').addClass('checkout-board_hidden');

			$('.checkout-board__sections-title_first').removeClass('checkout-board__sections-title_active');
			$('.checkout-board__sections-title_second').addClass('checkout-board__sections-title_active');
		});

		$('.btn-back').click(function (e) {
			e.preventDefault();
			$('.checkout-second').addClass('checkout-board_hidden');
			$('.checkout-first').removeClass('checkout-board_hidden');

			$('.checkout-board__sections-title_first').addClass('checkout-board__sections-title_active');
			$('.checkout-board__sections-title_second').removeClass('checkout-board__sections-title_active');
		});


		$('.submit-board-js').click(function (e) {
			e.preventDefault();
			$('.checkout-second').addClass('checkout-board_hidden');
			$('.checkout-board__success').removeClass('checkout-board_hidden');

			$('.checkout-board__sections').addClass('checkout-board_hidden');
			$('.checkout-board__sections-title_first').addClass('checkout-board__sections-title_active');
			$('.checkout-board__sections-title_second').removeClass('checkout-board__sections-title_active');
		});

		$('.link-close-checkout-js').click(function (e) {
			e.preventDefault();
			$('.checkout-second').addClass('checkout-board_hidden');
			$('.checkout-board__success').addClass('checkout-board_hidden');
			$('.checkout-first').removeClass('checkout-board_hidden');
			$('.checkout-board').removeClass('checkout-board_active');

			$('.checkout-board__sections').removeClass('checkout-board_hidden');
			$('.checkout-board__sections-title_first').addClass('checkout-board__sections-title_active');
			$('.checkout-board__sections-title_second').removeClass('checkout-board__sections-title_active');
		});

	};
	/**item-added-popup on page materials-card.html**/

	/**fixed sidebar on page articles-single.html faq.html**/
	if ($('.side-block-fixed').length) {
		$(function () {
			var $window = $(window);
			var $sidebar = $(".side-block__wrap");
			var $sidebarTop = $sidebar.position().top;
			var $sidebarHeight = $sidebar.height();
			var $footer = $('footer');
			var $footerTop = $footer.position().top;

			$window.scroll(function (event) {
				$sidebar.addClass("side-block__wrap_fixed");
				var $scrollTop = $window.scrollTop();
				var $topPosition = Math.max(0, $sidebarTop - $scrollTop);

				if ($scrollTop + $sidebarHeight > $footerTop) {
					var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
				}

				$sidebar.css("top", ($topPosition));
			});
		});
	};
	/**fixed sidebar on page articles-single.html faq.html**/

	/**fixed sidebar form on page faq.html**/
	if ($('.side-block__form').length) {
		$(function () {
			var $window = $(window);
			var $sidebar = $(".side-block__form-wrap");
			var $sidebarTop = $sidebar.position().top;
			var $sidebarHeight = $sidebar.height();
			var $footer = $('footer');
			var $footerTop = $footer.position().top;

			$window.scroll(function (event) {
				$sidebar.addClass("side-block__form-wrap_fixed");
				var $scrollTop = $window.scrollTop();
				var $topPosition = Math.max(0, $sidebarTop - $scrollTop);

				if ($scrollTop + $sidebarHeight > $footerTop) {
					var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight - 150);
				}

				$sidebar.css("top", ($topPosition));
			});
		});
	};
	/**^^^fixed sidebar form on page faq.html^^^**/

	/**scroll adress on page contact.html**/
	if ($('.contacts-map__adress').length) {
		$('.contacts-map__adress').mCustomScrollbar({
			axis: "y"
		});

		$('.contacts-map__adress .contacts-item').mCustomScrollbar({
			axis: "y"
		});
	};
	/**^^^scroll adress on page contact.html^^^**/


	/**open adress on page contact.html**/
	if ($('.contacts-map__adress').length) {


		function windowSizeContact() {
			$('.content-contact .js-toggle-contacts-btn').off();
			$('.content-contact .contacts-item__cross').click(function (e) {
				$('.contacts-item__more a').text('Подробнее');
			})
			if ($(window).width() >= '1024') {
				$('.content-contact .js-toggle-contacts-btn').click(function (e) {
					e.preventDefault();
					e.stopPropagation();
					let btnInnerText = $(this).text();
					if (btnInnerText == 'Подробнее') {
						$(this).text('Свернуть');
					} else if (btnInnerText == 'Свернуть') {
						$(this).text('Подробнее');
					} else if (btnInnerText == '') {
						return false;
					}

					$(this).closest(".js-toggle-contacts-container").find(".js-toggle-contacts-content").slideToggle("slow", function () {
						if ($(this).closest(".js-toggle-contacts-container").hasClass("active"))
							$(this).closest(".js-toggle-contacts-container").removeClass("active");
						else $(this).closest(".js-toggle-contacts-container").addClass("active");
					});

					$('.contacts-item-mask').toggleClass('active');




				});

			} else if ($(window).width() < '1024') {

				$('.content-contact .js-toggle-contacts-btn').click(function (e) {
					e.preventDefault();
					e.stopPropagation();

					let btnInnerText = $(this).text();
					if (btnInnerText == 'Подробнее') {
						$(this).text('Свернуть');
					} else if (btnInnerText == 'Свернуть') {
						$(this).text('Подробнее');
					} else if (btnInnerText == '') {
						return false;
					}

					$('.contacts-item-mask').toggleClass('active');

					$(this).closest(".js-toggle-contacts-container").find(".js-toggle-contacts-content").slideToggle("slow", function () {
						if ($(this).closest(".js-toggle-contacts-container").hasClass("active"))
							$(this).closest(".js-toggle-contacts-container").removeClass("active");
						else $(this).closest(".js-toggle-contacts-container").addClass("active");
					});
				});

			};

		}
	}

	$(window).on('load resize', windowSizeContact);


	/**open adress on page contact.html**/


	/**category popup on page articles.html**/
	if ($('.articles-category__btn-js').length) {
		$('.articles-category__btn-js').click(function (e) {
			e.preventDefault();
			$('.articles-category__btn-js').toggleClass('active');
			$('.articles-category__wrap').toggleClass('articles-category__wrap_active');
			$('.articles-category__mask').addClass('articles-category__mask_active');
		});

		$('.category-close-js').click(function (e) {
			e.preventDefault();
			$('.articles-category__btn-js').removeClass('active');
			$('.articles-category__wrap').removeClass('articles-category__wrap_active');
			$('.articles-category__mask').removeClass('articles-category__mask_active');
		});

		function windowSize() {
			if ($(window).width() < '767') {
				$('.articles-category__list-scroll-js').mCustomScrollbar({
					axis: "y"
				});
			}
		}

		$(window).on('load resize', windowSize);
	};
	/**^^^category popup on page articles.html^^^**/

	/**more cards on page articles.html**/
	if ($('.btn-more-articles-js').length) {
		$('.btn-more-articles-js').click(function (e) {
			e.preventDefault();
			$('.articles-card-wrap_hidden').toggleClass('articles-card-wrap_hidden_active');
		});
	};
	/**^^^more cards on page articles.html^^^**/



	/**Custom scroll on checkout-board page materials-card.html**/
	if ($('.checkout-board__main_first').length) {
		$('.checkout-board__main_first').mCustomScrollbar();
	};
	/**^^Custom scroll on checkout-board page materials-card.html^^**/


	/**side-block fixed on page materials-card.html**/
	if ($('.side-block-fixed-js').length) {

		function windowSize() {
			if ($(window).width() > '1060') {
				var objToStick = $(".side-block-fixed-js");
				var topOfObjToStick = $(objToStick).offset().top;

				$(window).scroll(function () {
					var windowScroll = $(window).scrollTop();

					if (windowScroll > topOfObjToStick) {
						$(objToStick).addClass("side-block-fixed");
					} else {
						$(objToStick).removeClass("side-block-fixed");
					};
				});
			};
		};

		$(window).on('load resize', windowSize);

	};

	/**^^side-block fixed on page materials-card.html^^**/

	/**Fancybox video on page materials.html**/
	if ($('.content_materials .video-item__overlay').length) {
		$(".content_materials .video-item__overlay").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '70%',
			autoSize: false,
			smallBtn: true,
			iframe: {
				preload: false
			}
		});
	};
	/**^^Fancybox video on page materials.html^^**/

	/**Fancybox video on page articles.html**/
	if ($('.content-articles .video-item__overlay').length) {
		$(".content-articles .video-item__overlay").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '70%',
			autoSize: false,
			smallBtn: true,
			iframe: {
				preload: false
			}
		});
	};
	/**^^Fancybox video on page articles.html^^**/

	/**Styled form on page materials-card.html**/
	if ($('.side-block_styled').length) {
		$('.side-block_styled').styler();
		$('.quantity-box input[type="number"]').styler();
	};
	/**^^Styled form on page materials.html^^**/


	/**Fancybox video on page materials-card.html**/
	if ($('.content_materials-card .video-item__overlay').length) {
		$(".content_materials-card .video-item__overlay").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '70%',
			autoSize: false,
			smallBtn: true,
			iframe: {
				preload: false
			}
		});
	};
	/**^^Fancybox video on page materials-card.html^^**/

	/**Open filter on page materials.html**/
	if ($('.filter-popup').length) {
		$('.filter-btn').click(function (e) {
			e.preventDefault();
			$('.filter-popup').addClass('filter-popup_active');
		});

		$('.filter-popup__cross').click(function () {
			$('.filter-popup').removeClass('filter-popup_active');
		});

		$('.list-radio__btn-back').click(function (e) {
			e.preventDefault();
			$('.filter-popup').removeClass('filter-popup_active');
		});
	};
	/**^^Open filter on page materials.html^^**/


	/* components */
	if ($('.js-img').length) {
		var jsImg = $(".js-img");
		new LazyLoad(jsImg, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
	};
	if ($('.js-styled').length) {
		$('.js-styled').styler({
			selectPlaceholder: 'Выбрать',
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
	if ($('.js-scroll').length) {
		$(".js-scroll").mCustomScrollbar({
			axis: "y",
			theme: "dark-thin",
			autoExpandScrollbar: true,
			advanced: {
				autoExpandHorizontalScroll: true
			}
		});
	};
	if ($('.js-work-slider').length) {
		$('.js-work-slider').slick({
			dots: false,
			infinite: false,
			speed: 300,
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: "<span class='slick-prev btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
			nextArrow: "<span class='slick-next btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
		});
	};

	if ($('.js-reviews-slider').length) {
		$('.js-reviews-slider').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: "<span href='#' class='slick-prev btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
			nextArrow: "<span href='#' class='slick-next btn-slider'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
		});
	};
	if ($('.js-fancybox').length) {
		$('.js-fancybox').fancybox({
			margin: 0,
			padding: 0,
			beforeShow: function () {
				$("body").addClass('blur-bg');
			},
			afterClose: function () {
				$("body").removeClass('blur-bg');
			}
		});
	};

	if ($('.js-informer-list').length) {
		$('.js-informer-list').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: "<button class='slick-prev btn-slider-arr-sm'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#expand-right'></use></svg></button>",
			nextArrow: "<button class='slick-next btn-slider-arr-sm'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#expand-right'></use></svg></button>",
			responsive: [{
					breakpoint: 6000,
					settings: "unslick"
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				}
			]
		});
	};


	/*


	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	*/

	/* components */

});

var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	var wd = parseInt($(document).width() - parseInt($('.wrapper').width())) / 2;
	$('.works, .contacts, .reviews').css('padding-left', wd);



	if (viewport_wid <= 767) {
		if ($('.js-informer-list').length) {
			$('.js-informer-list').slick("getSlick").refresh();
		};

		if ($('.finding-form-step').length) {
			$('.finding-form-step').detach().insertAfter($('.content'));
		}
		if ($('.calc-data__question-block').length) {
			$('.calc-data__question-block').detach().insertAfter($('.content'));
		}
	}


}
$(window).bind('load', handler);
$(window).bind('resize', handler);


$(window).scroll(function () {
	var s = $(window).scrollTop(),
		d = $(document).height(),
		c = $(window).height();
	scrollPercent = (s / (d - c)) * 100;
	var position = scrollPercent;

	$(".js-progressbar").css('width', position + '%');

});

$(document).ready(function () {

	$('.js-toggle-btn').click(function (e) {
		e.preventDefault();
		$(this).closest(".js-toggle-container").find(".js-toggle-content").slideToggle("slow", function () {
			if ($(this).closest(".js-toggle-container").hasClass("active"))
				$(this).closest(".js-toggle-container").removeClass("active");
			else $(this).closest(".js-toggle-container").addClass("active");
		});
	});


	// slick

	$('.gallery-slider__main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		lazyLoad: 'ondemand',
		asNavFor: '.gallery-slider__preview',
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>"
	});

	$('.gallery-slider__preview').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		lazyLoad: 'ondemand',
		asNavFor: '.gallery-slider__main',
		touchThreshold: 30,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 767,
			settings: {}
		}]
	});

	$('.items-wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		lazyLoad: 'ondemand',
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>"

	});

	$('.items-wrapper-mod2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		infinite: true,
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
		responsive: [{
			breakpoint: 767,
			settings: {}
		}]
	});

	$('.items-wrapper-mod3').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		lazyLoad: 'ondemand',
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
		responsive: [{
			breakpoint: 767,
			settings: {}
		}]
	});

	$('.photo-items').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '20',
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
		responsive: [{
			breakpoint: 767,
			settings: {}
		}]
	});
});

/**Slider Video on page materials**/
$('.content_materials .items-wrapper').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 1.24,
				arrows: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1.10,
				arrows: false
			}
		}
	]
});

/**Foto slider page articles-single**/
$('.content-articles-single .photo-items').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '20',
	adaptiveHeight: true,
	infinite: true,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 1.25,
				arrows: false,
				infinite: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1.09,
				arrows: false,
				infinite: false
			}
		}
	]
});
/**^^^Foto slider page articles-single^^^**/

/**offers slider page articles-single**/
$('.content-articles-single .offer-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: true,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
		breakpoint: 1023,
		settings: {
			slidesToShow: 3.09,
			infinite: false
		}
	}, {
		breakpoint: 767,
		settings: {
			slidesToShow: 1.09,
			infinite: false,
			arrows: false
		}
	}]
});
/**^^^offers slider page articles-single^^^**/

/**interest slider page articles-single**/
$('.content-articles-single .article-section-interest-slide').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: true,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
		breakpoint: 767,
		settings: {
			slidesToShow: 1.09,
			infinite: false,
			arrows: false
		}
	}]
});
/**^^^interest slider page articles-single^^^**/

/**Slider card on page materials-card**/
$('.content_materials-card .items-wrapper-card-slide').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
		breakpoint: 1060,
		settings: {
			slidesToShow: 3.09,
		}
	}, {
		breakpoint: 760,
		settings: {
			slidesToShow: 1.09,
			arrows: false
		}
	}]
});

/**Slider Product cards on page materials.html**/
$('.content_materials .items-wrapper-mod2').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3.09,
				arrows: false
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2.24,
				arrows: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1.10,
				arrows: false,
				dots: true
			}
		}
	]
});

/**Slider Video on page materials-card.html**/
$('.content_materials-card .video-wrapper').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></a>",
	nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></a>",
	responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 1.24,
				arrows: false
			}
		},
		{
			breakpoint: 770,
			settings: {
				slidesToShow: 1.24,
				arrows: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1.10,
				arrows: false
			}
		}
	]
});

/**Slider Product cards on page materials-category.html**/
$('.content_materials-category .product-list').slick({
	slidesToShow: 1.07,
	arrows: false,
	dots: true,
	slidesToScroll: 1,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	mobileFirst: true,
	responsive: [{
		breakpoint: 500,
		settings: 'unslick'
	}]
});

/**Slider Documents cards on page materials-card.html**/
$('.content_materials-card .doc-card_wrap').slick({
	rows: 2,
	slidesToShow: 1,
	arrows: false,
	dots: true,
	slidesToScroll: 1,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	mobileFirst: true,
	responsive: [{
			breakpoint: 760,
			settings: {
				rows: 2,
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 1060,
			settings: 'unslick'
		}
	]
});

/**Services cards on page materials-card.html**/
$('.content_materials-card .step-item-list').slick({
	slidesToShow: 1.09,
	arrows: false,
	dots: false,
	slidesToScroll: 1,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	mobileFirst: true,
	responsive: [{
		breakpoint: 760,
		settings: {
			slidesToShow: 2.09,
			arrows: false,
			slidesToScroll: 2,
		}
	}, {
		breakpoint: 1060,
		settings: 'unslick'
	}]
});

$('.content_materials .works-slider').slick({
	slidesToShow: 4,
	arrows: true,
	dots: false,
	slidesToScroll: 1,
	fade: false,
	centerPadding: '0',
	adaptiveHeight: true,
	infinite: false,
	touchThreshold: 30,
	prevArrow: "<span class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-left'></use></svg></span>",
	nextArrow: "<span class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right'></use></svg></span>",
	responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3.09,
				arrows: false
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2.24,
				arrows: false
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1.10,
				arrows: false,
				dots: true
			}
		}
	]
});

function createFullPage() {
	var myFullpage = new fullpage('#fullpage', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['main', 'advantages', 'works', 'reviews', 'contact'],
		menu: '#js-menu',
		slidesNavigation: false,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: false,
		navigation: true
	});

	var myFullpage2 = new fullpage('#fullpage2', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['advantages', 'principle', 'vacancies'],
		menu: '#js-menu',
		slidesNavigation: false,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: false,
		navigation: true
	});
	var myFullpageSport = new fullpage('#fullpage-sport', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['sportMain', 'finding', 'quality', 'related', 'works', 'reviews', 'questions'],
		menu: '#js-menu',
		slidesNavigation: false,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: false,
		navigation: true
	});
};
$(window).load(function () {
	if (($(window).height() >= 620) && ($(window).width() >= 1024)) {
		if ($('#fullpage').length) {
			createFullPage();
		}
		if ($('#fullpage2').length) {
			createFullPage();
		}
		if ($('#fullpage-sport').length) {
			createFullPage();
		}
	} else {
		if ($('.fp-enabled').length) {
			fullpage_api.destroy('all');
		};
		$('body').removeClass('full');
		$('.section').removeAttr('style');
	}
});
$(window).resize(function (e) {
	if (($(window).height() >= 620) && ($(window).width() >= 1024)) {
		if ($('#fullpage').length) {
			createFullPage();
		}
		if ($('#fullpage2').length) {
			createFullPage();
		}
		if ($('#fullpage-sport').length) {
			createFullPage();
		}
	} else {
		if ($('.fp-enabled').length) {
			fullpage_api.destroy('all');
		};
		$('body').removeClass('full');
		$('.section').removeAttr('style');
	}
});



/****Yandex map on contacts.html*****/

setTimeout(function () {
	if ($('#map-contact').length) {
		setTimeout(function () {
			const mapContact = document.querySelector('#map-contact');
			const markets = [].slice.call(document.querySelectorAll('.contacts-item'));
			const datapin = {
				pin: 'img/geo.png',
				pinHovered: 'img/squer.png'
			}

			const coords = [
				[56.117270, 157.039628],
				[57.841132, 135.550370],
				[52.665597, 142.581620],
				[48.831322, 142.317948]
			];
			window.ymaps.ready(() => {
				const ymap = new window.ymaps.Map(mapContact, {
					center: [56.117270, 157.039628],
					zoom: 4.5,
					controls: [],
				});
				ymap.behaviors.disable('scrollZoom');

				const myCollection = new window.ymaps.GeoObjectCollection({}, {
					iconLayout: 'default#image',
					iconImageHref: datapin.pin,
					iconImageSize: [57, 57],
				});



				for (let i = 0; i < coords.length; i += 1) {
					myCollection.add(new window.ymaps.Placemark(coords[i]));
				}



				ymap.geoObjects.add(myCollection);

				if (markets.length > 0) {
					markets.forEach((market) => {
						market.addEventListener('click', (e) => {

							/**Возвращаем вид маркеров в состояние по умолчанию */
							for (let i = 0; i < coords.length; i++) {
								myCollection.get(i).options.set('iconImageHref', datapin.pin);
								myCollection.get(i).options.set({
									iconImageSize: [57, 57]
								});
							}

							/**Смена активно класса у адреса из списка */
							$('.contacts-item').removeClass("contacts-item__active");
							$(market).addClass("contacts-item__active");

							/**Смена позиции карты */
							ymap.setCenter(
								coords[Number(market.dataset.index)], 6
							);

							/**Смена активного маркера */
							let pointIndex = Number(market.dataset.index);
							myCollection.get(pointIndex).options.set('iconImageHref', datapin.pinHovered);
							myCollection.get(pointIndex).options.set({
								iconImageSize: [20, 20]
							});
							/***********************************************/
						});
					});
				}
			});
			/*map*/
		}, 1000);


	}
	/*map*/
}, 1000);