
const mobileNav = document.getElementById('mobile-nav');
const navBtn = document.querySelector('.nav-button');
const navIcon = document.querySelector('.nav-btn__icon');
const fade = document.querySelector('.mobile-nav-fade')

navBtn.onclick = function(){
    mobileNav.classList.toggle('mobile-nav--open');
    navBtn.classList.toggle('nav-button__active');
    document.body.classList.toggle('no-scroll');
    fade.classList.toggle('mobile-nav-fade--open');
};

fade.onclick = function() {
    mobileNav.classList.toggle('mobile-nav--open');
    navBtn.classList.toggle('nav-button__active');
    document.body.classList.toggle('no-scroll');
    fade.classList.toggle('mobile-nav-fade--open');
}

