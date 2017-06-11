var elements = document.querySelectorAll('.main-photo__img');

elements = [].slice.apply(elements); // toArray

 

elements.forEach(function (element, i) {

    element.addEventListener('click', function () {
      
      element.classList.toggle("main-photo__img--click");

    })

});