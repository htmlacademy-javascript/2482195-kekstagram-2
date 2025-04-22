import {photosArray} from './create-photos-array.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

renderThumbnails(photosArray);

export { renderThumbnails };
