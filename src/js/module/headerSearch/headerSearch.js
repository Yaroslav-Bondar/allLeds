// imports
require('./tipClose.js');
const {
    // constants
    BREAK_POINT_MD,
    // dom elements
    headerCartRow,
    btnMenuBtn,
    bottomHeaderContainer,
    searchCityBtnContainer,
    searchCityInput,
    searchCityClear,
    searchCitySearch,
    searchCityClose,
} = require('../constants/root.js');
// functions
const {widthDiff} = require('../helper/helpers.js');
// local variables 
let currentInnerWidth = window.innerWidth;
let searchCitySearchWidth;
// set search handlers 
searchCitySearch.addEventListener('click', searchClickHandler);  
searchCityInput.addEventListener('input', searchInputHandler);
// when a page is loading
if(window.innerWidth <= BREAK_POINT_MD) {
    // searchCitySearchWidth width calculation
    searchCitySearchWidth = widthDiff(bottomHeaderContainer, searchCitySearch);
    if(searchCitySearch.getAttribute('data-open-status') === 'close') {
        searchCityInput.classList.add('search-city__input_hide');
    }
} else {
    // show search clear button
    if(searchCityInput.value) {
        searchCityClear.classList.add('search-city__clear_active');
    }
}
// when the page is resized
window.addEventListener('resize', () => {
    currentInnerWidth = window.innerWidth;
    if(window.innerWidth <= BREAK_POINT_MD) {
        // searchCitySearch width calculation 
        searchCitySearchWidth = widthDiff(bottomHeaderContainer, searchCitySearch);
        // document.activeElement === searchCityInput &&
        // set search element width 
        if(searchCitySearch.dataset.openStatus === 'open') {
            searchCitySearch.style.width = searchCitySearchWidth; 
        }
        // hide clear button
        if(searchCityClear.classList.contains('search-city__clear_active') && searchCitySearch.dataset.openStatus === 'close') {
            searchCityClear.classList.remove('search-city__clear_active');
        }
        // hide content in search input element
        if(searchCitySearch.getAttribute('data-open-status') === 'close') {
            searchCityInput.classList.add('search-city__input_hide');
        }  
    } else {
        searchCitySearch.style.width = '';
        // show clear button
        if(!searchCityClear.classList.contains('search-city__clear_active') && searchCityInput.value) {
            searchCityClear.classList.add('search-city__clear_active');
        }  
    }
});
function searchClickHandler(event) {
    const openStatus = searchCitySearch.dataset.openStatus;  
    const isClose = event.target.closest('.search-city__close');
    const isClear = event.target.closest('.search-city__clear');
    // open search
    if(!isClose && openStatus === 'close' && currentInnerWidth <= BREAK_POINT_MD) {
        searchCitySearch.style.width = searchCitySearchWidth;
        searchCitySearch.setAttribute('data-open-status', 'open');
        searchCityClose.classList.add('search-city__close_active');
        searchCityBtnContainer.classList.add('search-city__btn-container_active');
        searchCityInput.classList.remove('search-city__input_hide');
        if(searchCityInput.value) {
            searchCityClear.classList.add('search-city__clear_active');
        }
    }
     // close a search
    if(isClose && openStatus === 'open') {
        searchCitySearch.style.width = ''; 
        searchCitySearch.setAttribute('data-open-status', 'close');
        searchCityClose.classList.remove('search-city__close_active');
        searchCityBtnContainer.classList.remove('search-city__btn-container_active');
        searchCityClear.classList.remove('search-city__clear_active');
        searchCityInput.classList.add('search-city__input_hide');
    }
     // clear search input
    if(isClear) {
        searchCityInput.value = '';
        searchCityInput.focus();
        event.target.classList.remove('search-city__clear_active');
    }
}
function searchInputHandler(e) {
    // show/hide clear button
    if(e.target.value) {
        searchCityClear.classList.add('search-city__clear_active');
    } else {
        searchCityClear.classList.remove('search-city__clear_active');
    }
} 
