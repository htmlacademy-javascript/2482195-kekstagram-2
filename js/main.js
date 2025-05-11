import { getPhotos } from './api.js';
import { renderThumbnails } from './thumbnails.js';
import './form.js';
import './scale-editor.js';

getPhotos()
  .then((photos) => {
    renderThumbnails(photos);
  });
