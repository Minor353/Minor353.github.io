

const popupToogle = function () {
    
const btnInfo = document.querySelectorAll('.button-info'),
      btnClose = document.querySelector('.popup__close'),
      popup = document.querySelector('.popup'),
      popupAnimate = document.querySelector('.popup__wrapper'),
      bodyPopup = document.body,
      revTitle = document.querySelectorAll('.reviews__comment-title'),
      revText = document.querySelectorAll('.reviews__comment-text');

var popupName = document.querySelector('.popup__name'),
    popupContent = document.querySelector('.popup__text');
    
    for (let i = 0; i < btnInfo.length; i++) {
        btnInfo[i].addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.add('popup-active');
            popupAnimate.classList.add('popup-animate');
            bodyPopup.classList.add("body-popup-open");
            popupName.textContent = revTitle[i].textContent;  
            popupContent.textContent = revText[i].textContent;
        });
    }

    btnClose.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.remove('popup-active');
        popupAnimate.classList.remove('popup-animate');

        bodyPopup.classList.remove("body-popup-open");
    });

};


popupToogle();
