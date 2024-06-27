let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoSlide = setInterval(nextSlide, 3000);
});

let autoSlide = setInterval(nextSlide, 3000);
