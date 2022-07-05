const constRoot = require('../constants/root.js');
const helpers = require('../helper/helpers.js');

const BREAK_POINT_MD = constRoot.BREAK_POINT_MD;
const headerCartRow = constRoot.headerCartRow;
const btnMenuBtn = constRoot.btnMenuBtn;
const bottomHeaderContainer = constRoot.bottomHeaderContainer;
const searchCityInput = constRoot.searchCityInput;
const widthDiff = helpers.widthDiff;
const searchCityClear = constRoot.searchCityClear;
const searchCitySearch = constRoot.searchCitySearch;
const searchCityClose = constRoot.searchCityClose;
const searchCityBtn = constRoot.searchCityBtn;
let currentInnerWidth = window.innerWidth;
let searchCityInputWidth; 
// set search handlers 
searchCitySearch.addEventListener('click', searchClickHandler);  
searchCityInput.addEventListener('input', searchInputHandler);
// when a page is loading
if(window.innerWidth <= BREAK_POINT_MD) {
    // searchCityInputWidth width calculation
    searchCitySearchWidth = widthDiff(bottomHeaderContainer, searchCitySearch);
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
         searchCityBtn.classList.add('search-city__btn_active');
         if(searchCityInput.value) {
             searchCityClear.classList.add('search-city__clear_active');
         }
     }
     // close a search
     if(isClose && openStatus === 'open') {
         searchCitySearch.style.width = ''; 
         searchCitySearch.setAttribute('data-open-status', 'close');
         searchCityClose.classList.remove('search-city__close_active');
         searchCityBtn.classList.remove('search-city__btn_active');
         searchCityClear.classList.remove('search-city__clear_active');
     }
     // clear search input
     if(isClear && openStatus === 'open') {
         searchCityInput.value = '';
         searchCityInput.focus();
         event.target.classList.remove('search-city__clear_active');
     }
     // else if(searchCitySearch.dataset.openStatus === 'open') {
     //     console.log(searchCitySearch.dataset.openStatus);   
     //     searchCitySearch.style.width = '';
     // }
     // e.target.style.width = searchCityInputWidth;
}
function searchInputHandler(e) {
    // show/hide clear button
    if(e.target.value) {
        searchCityClear.classList.add('search-city__clear_active');
    } else {
        searchCityClear.classList.remove('search-city__clear_active');
    }
} 
