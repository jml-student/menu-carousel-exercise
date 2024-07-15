import { displayMenu } from './node_modules/display-menu-package/index.js';

(function main() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const dots = document.querySelectorAll('.dot');
    let carouselIndex = 0;

    function getMenu() {
        const menuButton = document.querySelector('.menu-btn');
        const menuContainer = document.querySelector('.menu-container');
        menuContainer.style.visibility = 'hidden';
        displayMenu(menuButton, menuContainer);
    }

    function displayCarousel(index) {
        const images = document.querySelectorAll('.carousel-container img');
        images.forEach((image, currentImage) => {
            if (currentImage === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        applyDotsBgColor();
    }

    function applyDotsBgColor() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === carouselIndex) {
                dot.style.backgroundColor = 'rgb(184, 184, 184)';
            } else {
                dot.style.backgroundColor = 'white';
            }
        });
    }

    function sumOneIndex() {
        if (carouselIndex === 7) {
            carouselIndex = 0;
        } else {
            carouselIndex += 1;
        }
        displayCarousel(carouselIndex);
    }

    leftArrow.addEventListener('click', () => {
        if (carouselIndex === 0) {
            carouselIndex = 7;
        } else {
            carouselIndex -= 1;
        }
        displayCarousel(carouselIndex);
    });

    rightArrow.addEventListener('click', () => {
        if (carouselIndex === 7) {
            carouselIndex = 0;
        } else {
            carouselIndex += 1;
        }
        displayCarousel(carouselIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carouselIndex = index;
            displayCarousel(carouselIndex);
        });
    });

    getMenu();
    displayCarousel(carouselIndex);
    setInterval(sumOneIndex, 5000);
})();
