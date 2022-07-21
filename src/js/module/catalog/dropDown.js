// get constants
const constRoot = require('../constants/root');

const catalogMenu = constRoot.catalogMenu;
// previous and current menu item
let prev = current = null;

catalogMenu.addEventListener('click', e => {
    const catalogItem = e.target.closest('.menu-catalog__item');
    console.log(catalogItem);
    // close/open dropdown menu
    catalogItem.classList.toggle('menu-catalog__item_active');

    if(catalogItem.classList.contains('menu-catalog__item_active')) {
        // get current menu item
        current = catalogItem.querySelector('.menu-catalog__submenu') || catalogItem.querySelector('.menu-catalog__link');
        // remove the highlight of the previous active menu item if 
        // there was a previous one and if the previous one is not equal to the current one
        if(prev && prev !== current) prev.removeAttribute('data-current');
        // highlight current menu item
        current.setAttribute('data-current', 'true');
        prev = current;
    } else {
        // remove the highlight of the previous active menu item
        prev.removeAttribute('data-current');
        const activeItems = catalogItem.querySelectorAll('.menu-catalog__item_active'); 
        if(activeItems.length) {
            activeItems.forEach(item => {
                // close all open child dropdown menus
                item.classList.remove('menu-catalog__item_active');
            }); 
        }
    }
});