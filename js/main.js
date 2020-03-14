// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600

});
sr.reveal('.animate-up', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600

});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');


});

// Animate Smooth Scroll to 'About me'
$('#view1').on('click', function () {
    const ab = $('#About').position().top;

    $('html, body').animate(
        {
            scrollTop: ab
        },
        900
    );
});
// Animate Smooth Scroll to 'Interests'
$('#view2').on('click', function () {
    const inter = $('#Interests').position().top;

    $('html, body').animate(
        {
            scrollTop: inter
        },
        900
    );
});
// Animate Smooth Scroll to 'Projects'
$('#view3').on('click', function () {
    const proj = $('#Projects').position().top;

    $('html, body').animate(
        {
            scrollTop: proj
        },
        900
    );
});

// Animate Smooth Scroll to 'Contact'
$('#view4').on('click', function () {
    const con = $('#Contact').position().top;

    $('html, body').animate(
        {
            scrollTop: con
        },
        900
    );
});

