import { openBigPhoto } from './open-photos.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (pictures) => {
  pictures.forEach(({
    url,
    description,
    likes,
    comments
  }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImage = pictureElement.querySelector('.picture__img');

    pictureImage.src = url;
    pictureImage.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => {
      openBigPhoto({
        url,
        description,
        likes,
        comments
      });
    });

    picturesList.append(pictureElement);
  });
};

export {
  renderPhotos
};
