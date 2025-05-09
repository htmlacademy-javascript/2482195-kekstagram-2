import { validateForm, resetValidation } from './validation.js';
import { resetScale } from './scale-editor.js';
import { resetEffects } from './filter-editor.js';

const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const previewImageElement = imageUploadModal.querySelector('.img-upload__preview img');
const effectPreviewIcons = imageUploadModal.querySelectorAll('.effects__preview');
const cancelUploadButton = document.querySelector('.img-upload__cancel');
const uploadFormElement = document.querySelector('.img-upload__form');

const updateImagePreview = () => {
  const fileImage = imageUploadInput.files[0];
  previewImageElement.src = URL.createObjectURL(fileImage);
  effectPreviewIcons.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const openUploadModal = () => {
  imageUploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  updateImagePreview();

  document.addEventListener('keydown', onClickEsc);
  imageUploadModal.addEventListener('click', onClickOutside);

  resetEffects();

  resetScale();

};

const closeUploadModal = () => {
  imageUploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  resetValidation();

  uploadFormElement.reset();

  resetEffects();

  document.removeEventListener('keydown', onClickEsc);
  imageUploadModal.removeEventListener('click', onClickOutside);
};

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    closeUploadModal();
  }
});

imageUploadInput.addEventListener('change', () => {
  openUploadModal();
});

cancelUploadButton.addEventListener('click', () => {
  closeUploadModal();
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (evt.key === 'Escape') {
    closeUploadModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeUploadModal();
  }
}
