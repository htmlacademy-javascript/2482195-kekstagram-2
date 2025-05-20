import { RANDOM_PHOTOS_COUNT, DEBOUNCE_DELAY, FilterType } from './constants.js';
import { renderThumbnails, clearThumbnails } from './thumbnails.js';
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

const filterStrategies = {
  [FilterType.DEFAULT]: (photos) => [...photos],
  [FilterType.RANDOM]: (photos) => getRandomArrayItems(photos, RANDOM_PHOTOS_COUNT),
  [FilterType.DISCUSSED]: (photos) => [...photos].sort((a, b) => b.comments.length - a.comments.length),
};

const applyFilter = (filterId, photos) => {
  const strategy = filterStrategies[filterId] || filterStrategies[FilterType.DEFAULT];
  return strategy(photos);
};

const debouncedRender = debounce((filterId, photos) => {
  const filteredPhotos = applyFilter(filterId, photos);
  clearThumbnails();
  renderThumbnails(filteredPhotos);
}, DEBOUNCE_DELAY);

const initFilters = (photos) => {
  showFilters();
  renderThumbnails(photos);

  filterBlock.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      const selectedFilter = evt.target.id;
      setActiveFilterButton(evt.target);
      debouncedRender(selectedFilter, photos);
    }
  });
};

export { initFilters };

