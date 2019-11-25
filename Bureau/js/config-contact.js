/****************Обработка отправки формы в хедере************************ */

$('.js-contact-form').on('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action');

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data
    });

    const popupBlock = document.querySelector('.swal-overlay');
    const popupForm = document.querySelector('.popup-form--header');

    function closePopup() {
        popupBlock.classList.remove('swal-overlay--show-modal');
        document.querySelector('.js-contact-form').reset();
        popupForm.classList.remove('popup-form--active');
    }

    request.done(function (msg) {
        popupBlock.classList.add('swal-overlay--show-modal');
        setTimeout(closePopup, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
        popupBlock.classList.add('swal-overlay--show-modal');
        setTimeout(closePopup, 2500);
    })
};


/****************Обработка отправки формы в прайсе************************ */

$('.js-price-form').on('submit', submitPriceForm);

function submitPriceForm(e) {
    e.preventDefault();

    var form = $(e.target),
        data = form.serialize(),
        url = form.attr('action');

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data
    });

    const popupBlock = document.querySelector('.swal-overlay');
    const priceForm = document.querySelector('.popup-form-price');

    function closePopup() {
        popupBlock.classList.remove('swal-overlay--show-modal');
        document.querySelector('.js-contact-form').reset();
        priceForm.classList.remove('popup-form-price--active');
    }

    request.done(function (msg) {
        popupBlock.classList.add('swal-overlay--show-modal');
        setTimeout(closePopup, 2500);
    });

    request.fail(function (jqXHR, textStatus) {
        popupBlock.classList.add('swal-overlay--show-modal');
        setTimeout(closePopup, 2500);
    })
};