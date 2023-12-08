import {
  handleSearchInput,
  handleSearchClick,
  handleWindowResizing,
} from './handlers/index.js';

import {
  searchCitySearchContainer,
  searchCitySearch,
  MAX_WIDTH_768,
  searchCityClear,
} from '../common/constants/index.js';

window.addEventListener('resize', handleWindowResizing);

searchCitySearchContainer.addEventListener('click', handleSearchClick);
searchCitySearch.addEventListener('input', handleSearchInput);

if (window.innerWidth <= MAX_WIDTH_768) {
  if (searchCitySearchContainer.getAttribute('data-open-status') === 'close') {
    searchCitySearch.classList.add('search-city__search_hide');
  }
} else if (searchCitySearch.value) {
  searchCityClear.classList.add('search-city__clear_active');
}
