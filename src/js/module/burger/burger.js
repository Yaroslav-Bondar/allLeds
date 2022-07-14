// imports
const constRoot = require('../constants/root.js');
// const helpers = require('../helper/helpers.js');
// dom elements
const burgerLine = document.querySelector('.burger__line');
const catalogBtn = document.querySelector('.catalog__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const catalog = document.querySelector('.catalog');
const menuList = constRoot.menuList;
const searchCitySearch = constRoot.searchCitySearch;
const searchCityInput = constRoot.searchCityInput;
const searchCityBtn = constRoot.searchCityBtn;
// local variables
let contactsHeaderPhoneMenu; 

catalogBtn.addEventListener('click', () => {
    if(!contactsHeaderPhoneMenu) {
        contactsHeaderPhoneMenu = document.querySelector('.contacts-header__phone-menu');
    }
    // toggle z-index for phone menu
    contactsHeaderPhoneMenu.classList.toggle('contacts-header__phone-menu_over');
    // toggle z-index for search
    searchCityInput.classList.toggle('search-city__input_over');
    // toggle z-index for search button
    searchCityBtn.classList.toggle('search-city__btn_over');
    burgerLine.classList.toggle('burger__line_active');
    // set the closing mode of the product catalog
    btnMenuBtn.classList.toggle('btn-menu__btn_catalog');    
    catalog.classList.toggle('catalog_active');
});

// bottom header container, menu button
btnMenuBtn.addEventListener('click', e => {
    const btnMenu = e.target.closest('.btn-menu__btn');
    if(!btnMenu) return;
    body.classList.toggle('body_lock');
    if(!contactsHeaderPhoneMenu) {
        contactsHeaderPhoneMenu = document.querySelector('.contacts-header__phone-menu');
    }
    // toggle z-index for phone menu
    contactsHeaderPhoneMenu.classList.toggle('contacts-header__phone-menu_over');
    // toggle z-index for search
    searchCityInput.classList.toggle('search-city__input_over');
    // toggle z-index for search button
    searchCityBtn.classList.toggle('search-city__btn_over');
    burgerLine.classList.toggle('burger__line_active');
    // if the product catalog close mode
    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {
        catalog.classList.remove('catalog_active');
        btnMenu.classList.toggle('btn-menu__btn_catalog');   
    } else {
        menuList.classList.toggle('menu__list_active');
    }
});

