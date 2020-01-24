$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
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
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	$('.button-nav').click(function () {
		$(this).toggleClass('active'),
			$('.main-nav-list').slideToggle();
		return false;
	});

	/* components */

	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};

	
	*/



	/* Slide related product*/

	if ($('.product-list__related-link').length > 3) {
		$('.product-list__related-list').addClass('slick-slider');

		$('.slick-slider').slick({
			dots: true,
			appendDots: $('.my-dots'),
			prevArrow: $('.prev-arrow'),
			nextArrow: $('.next-arrow'),
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			variableWidth: true,
			responsive: [{
					breakpoint: 1201,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						variableWidth: false
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						variableWidth: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: false
					}
				}
			]
		});

	} else {
		$('.product-list__related-navigate').addClass('product-list__related-navigate--none');
		$('.product-list__related-list').addClass('product-list__related-list--noslide');
	}







	/* components */



});

var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);




/****FILTER SCRIPTS****/

if ($('.container').length) {
	$(".container").customScrollbar();
};

$('.filter-btn').click(function () {
	$('.filter').toggleClass('filter--active');
});


$(function () {
	/**Open Close*/
	$('#category').click(function () {
		$('#category-wrap').toggleClass('accordion__wrap--active');
		$('#category').toggleClass('accordion__toggle--active');
	});

	$('#material').click(function () {
		$('#material-wrap').toggleClass('accordion__wrap--active');
		$('#material').toggleClass('accordion__toggle--active');
	});

	$('#size').click(function () {
		$('#size-wrap').toggleClass('multiselect__list--active');
		$('#size').toggleClass('multiselect__btn--active');
	});

	$('#color').click(function () {
		$('#color-wrap').toggleClass('multiselect__list--active');
		$('#color').toggleClass('multiselect__btn--active');
	});

	/**Select element*/
	$("#size-wrap .multiselect__list-item").each(function () {
		$(this).click(function () {
			$('#size-input').attr('value', $(this).text());
			$('#size').toggleClass('multiselect__btn--active');
			$('#size-wrap').toggleClass('multiselect__list--active');
		});

	});

	$("#color-wrap .multiselect__list-item").each(function () {
		$(this).click(function () {
			$('#color-input').attr('value', $(this).text());
			$('#color').toggleClass('multiselect__btn--active');
			$('#color-wrap').toggleClass('multiselect__list--active');
		});

	});


});