// imports
const {BREAK_POINT_MD,
    isBreakPointMd,
    wrapper,
    searchCitySearch,
    topHeaderMenu,
    catalogMenuContainer,
    headerUpper,
    menuContainer} = require('../constants/root.js');

const {verticalAlign} = require('../helper/helpers.js');
// local variables
// dom elements
const catalogBtn = document.querySelector('.catalog-menu__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const burgerLine = btnMenuBtn.querySelector('.burger__line');
// const catalog = document.querySelector('.catalog');
let contactsHeaderPhoneMenu; 

isBreakPointMd.addEventListener('change', e => {
    if(e.matches) {
        // set a handler for the catalog menu button
        if(!catalogBtn.onclick) catalogBtn.onclick = catalogBtnHandler;
    }
    else {
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
    // if the product catalog menu close mode (show/hide catalog menu)
    if(btnMenu.classList.contains('btn-menu__btn_catalog')) {
        catalogMenuContainer.classList.remove('catalog-menu__container_active');
        btnMenu.classList.toggle('btn-menu__btn_catalog');   
    } else {  // if mobile menu mode (show/hide mobile menu)
        topHeaderMenu.classList.toggle('top-header__menu_active');
        if(topHeaderMenu.classList.contains('top-header__menu_active')) {
            // The order in which the functions should run should be:
            // 1 setMenuPadding
            // 2 setMenuPosition
            // Otherwise, the mobile menu will not display correctly.
            setMenuPadding(headerUpper, menuContainer);
            setMenuPosition();
            window.addEventListener('resize', launchSetMenuPadding);
            window.addEventListener('resize', setMenuPosition);
            // stop tracking position for mobile menu
            isBreakPointMd.addEventListener('change', e => {
                console.log('e.matches', e.matches);
                if(e.matches) {
                    window.addEventListener('resize', launchSetMenuPadding);
                    window.addEventListener('resize', setMenuPosition);
                } else {
                    window.removeEventListener('resize', launchSetMenuPadding);
                    window.removeEventListener('resize', setMenuPosition);
                }
            });
        }
    }
});
// set the correct position of the mobile menu
const setMenuPosition = verticalAlign('top-header__da', 'top-header__menu-list');
const setMenuPadding = (elementA, elementB) => {
    console.log('start setMenuPadding')
    const height = elementA.offsetHeight;
    let {paddingTop} = getComputedStyle(elementB);
    paddingTop = paddingTop.match(/\d+/)[0];
    if(height != paddingTop) elementB.style.paddingTop = height + 'px';
}
// to correctly add/remove Eventlistener
function launchSetMenuPadding() {
    setMenuPadding(headerUpper, menuContainer);    
}


