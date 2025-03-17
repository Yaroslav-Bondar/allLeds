import { catalogMenuContainer, body } from '../../common/constants/index.js';

import {
  setListenerMobileMenuPadding,
  setListenerMobileMenuHeight,
  launchSetMobileMenuPadding,
  launchSetMobileMenuHeight,
  toggleElementState,
  closeMobileMenu,
  createMobileMenuContainer,
} from '../services/index.js';

import variables from '../variables/index.js';

function handleMenuBtn() {
  toggleElementState();
  if (this.dataset.mode === 'catalog' || this.dataset.mode === 'menu') {
    closeMobileMenu.call(this);
  } else if (this.getAttribute('data-mode') === 'close') {
    if (!variables.mobileMenuContainer) {
      createMobileMenuContainer();
    }
    if (!variables.topHeaderMenu) {
      variables.topHeaderMenu = document.querySelector('.top-header__menu');
    }
    if (!variables.topHeaderMenu.classList.contains('top-header__menu_active')) {
      variables.topHeaderMenu.classList.add('top-header__menu_active');
    }
    if (!variables.mobileMenuContainer.contains(variables.topHeaderMenu)) {
      variables.mobileMenuContainer.append(variables.topHeaderMenu);
    }
    if (
      variables.mobileMenuContainer.contains(catalogMenuContainer) &&
      catalogMenuContainer.classList.contains('catalog-menu__container_active')
    ) {
      catalogMenuContainer.classList.remove('catalog-menu__container_active');
    }
    launchSetMobileMenuPadding();
    if (!variables.isListenerMobileMenuPadding) setListenerMobileMenuPadding();
    launchSetMobileMenuHeight();
    if (!variables.isListenerMobileMenuHeight) setListenerMobileMenuHeight();
    variables.mobileMenuContainer.classList.add('mobile-menu__container_active');
    body.classList.add('lock');
    this.setAttribute('data-mode', 'menu');
  }
}

export { handleMenuBtn as default };
