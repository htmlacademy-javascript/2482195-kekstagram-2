import { isEscapeKey } from './util.js';

const userModalPhoto = document.querySelector('.big-picture');
const userModalClosePhoto = userModalPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentTemplate = document.querySelector('#social-comment').content;
const commentSection = userModalPhoto.querySelector('.social__comments');
const pictureImg = userModalPhoto.querySelector('.big-picture__img img');

const clearComments = () => {
  commentSection.innerHTML = '';
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach(({ avatar, message, name }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const socialPicture = commentElement.querySelector('.social__picture');
    socialPicture.src = avatar;
    socialPicture.alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsFragment.append(commentElement);
  });
  commentSection.append(commentsFragment);
};

const renderBigPhoto = ({ url, description, likes, comments }) => {
  pictureImg.src = url;
  pictureImg.alt = description;
  userModalPhoto.querySelector('.likes-count').textContent = likes;
  userModalPhoto.querySelector('.social__caption').textContent = description;

  clearComments();
  renderComments(comments);


  userModalPhoto.querySelector('.social__comment-count').classList.add('hidden');
  userModalPhoto.querySelector('.comments-loader').classList.add('hidden');
};

const closeBigPhoto = () => {
  clearComments();
  userModalPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
};

function onEscapeKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
}

const openBigPhoto = ({ url, description, likes, comments }) => {
  userModalPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  renderBigPhoto({ url, description, likes, comments });

  document.addEventListener('keydown', onEscapeKeyDown);

  userModalClosePhoto.addEventListener('click', closeBigPhoto);
};

// Экспортируем функции для использования в других модулях
export { openBigPhoto };
