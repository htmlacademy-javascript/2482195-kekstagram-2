import {photosArray} from './create-photos-array.js';
import { openBigPhoto } from './open-photos.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ id, url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);

  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const id = evt.target.closest('.picture').dataset.id;
      const picture = photos.find((item) => item.id === id * 1);
      openBigPhoto(picture);
    }
  });
};

renderThumbnails(photosArray);

export { renderThumbnails };
