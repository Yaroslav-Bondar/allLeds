import {
  catalogMenuContainer,
  btnMenuBtn,
  body,
} from '../../common/constants/index.js';

import variables from '../variables/index.js';

import {
  toggleElementState,
  createMobileMenuContainer,
  launchSetMobileMenuPadding,
  setListenerMobileMenuPadding,
  launchSetMobileCatalogHeight,
  setListenerMobileCatalogHeight,
} from '../services/index.js';

function handleCatalogBtn() {
  toggleElementState();
  if (!variables.mobileMenuContainer) {
    createMobileMenuContainer();
  }
  if (variables.topHeaderMenu
    && variables.mobileMenuContainer.contains(variables.topHeaderMenu)
    && variables.topHeaderMenu.classList.contains('top-header__menu_active')) {
    variables.topHeaderMenu.classList.remove('top-header__menu_active');
  }
  if (!variables.mobileMenuContainer.contains(catalogMenuContainer)) {
    variables.mobileMenuContainer.append(catalogMenuContainer);
  }
  if (!catalogMenuContainer.classList.contains('catalog-menu__container_active')) {
    catalogMenuContainer.classList.add('catalog-menu__container_active');
  }
  launchSetMobileMenuPadding();
  if (!variables.isListenerMobileMenuPadding) setListenerMobileMenuPadding();
  launchSetMobileCatalogHeight();
  setListenerMobileCatalogHeight();
  variables.mobileMenuContainer.classList.add('mobile-menu__container_active');
  btnMenuBtn.setAttribute('data-mode', 'catalog');
  body.classList.add('lock');
}

export { handleCatalogBtn as default };
