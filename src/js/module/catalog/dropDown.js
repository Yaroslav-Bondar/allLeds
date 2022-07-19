// get constants
const constRoot = require('../constants/root');

const catalogMenu = constRoot.catalogMenu;

catalogMenu.addEventListener('click', e => {
    const catalogItem = e.target.closest('.menu-catalog__item');
    // const catalogContent = catalogItem.querySelector('.menu-catalog__content');
    // const catalogSubmenu = catalogItem.querySelector('.menu-catalog__submenu');
    // close/open drop-down menu
    // if(catalogContent) {
        
        // close/open dropdown menu
        catalogItem.classList.toggle('menu-catalog__item_active');
        // close all open child dropdown menus
        if(!catalogItem.classList.contains('menu-catalog__item_active')) {
            const activeItems = catalogItem.querySelectorAll('.menu-catalog__item_active'); 
            if(activeItems.length) {
                activeItems.forEach(item => {
                    item.classList.remove('menu-catalog__item_active');
                }); 
            }

        }
        // catalogContent.classList.toggle('menu-catalog__content_active');
        // catalogSubmenu.classList.toggle('menu-catalog__submenu_arrow-down');
        // some things
    // }
    // if(catalogSubmenu)


});