


                          

var verticalAccordeon = function () {
    let itemV = document.getElementsByClassName('accordeon__item');

    for (let i = 0; i < itemV.length; i++) {
        itemV[i].addEventListener('click', function (el) {

            el.currentTarget.classList.toggle('accordeon__item--active');

            for (let i = 0; i < itemV.length; i++) {
                if (itemV[i] !== el.currentTarget && itemV[i].className === "accordeon__item accordeon__item--active") {
                    itemV[i].classList.remove('accordeon__item--active');
                }
            }
        });
    };
}


var horizonAccordeon = function () {
    let itemH = document.getElementsByClassName('horizon-accordeon__item');
    
    for (let i = 0; i < itemH.length; i++) {
        itemH[i].addEventListener('click', function (el) {

            el.currentTarget.classList.toggle('horizon-accordeon__item--active');

            for (let i = 0; i < itemH.length; i++) {
                if (itemH[i] !== el.currentTarget && itemH[i].className === "horizon-accordeon__item horizon-accordeon__item--active") {
                    itemH[i].classList.remove('horizon-accordeon__item--active');
                }
            }
        });
    };
}







verticalAccordeon();

horizonAccordeon();
