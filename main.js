const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListrner('click' , function() {
    body.classList.toggle('open');
});

// reveal

window.sr = scrollReveal();

sr.reveal('.animate-left' , {
    origin : 'left',
    duration : 1000,
    distance : '25rem',
    delay: 300

}
)

sr.reveal('.animate-right' , {
    origin : 'right',
    duration : 1000,
    distance : '25rem',
    delay: 600

}
)
