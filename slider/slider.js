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