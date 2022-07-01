const constRoot = require('../constants/root.js');
const helpers = require('../helper/helpers.js');

const BREAK_POINT_MD = constRoot.BREAK_POINT_MD;
const headerCartRow = constRoot.headerCartRow;
const btnMenuBtn = constRoot.btnMenuBtn;
const searchCityInput = constRoot.searchCityInput;
const bottomHeaderContainer = constRoot.bottomHeaderContainer;
const widthDiff = helpers.widthDiff;

let searchCityInputWidth; 

// when a page is loading
if(window.innerWidth <= BREAK_POINT_MD) {
    // searchCityInputWidth width calculation    
    searchCityInputWidth = widthDiff(bottomHeaderContainer, searchCityInput);
     // set onfocus and onblur for searchCityInput
    setHandlers();
}
// when the page is resized
window.addEventListener('resize', () => {
    if(window.innerWidth <= BREAK_POINT_MD) {
        // searchCityInputWidth width calculation    
        searchCityInputWidth = widthDiff(bottomHeaderContainer, searchCityInput);
        // calculating appropriate width on browser window width change and focus
        if(document.activeElement === searchCityInput)
            searchCityInput.style.width = searchCityInputWidth; 
        // set onfocus and onblur for searchCityInput
        setHandlers();
    }
});
// set onfocus and onblur for searchCityInput
function setHandlers() {
    // set onfocus
    if(!searchCityInput.onfocus) {
        searchCityInput.onfocus = (e) => {
            e.target.style.width = searchCityInputWidth;
        }
    }
    // set onblur
    if(!searchCityInput.onblur) {
        searchCityInput.onblur = (e) => {
            e.target.style.width = '';
        }
    }
}