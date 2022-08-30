
// navigation 
const navLinks = {
    home: document.querySelector('#home-nav-link'),
    about: document.querySelector('#about-nav-link'),
    interesting: document.querySelector('#interesting-nav-link'),
    watch: document.querySelector('#watch-nav-link'),
}

const blocks = {
    home: document.querySelector('#home'),
    about: document.querySelector('#about'),
    interesting: document.querySelector('#interesting'),
    watch: document.querySelector('#watch'),
}

const observerHandler = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const link = navLinks[entry.target.id];
            Object.values(navLinks).forEach(item => item.classList.remove('nav__link--active'))
            link.classList.add('nav__link--active')
        }
    })
}

const observer = new IntersectionObserver(
    observerHandler,
    {
        threshold: 0.7,
        rootMargin: '68px' // Header height
    }
);

Object.values(blocks).forEach(element => observer.observe(element));

// burger

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__list');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    navMenu.classList.toggle('active');
})