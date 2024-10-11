const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])
})

const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
let slider2 = document.querySelector('.slider2');

next2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.appendChild(slides2[0]);
})
prev2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.prepend(slides2[slides2.length - 1])
})

