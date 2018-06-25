$('#form').on('submit', submitForm);

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
    
    let formPopup = document.querySelector('.form-popup'),
        formPopupName = document.querySelector('.form-popup__name');
    
    request.done(function(msg){
        formPopup.classList.add('form-popup-active');
        formPopupName.textContent = 'Сообщение отправлено';
    });
    
    request.fail(function(jqXHR, textStatus) {
        formPopup.classList.add('form-popup-active');
        formPopupName.textContent = 'Произошда ошибка! Сообщение не отправлено.';
    })
};



const closeFormPopup = function(){
    let formPopup = document.querySelector('.form-popup');
    let closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        
        formPopup.classList.remove('form-popup-active');
    })
};

closeFormPopup();