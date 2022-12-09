// imports
const {BREAK_POINT_MD,
    isBreakPointMd,
    wrapper,
    searchCitySearch,
    catalogMenuContainer,
    headerUpper,
    menuContainer} = require('../constants/root.js');

const {verticalAlign,
        setPaddingBasedOnHeight,
        resetStyleProperty} = require('../helper/helpers.js');

// local variables
// dom elements
const catalogBtn = document.querySelector('.catalog-menu__btn');
const btnMenuBtn = document.querySelector('.btn-menu__btn');
const burgerLine = btnMenuBtn.querySelector('.burger__line');
let contactsHeaderPhoneMenu;
let mobileMenuContainer; 
let catalogMenu;
let topHeaderMenu;
let topHeaderMenuContainer;
let isListenerMobileMenuPadding = false;
let isListenerMobileMenuHeight = false;
let isListenerMobileCatalogHeight = false;

isBreakPointMd.addEventListener('change', e => {
    if(e.matches) {
        // set a handler for the catalog menu button
        if(!catalogBtn.onclick) catalogBtn.onclick = catalogBtnHandler;
        // show mobileMenuContainer (catalog mode)
        if(btnMenuBtn.getAttribute('data-mode') == 'catalog') {
            mobileMenuContainer.append(catalogMenuContainer);
            catalogMenuContainer.classList.add('catalog-menu__container_active');
            // mobile menu padding setup
            setTimeout(() => {
                // asynchronous execution to get correct metrics
                launchSetMobileMenuPadding();
                launchSetMobileCatalogHeight();
                scrollToTop();
                body.classList.add('lock');
            });
            setListenerMobileMenuPadding();
            setListenerMobileCatalogHeight();
            mobileMenuContainer.classList.add('mobile-menu__container_active');
        }
        // show mobileMenuContainer (menu mode)
        if(btnMenuBtn.dataset.mode == 'menu') {
            mobileMenuContainer.prepend(topHeaderMenu);
            topHeaderMenu.classList.add('top-header__menu_active');
            // asynchronous execution to get correct metrics
            setTimeout(() => {
                // mobile menu padding setup
                launchSetMobileMenuPadding();
                // mobile menu height setup
                launchSetMobileMenuHeight();
                scrollToTop();
                body.classList.add('lock');
            });
            setListenerMobileMenuPadding();
            setListenerMobileMenuHeight();
            mobileMenuContainer.classList.add('mobile-menu__container_active');
        }
    } else {
        // remove the handler for the catalog menu button
        if(catalogBtn.onclick) catalogBtn.onclick = null;
        // remove active status for mobileMenuContainer elements
        if(catalogMenuContainer.classList.contains('catalog-menu__container_active'))
            catalogMenuContainer.classList.remove('catalog-menu__container_active');
        if(topHeaderMenu && topHeaderMenu.classList.contains('top-header__menu_active'))
            topHeaderMenu.classList.remove('top-header__menu_active');
        // untracking setting padding for mobile menu
        if(isListenerMobileMenuPadding) removeListenerMobileMenuPadding();
        // untracking setting height for mobile menu
        if(isListenerMobileMenuHeight) removeListenerMobileMenuHeight();
        // untracking setting height for catalog menu
        if(isListenerMobileCatalogHeight) removeListenerMobileCatalogHeight();
        // hide mobileMenuContainer 
        if(mobileMenuContainer && mobileMenuContainer.classList.contains('mobile-menu__container_active')) 
            mobileMenuContainer.classList.remove('mobile-menu__container_active');
        if(body.classList.contains('lock')) body.classList.remove('lock');
        // move catalogMenuContainer --> catalogMenu
        resetMobileCatalogHeight();
        if(mobileMenuContainer && mobileMenuContainer.contains(catalogMenuContainer)) {
            if(!catalogMenu) {
                catalogMenu = document.querySelector('.catalog-menu');
            }
            catalogMenu.append(catalogMenuContainer);
        }
        // move topHeaderMenu --> topHeaderMenuContainer
        resetMobileMenuHeight();
        if(topHeaderMenu && mobileMenuContainer && mobileMenuContainer.contains(topHeaderMenu)) {
            if(!topHeaderMenuContainer)
                topHeaderMenuContainer = document.querySelector('.top-header__menu-container');
            topHeaderMenuContainer.prepend(topHeaderMenu);    
        }
    }
});
// set hendlers
if(window.innerWidth <= BREAK_POINT_MD) { 
    // set a handler for the catalog menu button
    catalogBtn.onclick = catalogBtnHandler;
}
btnMenuBtn.addEventListener('click', btnMenuHandler);

// hendlers
function catalogBtnHandler() {
    toggleElementState();
     // create a mobile menu container 
    if(!mobileMenuContainer) {
        createMobileMenuContainer();
    }
    // hide mobile menu items
    if(topHeaderMenu && mobileMenuContainer.contains(topHeaderMenu) && topHeaderMenu.classList.contains('top-header__menu_active'))
        topHeaderMenu.classList.remove('top-header__menu_active');    
    // show mobile menu items
    if(!mobileMenuContainer.contains(catalogMenuContainer)) 
        mobileMenuContainer.append(catalogMenuContainer);
    if(!catalogMenuContainer.classList.contains('catalog-menu__container_active')) 
        catalogMenuContainer.classList.add('catalog-menu__container_active');
    // set metrics
    launchSetMobileMenuPadding();
    if(!isListenerMobileMenuPadding) setListenerMobileMenuPadding();
    launchSetMobileCatalogHeight();
    setListenerMobileCatalogHeight();
    // show mobile menu
    mobileMenuContainer.classList.add('mobile-menu__container_active');
    // set the catalog mode of the product catalog menu
    btnMenuBtn.setAttribute('data-mode', 'catalog');
    body.classList.add('lock');
}

