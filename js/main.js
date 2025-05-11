import { photosArray } from './create-photos-array.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';
import './scale-editor.js';
import { getPhotos } from './api.js';

// eslint-disable-next-line no-console
console.log(photosArray);

renderThumbnails(photosArray);
getPhotos()
  .then((photos) => {
    renderThumbnails(photos);
  });
