import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureTitle = bigPicture.querySelector('.social__caption');
const bigPictureCommentsShown = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentsTotal = bigPicture.querySelector('.social__comment-total-count');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');
const bigPictureCommentContainer = bigPicture.querySelector('.social__comments');
const bigPictureCommentLoader = bigPicture.querySelector('.social__comments-loader');
const commentCountBlock = document.querySelector('.social__comment-count');
const commentsLoaderBlock = document.querySelector('.comments-loader');

let currentCommentCount = 0;
const commentsToShowStep = 5;
let currentPhotoComments = [];

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderNextComments = () => {
  const nextComments = currentPhotoComments.slice(currentCommentCount, currentCommentCount + commentsToShowStep);
  const fragment = document.createDocumentFragment();
  nextComments.forEach((comment) => {
    fragment.appendChild(renderComment(comment));
  });
  bigPictureCommentContainer.appendChild(fragment);
  currentCommentCount += nextComments.length;
  bigPictureCommentsShown.textContent = currentCommentCount;
  if (currentCommentCount >= currentPhotoComments.length) {
    bigPictureCommentLoader.classList.add('hidden');
  } else {
    bigPictureCommentLoader.classList.remove('hidden');
  }
};

function onModalEscapeKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscapeKeyDown);
  bigPictureCommentContainer.innerHTML = '';
}

const reset = (picture) => {
  currentPhotoComments = [...picture.comments];
  commentCountBlock.classList.remove('hidden');
  commentsLoaderBlock.classList.remove('hidden');
  currentCommentCount = 0;
  bigPictureCommentContainer.innerHTML = '';
};

const render = (picture) => {
  bigPictureImage.src = picture.url;
  bigPictureLikes.textContent = picture.likes;
  bigPictureTitle.textContent = picture.description;
  bigPictureCommentsTotal.textContent = picture.comments.length;
  renderNextComments();
};

const show = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const openBigPhoto = (photo) => {
  reset(photo);
  render(photo);
  show();

  document.addEventListener('keydown', onModalEscapeKeyDown);
};

closeButton.addEventListener('click', closeBigPhoto);

bigPictureCommentLoader.addEventListener('click', () => {
  renderNextComments();
});

export { openBigPhoto };