function btnMenuHandler() {
    toggleElementState();
    // close catalog menu or mobile menu
    if(this.dataset.mode == 'catalog' || this.dataset.mode == 'menu') {
        closeMobileMenu.call(this);
    } // show mobile menu
    else if(this.getAttribute('data-mode') == 'close') {
        // create the mobile menu
        if(!mobileMenuContainer) {
            createMobileMenuContainer();
        }
        // insert mobile menu items
        if(!topHeaderMenu) topHeaderMenu = document.querySelector('.top-header__menu');
        if(!topHeaderMenu.classList.contains('top-header__menu_active'))
            topHeaderMenu.classList.add('top-header__menu_active');
        if(!mobileMenuContainer.contains(topHeaderMenu))
            mobileMenuContainer.append(topHeaderMenu);
        // hide items
        if(mobileMenuContainer.contains(catalogMenuContainer) && catalogMenuContainer.classList.contains('catalog-menu__container_active'))
            catalogMenuContainer.classList.remove('catalog-menu__container_active');
        // show mobile menu
        launchSetMobileMenuPadding();
        if(!isListenerMobileMenuPadding) setListenerMobileMenuPadding();
        launchSetMobileMenuHeight();
        if(!isListenerMobileMenuHeight) setListenerMobileMenuHeight();
        mobileMenuContainer.classList.add('mobile-menu__container_active');
        body.classList.add('lock');
        // change button mode
        this.setAttribute('data-mode', 'menu');
    }
}

function createMobileMenuContainer() {
    mobileMenuContainer = document.createElement('div');
    mobileMenuContainer.className = 'mobile-menu__container';
    body.prepend(mobileMenuContainer);
}
function closeMobileMenu() {
    mobileMenuContainer.classList.remove('mobile-menu__container_active');
    if(isListenerMobileMenuPadding) removeListenerMobileMenuPadding();
    if(isListenerMobileMenuHeight) removeListenerMobileMenuHeight();
    if(isListenerMobileCatalogHeight) removeListenerMobileCatalogHeight();
    body.classList.remove('lock');
    this.setAttribute('data-mode', 'close');    
}
function toggleElementState() {
    if(!contactsHeaderPhoneMenu) {
        contactsHeaderPhoneMenu = document.querySelector('.contacts-header__phone-menu');
    }
    // toggle z-index for phone menu
    contactsHeaderPhoneMenu.classList.toggle('contacts-header__phone-menu_over');
    // toggle z-index for search
    searchCitySearch.classList.toggle('search-city__search_over');
    burgerLine.classList.toggle('burger__line_active');
}

function setMobileMenuHeight(elementClassName) {
    const element = document.querySelector(`.${elementClassName}`);
    return function() {
        const windowHeight = document.documentElement.clientHeight;
        const {top, bottom} = element.getBoundingClientRect();
        if(bottom != windowHeight && top < windowHeight) {
            element.style.height = windowHeight - top + 'px';
        } 
    }
}
// set mobile menu height
const launchSetMobileMenuHeight = setMobileMenuHeight('top-header__menu-list');

function setListenerMobileMenuHeight() {
    window.addEventListener('resize', launchSetMobileMenuHeight);
    isListenerMobileMenuHeight = true;
}

function removeListenerMobileMenuHeight() {
    window.removeEventListener('resize', launchSetMobileMenuHeight);
    isListenerMobileMenuHeight = false;
}

const resetMobileMenuHeight = resetStyleProperty('top-header__menu-list', 'height');

// set mobile catalog height
const launchSetMobileCatalogHeight = setMobileMenuHeight('catalog-menu__item');

function setListenerMobileCatalogHeight() {
    window.addEventListener('resize', launchSetMobileCatalogHeight);
    isListenerMobileCatalogHeight = true;
}

function removeListenerMobileCatalogHeight() {
    window.removeEventListener('resize', launchSetMobileCatalogHeight);
    isListenerMobileCatalogHeight = false;
}

const resetMobileCatalogHeight = resetStyleProperty('catalog-menu__item', 'height');


// set mobile menu padding
const setMobileMenuPadding = setPaddingBasedOnHeight();
// to correctly add/remove Eventlistener
function launchSetMobileMenuPadding() {
    setMobileMenuPadding(headerUpper, mobileMenuContainer);
}
function setListenerMobileMenuPadding() {
    window.addEventListener('resize', launchSetMobileMenuPadding);
    isListenerMobileMenuPadding = !isListenerMobileMenuPadding;    
}
function removeListenerMobileMenuPadding() {
    window.removeEventListener('resize', launchSetMobileMenuPadding);
    isListenerMobileMenuPadding = !isListenerMobileMenuPadding;    
}
function scrollToTop() {
    if(window.pageYOffset) window.scrollTo(0,0);
}



