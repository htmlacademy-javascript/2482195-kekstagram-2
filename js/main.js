import { getPhotos } from './api.js';
import { initFilters } from './filter.js';
import './form.js';
import './scale-editor.js';
import { showDataErrorMessage } from './notifications.js';

getPhotos()
  .then((photos) => {
    initFilters(photos);
  })
  .catch(() => {
    showDataErrorMessage('err');
  });
