// imports
const {topHeaderMenu,
    searchCitySearch,
    wrapper,
    topHeaderMenuList,
    topHeaderDa,
    catalogMenuContainer,
    BREAK_POINT_MD,} = require('../constants/root.js');

const {getCoordsPageContext} = require('../helper/helpers.js');
// dom elements
const catalogBtn = document.querySelector('.catalog-menu__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const burgerLine = btnMenuBtn.querySelector('.burger__line');
// const catalog = document.querySelector('.catalog');
// local variables
let contactsHeaderPhoneMenu; 

window.addEventListener('resize', ()=> {
    if(window.innerWidth <= BREAK_POINT_MD) {
        // set a handler for the catalog menu button
        if(!catalogBtn.onclick) catalogBtn.onclick = catalogBtnHandler;
    } else {
        // remove the handler for the catalog menu button
        if(catalogBtn.onclick) catalogBtn.onclick = null;
    }
});
if(window.innerWidth <= BREAK_POINT_MD) { 
    // set a handler for the catalog menu button
    catalogBtn.onclick = catalogBtnHandler;
}

function catalogBtnHandler() {
    if(!contactsHeaderPhoneMenu) {
        contactsHeaderPhoneMenu = document.querySelector('.contacts-header__phone-menu');
    }
    // toggle z-index for phone menu
    contactsHeaderPhoneMenu.classList.toggle('contacts-header__phone-menu_over');
    // toggle z-index for search
    searchCitySearch.classList.toggle('search-city__search_over');
    burgerLine.classList.toggle('burger__line_active');
    // set the closing mode of the product catalog menu
    btnMenuBtn.classList.toggle('btn-menu__btn_catalog');    
    catalogMenuContainer.classList.toggle('catalog-menu__container_active');
    body.classList.toggle('lock');
    // headerMobileMenu.classList.toggle('header__mobile-menu_active');
}

// bottom header container, menu button
btnMenuBtn.addEventListener('click', e => {
    const btnMenu = e.target.closest('.btn-menu__btn');
    if(!btnMenu) return;
    
    body.classList.toggle('lock');
    // wrapper.classList.toggle('lock');
    // headerMobileMenu.classList.toggle('header__mobile-menu_active');
    if(!contactsHeaderPhoneMenu) {
        contactsHeaderPhoneMenu = document.querySelector('.contacts-header__phone-menu');
    }
    // toggle z-index for phone menu
    contactsHeaderPhoneMenu.classList.toggle('contacts-header__phone-menu_over');
    // toggle z-index for search
    searchCitySearch.classList.toggle('search-city__search_over');
    burgerLine.classList.toggle('burger__line_active');
    // if the product catalog menu close mode
    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {
        catalogMenuContainer.classList.remove('catalog-menu__container_active');
        btnMenu.classList.toggle('btn-menu__btn_catalog');   
    } else {  // if mobile menu mode (show/hide mobile menu)
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
