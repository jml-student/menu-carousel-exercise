import { displayMenu } from './node_modules/display-menu-package/index.js';

(function getItems() {
    const menuButton = document.querySelector('.menu-btn');
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.style.visibility = 'hidden';
    displayMenu(menuButton, menuContainer);
})();
