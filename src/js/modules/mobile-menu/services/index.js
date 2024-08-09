import {
  searchCitySearchContainer,
  headerUpper,
  body,
} from '../../common/constants/index.js';

import {
  setPaddingBasedOnHeight,
} from '../../../services/index.js';

import variables from '../variables/index.js';

const burgerLine = document.querySelector('.burger__line');

function toggleElementState() {
  // toggle z-index for search
  searchCitySearchContainer.classList.toggle('search-city__search-container_z-index_20');
  burgerLine.classList.toggle('burger__line_active');
}

function createMobileMenuContainer() {
  variables.mobileMenuContainer = document.createElement('div');
  variables.mobileMenuContainer.className = 'mobile-menu__container';
  body.prepend(variables.mobileMenuContainer);
}

const setMobileMenuPadding = setPaddingBasedOnHeight();

function launchSetMobileMenuPadding() {
  setMobileMenuPadding(headerUpper, variables.mobileMenuContainer);
}

function setListenerMobileMenuPadding() {
  window.addEventListener('resize', launchSetMobileMenuPadding);
  variables.isListenerMobileMenuPadding = !variables.isListenerMobileMenuPadding;
}

function setMobileMenuHeight(elementClassName) {
  const element = document.querySelector(`.${elementClassName}`);
  return function changeHeightElement() {
    const windowHeight = document.documentElement.clientHeight;
    const { top, bottom } = element.getBoundingClientRect();
    if (bottom !== windowHeight && top < windowHeight) {
      element.style.height = `${windowHeight - top}px`;
    }
  };
}

const launchSetMobileCatalogHeight = setMobileMenuHeight('catalog-menu__item');

function setListenerMobileCatalogHeight() {
  window.addEventListener('resize', launchSetMobileCatalogHeight);
  variables.isListenerMobileCatalogHeight = true;
}

const launchSetMobileMenuHeight = setMobileMenuHeight('top-header__menu-list');

function setListenerMobileMenuHeight() {
  window.addEventListener('resize', launchSetMobileMenuHeight);
  variables.isListenerMobileMenuHeight = true;
}

function removeListenerMobileMenuHeight() {
  window.removeEventListener('resize', launchSetMobileMenuHeight);
  variables.isListenerMobileMenuHeight = false;
}

function removeListenerMobileCatalogHeight() {
  window.removeEventListener('resize', launchSetMobileCatalogHeight);
  variables.isListenerMobileCatalogHeight = false;
}

function removeListenerMobileMenuPadding() {
  window.removeEventListener('resize', launchSetMobileMenuPadding);
  variables.isListenerMobileMenuPadding = !variables.isListenerMobileMenuPadding;
}

function closeMobileMenu() {
  variables.mobileMenuContainer.classList.remove('mobile-menu__container_active');
  if (variables.isListenerMobileMenuPadding) removeListenerMobileMenuPadding();
  if (variables.isListenerMobileMenuHeight) removeListenerMobileMenuHeight();
  if (variables.isListenerMobileCatalogHeight) removeListenerMobileCatalogHeight();
  body.classList.remove('lock');
  this.setAttribute('data-mode', 'close');
}

function scrollToTop() {
  if (window.pageYOffset) window.scrollTo(0, 0);
}

export {
  setListenerMobileMenuPadding,
  setListenerMobileMenuHeight,
  launchSetMobileMenuPadding,
  launchSetMobileMenuHeight,
  toggleElementState,
  closeMobileMenu,
  createMobileMenuContainer,
  launchSetMobileCatalogHeight,
  setListenerMobileCatalogHeight,
  scrollToTop,
  removeListenerMobileMenuPadding,
  removeListenerMobileMenuHeight,
  removeListenerMobileCatalogHeight,
};
