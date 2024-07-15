import { displayMenu } from './node_modules/display-menu-package/index.mjs';

(function getItems() {
    const menuButton = document.querySelector('.menu-btn');
    const menuContainer = document.querySelector('.menu-container');
    displayMenu(menuButton, menuContainer);
})();
