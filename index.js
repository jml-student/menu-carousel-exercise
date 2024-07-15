import { displayMenu } from './node_modules/display-menu-package/index.js';

(function getItems() {
    const menuButton = document.querySelector('.menu-btn');
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.style.visibility = 'hidden';
    displayMenu(menuButton, menuContainer);
})();

function displayCarousel(index) {
    const images = document.querySelectorAll('.carousel-container img');
    images.forEach((image, currentImage) => {
        if (currentImage === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

displayCarousel(0);
