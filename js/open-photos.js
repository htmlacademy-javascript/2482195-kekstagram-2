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

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentContainer.innerHTML = '';
  bigPictureCommentContainer.append(fragment);
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
}

const openBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureTitle.textContent = photo.description;

  const commentsCount = photo.comments.length;
  bigPictureCommentsShown.textContent = commentsCount;
  bigPictureCommentsTotal.textContent = commentsCount;

  renderComments(photo.comments);

  const commentCountBlock = document.querySelector('.social__comment-count');
  const commentsLoaderBlock = document.querySelector('.comments-loader');

  commentCountBlock.classList.add('hidden');
  commentsLoaderBlock.classList.add('hidden');

  document.addEventListener('keydown', onModalEscapeKeyDown);
};

closeButton.addEventListener('click', closeBigPhoto);

export { openBigPhoto };
