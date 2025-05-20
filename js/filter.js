import { RANDOM_PHOTOS_COUNT, DEBOUNCE_DELAY } from './constants.js';
import { renderThumbnails } from './thumbnails.js';
import { debounce, getRandomArrayItems } from './util.js';

const filterBlock = document.querySelector('.img-filters');

const showFilters = () => {
  filterBlock.classList.remove('img-filters--inactive');
};

const setActiveFilterButton = (clickedButton) => {
  const currentActive = document.querySelector('.img-filters__button--active');
  if (currentActive) {
    currentActive.classList.remove('img-filters__button--active');
  }
  clickedButton.classList.add('img-filters__button--active');
};

const applyFilter = (filterId, photos) => {
  switch (filterId) {
    case 'filter-default':
      return [...photos];

    case 'filter-random':
      return getRandomArrayItems(photos, RANDOM_PHOTOS_COUNT);

    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);

    default:
      return [...photos];
  }
};

const initFilters = (photos) => {
  showFilters();
  renderThumbnails(photos);

  filterBlock.addEventListener('click', debounce((evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const selectedFilter = evt.target.id;
      const filteredPhotos = applyFilter(selectedFilter, photos);

      renderThumbnails(filteredPhotos);
      setActiveFilterButton(evt.target);
    }
  }, DEBOUNCE_DELAY));
};

export { initFilters };

