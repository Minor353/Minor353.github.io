
const mobileMenu = function() {
    
    const openButton = document.querySelector(".burger"),
      navPanel = document.querySelector(".nav-panel"),
      menuLink = document.querySelectorAll(".nav-panel__item"),
      menuWrapp = document.querySelector(".nav-panel__items-wrapper"),
      bodyModal = document.body;
    
    openButton.addEventListener('click', function(){
    openButton.classList.toggle("burger-active");
    navPanel.classList.toggle("nav-panel-active");
    bodyModal.classList.toggle("body-modal-open");
    menuWrapp.classList.toggle("nav-animate");  
});

for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', function(){
        openButton.classList.toggle("burger-active");
        navPanel.classList.toggle("nav-panel-active");
        bodyModal.classList.toggle("body-modal-open");
});
}
};

mobileMenu();

