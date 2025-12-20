// Initialize Swiper for Projects Slider
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        invert: false,
        forceToAxis: true,
    },
    autoHeight: true,
    loop: false,
    speed: 600,
});

// Add animation class to new slides
projectsSwiper.on('slideChange', function () {
    // Remove active class from all slides
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.classList.remove('slide-in');
    });
    
    // Add active class to current slide
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        activeSlide.classList.add('slide-in');
    }
});

// Trigger animation for initial slide
document.addEventListener('DOMContentLoaded', () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
        activeSlide.classList.add('slide-in');
    }
});
