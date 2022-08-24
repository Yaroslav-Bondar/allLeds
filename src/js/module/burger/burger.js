// imports
const {topHeaderMenu,
    searchCitySearch,
    searchCityInput,
    searchCityBtn,
    wrapper,
    topHeaderMenuList,
    topHeaderDa,
    BREAK_POINT_MD,} = require('../constants/root.js');

const {getCoordsPageContext} = require('../helper/helpers.js');
// console.log("getCoordsPageContext", getCoordsPageContext);
// const helpers = require('../helper/helpers.js');
// dom elements
const burgerLine = document.querySelector('.burger__line');
const catalogBtn = document.querySelector('.catalog__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const catalog = document.querySelector('.catalog');
// local variables
let contactsHeaderPhoneMenu; 

// console.log('topHeaderDa from root', topHeaderDa.getBoundingClientRect());


window.addEventListener('resize', ()=> {
    if(window.innerWidth <= BREAK_POINT_MD) {
        // set a handler for the catalog button
        if(!catalogBtn.onclick) catalogBtn.onclick = catalogBtnHandler;
    } else {
        // remove the handler for the catalog button
        if(catalogBtn.onclick) catalogBtn.onclick = null;
    }
});
if(window.innerWidth <= BREAK_POINT_MD) { 
    // set a handler for the catalog button
    catalogBtn.onclick = catalogBtnHandler;
}

function catalogBtnHandler() {
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
    catalog.classList.toggle('catalog_active'); // ???
    // headerMobileMenu.classList.toggle('header__mobile-menu_active');
}

// bottom header container, menu button
btnMenuBtn.addEventListener('click', e => {
    const btnMenu = e.target.closest('.btn-menu__btn');
    if(!btnMenu) return;
    
    body.classList.toggle('lock');
    wrapper.classList.toggle('lock');
    // headerMobileMenu.classList.toggle('header__mobile-menu_active');

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
        topHeaderMenu.classList.toggle('top-header__menu_active');
        setMenuPosition();
        window.addEventListener('resize', setMenuPosition);
        const mobileWidthMediaQuery = window.matchMedia(`(max-width: ${BREAK_POINT_MD}px)`);
        // stop tracking position for mobile menu
        mobileWidthMediaQuery.addEventListener('change', (e) => {
            if(e.matches) window.addEventListener('resize', setMenuPosition);
            else window.removeEventListener('resize', setMenuPosition);
        });
    }
});
// set the correct position of the mobile menu
function setMenuPosition() {
    if(window.innerWidth <= BREAK_POINT_MD) {
        const {bottom} = getCoordsPageContext(topHeaderDa);
        const {top} = getCoordsPageContext(topHeaderMenuList);
        if(bottom != top) topHeaderMenuList.style.top = bottom + 'px';
    }
}
