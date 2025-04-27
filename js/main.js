import { photosArray } from './create-photos-array.js';
import { renderThumbnails } from './thumbnails.js';
import { renderPhotos } from './render-photos.js';

// eslint-disable-next-line no-console
console.log(photosArray);

renderThumbnails(photosArray);
renderPhotos();
