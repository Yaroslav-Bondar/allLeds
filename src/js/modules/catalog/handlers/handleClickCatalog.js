import { catalogMenuItem } from '../../common/constants/index.js';

let prev = null;
let current = null;
const prevActive = catalogMenuItem.getElementsByClassName('menu-catalog__item_active');

function handleClickCatalog(event) {
  const catalogItem = event.target.closest('.menu-catalog__item');
  if (!catalogItem) return;
  // close/open dropdown menu
  catalogItem.classList.toggle('menu-catalog__item_active');
  // when the active menu item is highlighted
  if (catalogItem.classList.contains('menu-catalog__item_active')) {
    // get current menu item
    current =
      catalogItem.querySelector('.menu-catalog__title') || catalogItem.querySelector('.menu-catalog__link');
    // remove the highlight of the previous active menu item if
    // there was a previous one and if the previous one is not equal to the current one
    if (prev && prev !== current) prev.removeAttribute('data-current');
    // highlight current menu item
    current.setAttribute('data-current', 'true');
    prev = current;
  } else {
    // when the highlight of the active menu item is removed
    // remove the highlight of the previous active menu item
    prev.removeAttribute('data-current');

    const activeSubItems = catalogItem.querySelectorAll('.menu-catalog__item_active');
    // deactivate active child submenus
    activeSubItems.forEach((item) => item.classList.remove('menu-catalog__item_active'));

    const prevItemActive = catalogItem.closest('.menu-catalog__item_active');
    // highlighting the previous menu item contained in the sub-item of the parent item
    if (prevItemActive && !prevItemActive.hasAttribute('data-parent-menu')) {
      prev =
        prevItemActive.querySelector('.menu-catalog__title') ||
        prevItemActive.querySelector('.menu-catalog__link');
      prev.setAttribute('data-current', 'true');
    } else if (prevItemActive && prevItemActive.hasAttribute('data-parent-menu')) {
      // highlighting the parent subitem contained in the parent item
      const childItemsActive = prevItemActive.querySelectorAll('.menu-catalog__item_active');
      // if there are parent menu submenus open
      if (childItemsActive.length) {
        const childItemActive = childItemsActive[childItemsActive.length - 1];
        prev =
          childItemActive.querySelector('.menu-catalog__title') ||
          childItemActive.querySelector('.menu-catalog__link');
        // highlight the last opened menu item of the parent submenu
        prev.setAttribute('data-current', 'true');
      } else {
        prev =
          prevItemActive.querySelector('.menu-catalog__title') ||
          prevItemActive.querySelector('.menu-catalog__link');
        // highlight active parent menu item
        prev.setAttribute('data-current', 'true');
      }
    } else if (prevActive.length) {
      // highlight the last active menu item of another parent menu
      prev =
        prevActive[prevActive.length - 1].querySelector('.menu-catalog__title') ||
        prevActive[prevActive.length - 1].querySelector('.menu-catalog__link');
      prev.setAttribute('data-current', 'true');
    }
  }
}

export { handleClickCatalog as default };
