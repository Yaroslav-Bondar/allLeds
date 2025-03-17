import {
  btnMenuBtn,
  catalogBtn,
  catalogMenuContainer,
  catalogMenuItem,
  body,
} from '../../common/constants/index.js';

import {
  setListenerMobileMenuPadding,
  setListenerMobileCatalogHeight,
  setListenerMobileMenuHeight,
  launchSetMobileMenuPadding,
  launchSetMobileCatalogHeight,
  launchSetMobileMenuHeight,
  scrollToTop,
  removeListenerMobileMenuPadding,
  removeListenerMobileMenuHeight,
  removeListenerMobileCatalogHeight,
} from '../services/index.js';

import variables from '../variables/index.js';

import handleCatalogBtn from './handleCatalogBtn.js';

function handleMdBreakpoint(event) {
  if (event.matches) {
    if (!catalogBtn.onclick) catalogBtn.onclick = handleCatalogBtn;
    if (btnMenuBtn.getAttribute('data-mode') === 'catalog') {
      variables.mobileMenuContainer.append(catalogMenuContainer);
      catalogMenuContainer.classList.add('catalog-menu__container_active');
      setTimeout(() => {
        // asynchronous execution to get correct metrics
        launchSetMobileMenuPadding();
        launchSetMobileCatalogHeight();
        scrollToTop();
        body.classList.add('lock');
      });
      setListenerMobileMenuPadding();
      setListenerMobileCatalogHeight();
      variables.mobileMenuContainer.classList.add('mobile-menu__container_active');
    }
    if (btnMenuBtn.dataset.mode === 'menu') {
      variables.mobileMenuContainer.prepend(variables.topHeaderMenu);
      variables.topHeaderMenu.classList.add('top-header__menu_active');
      // asynchronous execution to get correct metrics
      setTimeout(() => {
        launchSetMobileMenuPadding();
        launchSetMobileMenuHeight();
        scrollToTop();
        body.classList.add('lock');
      });
      setListenerMobileMenuPadding();
      setListenerMobileMenuHeight();
      variables.mobileMenuContainer.classList.add('mobile-menu__container_active');
    }
  } else {
    if (catalogBtn.onclick) catalogBtn.onclick = null;
    if (catalogMenuContainer.classList.contains('catalog-menu__container_active'))
      catalogMenuContainer.classList.remove('catalog-menu__container_active');
    if (variables.topHeaderMenu && variables.topHeaderMenu.classList.contains('top-header__menu_active')) {
      variables.topHeaderMenu.classList.remove('top-header__menu_active');
    }
    if (variables.isListenerMobileMenuPadding) removeListenerMobileMenuPadding();
    if (variables.isListenerMobileMenuHeight) removeListenerMobileMenuHeight();
    if (variables.isListenerMobileCatalogHeight) removeListenerMobileCatalogHeight();
    if (
      variables.mobileMenuContainer &&
      variables.mobileMenuContainer.classList.contains('mobile-menu__container_active')
    ) {
      variables.mobileMenuContainer.classList.remove('mobile-menu__container_active');
    }
    if (body.classList.contains('lock')) body.classList.remove('lock');
    catalogMenuItem.style.height = '';
    if (variables.mobileMenuContainer && variables.mobileMenuContainer.contains(catalogMenuContainer)) {
      if (!variables.catalogMenu) {
        variables.catalogMenu = document.querySelector('.catalog-menu');
      }
      variables.catalogMenu.append(catalogMenuContainer);
    }
    document.querySelector('.top-header__menu-list').style.height = '';
    if (
      variables.topHeaderMenu &&
      variables.mobileMenuContainer &&
      variables.mobileMenuContainer.contains(variables.topHeaderMenu)
    ) {
      if (!variables.topHeaderMenuContainer) {
        variables.topHeaderMenuContainer = document.querySelector('.top-header__menu-container');
      }
      variables.topHeaderMenuContainer.prepend(variables.topHeaderMenu);
    }
  }
}

export { handleMdBreakpoint as default };
