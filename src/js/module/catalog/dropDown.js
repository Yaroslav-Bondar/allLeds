// get constants
const constRoot = require('../constants/root');

const catalogMenu = constRoot.catalogMenu;
// previous and current menu item
let prev = current = null;
// all active menu items
let prevActive = catalogMenu.getElementsByClassName('menu-catalog__item_active'); 

catalogMenu.addEventListener('click', e => {
    const catalogItem = e.target.closest('.menu-catalog__item');
    // close/open dropdown menu
    catalogItem.classList.toggle('menu-catalog__item_active');
    // when the active menu item is highlighted
    if(catalogItem.classList.contains('menu-catalog__item_active')) {
        // get current menu item
        current = catalogItem.querySelector('.menu-catalog__submenu') || catalogItem.querySelector('.menu-catalog__link');
        // remove the highlight of the previous active menu item if 
        // there was a previous one and if the previous one is not equal to the current one
        if(prev && prev !== current) prev.removeAttribute('data-current');
        // highlight current menu item
        current.setAttribute('data-current', 'true');
        prev = current;
    } else { // when the highlight of the active menu item is removed 
        // remove the highlight of the previous active menu item
        prev.removeAttribute('data-current');
        
        const activeSubItems = catalogItem.querySelectorAll('.menu-catalog__item_active'); 
        // deactivate active child submenus
        activeSubItems.forEach(item => item.classList.remove('menu-catalog__item_active')); 

        const prevItemActive = catalogItem.closest('.menu-catalog__item_active');
        // highlighting the previous menu item contained in the sub-item of the parent item
        if(prevItemActive && !prevItemActive.hasAttribute('data-parent-menu')) {
            console.log('in submenu');
            prev = prevItemActive.querySelector('.menu-catalog__submenu') || prevItemActive.querySelector('.menu-catalog__link'); 
            prev.setAttribute('data-current', 'true');
        } 
        // highlighting the parent subitem contained in the parent item     
        else if(prevItemActive && prevItemActive.hasAttribute('data-parent-menu')) {
            const childItemsActive = prevItemActive.querySelectorAll('.menu-catalog__item_active');
            // if there are parent menu submenus open
            if(childItemsActive.length) {
                const childItemActive = childItemsActive[childItemsActive.length - 1];
                console.log('while is childs');
                const itemActive = childItemActive.querySelector('.menu-catalog__submenu') || childItemActive.querySelector('.menu-catalog__link');
                prev = childItemActive.querySelector('.menu-catalog__submenu') || childItemActive.querySelector('.menu-catalog__link');
                // highlight the last opened menu item of the parent submenu
                prev.setAttribute('data-current', 'true');
            } else {
                console.log('close parent');
                prev = prevItemActive.querySelector('.menu-catalog__submenu') || prevItemActive.querySelector('.menu-catalog__link'); 
                // highlight active parent menu item
                prev.setAttribute('data-current', 'true');
            }
        }
        // highlight the last active menu item of another parent menu
        else if(prevActive.length) {
            console.log('in another parent');
            const prevActiveLast = prevActive[prevActive.length - 1];
            prev = prevActive[prevActive.length - 1].querySelector('.menu-catalog__submenu') || prevActive[prevActive.length - 1].querySelector('.menu-catalog__link'); 
            prev.setAttribute('data-current', 'true');
        } 
    }
});