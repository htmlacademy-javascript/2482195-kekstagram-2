import { sendPhotos } from './api.js';
import { validateForm, resetValidation } from './validation.js';
import { resetScale } from './scale-editor.js';
import { resetEffects } from './filter-editor.js';
import { SUBMIT_BUTTON_TEXT } from './constants.js';
import { showPopup } from './notifications.js';

const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const previewImageElement = imageUploadModal.querySelector('.img-upload__preview img');
const effectPreviewIcons = imageUploadModal.querySelectorAll('.effects__preview');
const cancelUploadButton = document.querySelector('.img-upload__cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const setSubmitButtonState = (state) => {
  if (state === 'sending') {
    submitButton.disabled = true;
    submitButton.textContent = SUBMIT_BUTTON_TEXT.SENDING;
  } else {
    submitButton.disabled = false;
    submitButton.textContent = SUBMIT_BUTTON_TEXT.IDLE;
  }
};

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

  document.addEventListener('keydown', onEscapeForm);
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

  document.removeEventListener('keydown', onEscapeForm);
  imageUploadModal.removeEventListener('click', onClickOutside);
};

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    setSubmitButtonState('sending');

    sendPhotos(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          showPopup('success');
          closeUploadModal();
        } else {
          showPopup('error');
        }
      })
      .catch(() => {
        showPopup('error');
      })
      .finally(() => {
        setSubmitButtonState('idle');
      });
  }
});

imageUploadInput.addEventListener('change', () => {
  openUploadModal();
});

cancelUploadButton.addEventListener('click', () => {
  closeUploadModal();
});

function onEscapeForm(evt) {
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

export { onEscapeForm };
