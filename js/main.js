import { photosArray } from './create-photos-array.js';
import { renderThumbnails } from './thumbnails.js';
import { openBigPhoto } from './open-photos.js';

// eslint-disable-next-line no-console
console.log(photosArray);

renderThumbnails(photosArray);
openBigPhoto();
