var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');

var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    link.classList.toggle('fade-in');
})