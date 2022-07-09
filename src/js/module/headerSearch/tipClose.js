// imports
const helpers = require('../helper/helpers.js');
const constRoot = require('../constants/root.js');
// dom elements
const searchCityClose = constRoot.searchCityClose;
// functions
const createHint = helpers.createHint;
// create hint
const closeHint = createHint(searchCityClose, 'search-city__close-hint', 'close', {y: -14, x: 0});
// set hint
searchCityClose.addEventListener('mouseover', () => {
    document.body.append(closeHint());
});
// hide hint
searchCityClose.addEventListener('mouseout', () => {
    closeHint().remove();
});

