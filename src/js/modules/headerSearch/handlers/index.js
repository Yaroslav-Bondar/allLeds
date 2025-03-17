import { getWidthDifference } from '../../../services/index.js';

import {
  MAX_WIDTH_768,
  bottomHeaderContainer,
  searchCityBtnContainer,
  searchCitySearch,
  searchCityClear,
  searchCitySearchContainer,
  searchCityClose,
} from '../../common/constants/index.js';

function handleWindowResizing() {
  if (window.innerWidth <= MAX_WIDTH_768) {
    // set search element width
    if (searchCitySearchContainer.dataset.openStatus === 'open') {
      searchCitySearchContainer.style.width = getWidthDifference(
        bottomHeaderContainer,
        searchCitySearchContainer,
      );
    }
    // hide clear button
    if (
      searchCityClear.classList.contains('search-city__clear_active') &&
      searchCitySearchContainer.dataset.openStatus === 'close'
    ) {
      searchCityClear.classList.remove('search-city__clear_active');
    }
    if (searchCitySearchContainer.getAttribute('data-open-status') === 'close') {
      searchCitySearch.classList.add('search-city__search_hide');
    }
  } else {
    searchCitySearchContainer.style.width = '';
    if (!searchCityClear.classList.contains('search-city__clear_active') && searchCitySearch.value) {
      searchCityClear.classList.add('search-city__clear_active');
    }
  }
}

function clearSearchInput() {
  searchCitySearch.value = '';
  searchCitySearch.focus();
  searchCityClear.classList.remove('search-city__clear_active');
}

function handleSearchClick(event) {
  const { openStatus } = searchCitySearchContainer.dataset;
  const closeBtn = event.target.closest('.search-city__close');
  const clearBtn = event.target.closest('.search-city__clear');
  // open search
  if (!closeBtn && openStatus === 'close' && window.innerWidth <= MAX_WIDTH_768) {
    searchCitySearchContainer.style.width = getWidthDifference(
      bottomHeaderContainer,
      searchCitySearchContainer,
    );
    searchCitySearchContainer.setAttribute('data-open-status', 'open');
    searchCityClose.classList.add('search-city__close_active');
    searchCityBtnContainer.classList.add('search-city__btn-container_active');
    searchCitySearch.classList.remove('search-city__search_hide');
    if (searchCitySearch.value) {
      searchCityClear.classList.add('search-city__clear_active');
    }
  }
  // close a search
  if (closeBtn && openStatus === 'open') {
    searchCitySearchContainer.style.width = '';
    searchCitySearchContainer.setAttribute('data-open-status', 'close');
    searchCityClose.classList.remove('search-city__close_active');
    searchCityBtnContainer.classList.remove('search-city__btn-container_active');
    searchCityClear.classList.remove('search-city__clear_active');
    searchCitySearch.classList.add('search-city__search_hide');
  }
  // clear search input
  if (clearBtn) {
    clearSearchInput();
  }
}

function handleSearchInput(e) {
  if (e.target.value) {
    searchCityClear.classList.add('search-city__clear_active');
  } else {
    searchCityClear.classList.remove('search-city__clear_active');
  }
}

export { handleSearchInput, handleSearchClick, handleWindowResizing };
