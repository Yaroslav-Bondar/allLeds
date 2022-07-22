// get constants
const constRoot = require('../constants/root');

const catalogMenu = constRoot.catalogMenu;
// previous and current menu item
let prev = current = null;
let prevActive = catalogMenu.getElementsByClassName('menu-catalog__item_active'); 

catalogMenu.addEventListener('click', e => {
    const catalogItem = e.target.closest('.menu-catalog__item');
    // console.log(catalogItem);
    // close/open dropdown menu
    catalogItem.classList.toggle('menu-catalog__item_active');

    if(catalogItem.classList.contains('menu-catalog__item_active')) {
        // get current menu item
        current = catalogItem.querySelector('.menu-catalog__submenu') || catalogItem.querySelector('.menu-catalog__link');
        console.log('when active start', prevActive);
        
        // remove the highlight of the previous active menu item if 
        // there was a previous one and if the previous one is not equal to the current one
        if(prev && prev !== current) prev.removeAttribute('data-current');
  
        // highlight current menu item
        current.setAttribute('data-current', 'true');
        prev = current;
    } else {
        // remove the highlight of the previous active menu item
        prev.removeAttribute('data-current');
     
        // console.log('when no active end deleted', active);
        const activeSubItems = catalogItem.querySelectorAll('.menu-catalog__item_active'); 
        // console.log('activeSubItems', activeSubItems);
        // if(activeSubItems.length) {
            // close all open child dropdown menus
            activeSubItems.forEach(item => item.classList.remove('menu-catalog__item_active')); 
        // }
        console.log('when not active', prevActive);

        const prevItemActive = catalogItem.closest('.menu-catalog__item_active');
        // highlighting the previous menu item contained in the sub-item of the parent item
        if(prevItemActive && !prevItemActive.hasAttribute('data-parent-menu')) {
            prev = prevItemActive.querySelector('.menu-catalog__submenu') || prevItemActive.querySelector('.menu-catalog__link'); 
            prev.setAttribute('data-current', 'true');
        // highlighting the parent subitem contained in the parent item     
        } else if(prevItemActive && prevItemActive.hasAttribute('data-parent-menu')) {
            prev = prevItemActive.querySelector('.menu-catalog__submenu') || prevItemActive.querySelector('.menu-catalog__link'); 
            prev.setAttribute('data-current', 'true');
        }
        else if(prevActive.length) {
            // highlight previous item not contained by parent subitem
            const prevActiveLast = prevActive[prevActive.length - 1];
            prev = prevActive[prevActive.length - 1].querySelector('.menu-catalog__submenu') || prevActive[prevActive.length - 1].querySelector('.menu-catalog__link'); 
            prev.setAttribute('data-current', 'true');
        } 

    }
});