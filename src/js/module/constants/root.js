// breakpoints
const BREAK_POINT_MD = 768;
module.exports.isBreakPointMd = matchMedia(`(max-width:${BREAK_POINT_MD}px)`);
module.exports.BREAK_POINT_MD = BREAK_POINT_MD;

// dom elements
const contactsHeaderPhone = document.querySelector('.contacts-header__phone');
module.exports.contactsHeaderPhone = contactsHeaderPhone;
module.exports.contactsHeaderPhoneList = document.querySelector('.contacts-header__phone-list');
module.exports.headerCartRow = document.querySelector('.header-cart__row'); 
module.exports.btnMenuBtn = document.querySelector('.btn-menu__btn'); 
module.exports.searchCityInput = document.querySelector('.search-city__input'); 
module.exports.bottomHeaderContainer = document.querySelector('.bottom-header__container');
module.exports.searchCityBtnContainer = document.querySelector('.search-city__btn-container');
module.exports.searchCityClear = document.querySelector('.search-city__clear');
module.exports.searchCitySearch = document.querySelector('.search-city__search');
module.exports.searchCityClose = document.querySelector('.search-city__close');
module.exports.catalogMenuContainer = document.querySelector('.catalog-menu__container');
module.exports.catalogMenuItem = document.querySelector('.catalog-menu__item');
module.exports.wrapper = document.querySelector('.wrapper');
module.exports.headerUpper = document.querySelector('.header__upper');
module.exports.menuContainer = document.querySelector('.menu__container');
  









