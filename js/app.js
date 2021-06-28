$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
        console.log("Hey there buddy");
    });

    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        console.log("Hey there buddy1");

    });
    // it is a test comment
});