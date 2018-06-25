

const menuSlider = function() {
    
    const slides = document.querySelectorAll('.slider__item'),
          arrowLeft = document.querySelector('.slider__arrow-left'),
          arrowRight = document.querySelector('.slider__arrow-right');

    var currentSlide = 0;
    
    arrowRight.addEventListener('click', function(e){
    e.preventDefault();
    
    if (currentSlide == slides.length - 1) {
        currentSlide = -1;
    }
    
    currentSlide += 1;
    slides[currentSlide].classList.add('slider__item-active');
    
    for (let i = 0; i < slides.length; i++) {
                if (slides[i] !== slides[currentSlide] && slides[i].className === 'slider__item slider__item-active') {
                    slides[i].classList.remove('slider__item-active');
                }
};
});


arrowLeft.addEventListener('click', function(e){
    e.preventDefault();
    
    if (currentSlide > 0) {
        currentSlide -= 1;
    } else if (currentSlide == 0){
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('slider__item-active');
    
    for (let i = 0; i < slides.length; i++) {
        
                if (slides[i] !== slides[currentSlide] && slides[i].className === 'slider__item slider__item-active') {
                    slides[i].classList.remove('slider__item-active');
                }
};
});
    
};


menuSlider();
