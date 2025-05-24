import { sendPhotos } from './api.js';
import { validateForm, resetValidation } from './validation.js';
import { resetScale } from './scale-editor.js';
import { resetEffects } from './effect-editor.js';
import { SUBMIT_BUTTON_TEXT, SUBMISSION_STATE, POPUP_TYPE, FILE_TYPES, FILE_ERROR_MESSAGE } from './constants.js';
import { showPopup } from './notifications.js';
import { registerPopup, unregisterPopup } from './popup-settings.js';

const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const previewImageElement = imageUploadModal.querySelector('.img-upload__preview img');
const effectPreviewIcons = imageUploadModal.querySelectorAll('.effects__preview');
const cancelUploadButton = document.querySelector('.img-upload__cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const setSubmitButtonState = (state) => {
  if (state === SUBMISSION_STATE.SENDING) {
    requestAnimationFrame(() => {
      submitButton.setAttribute('disabled', 'true');
      submitButton.textContent = SUBMIT_BUTTON_TEXT.SENDING;
    });
  } else {
    submitButton.disabled = false;
    submitButton.removeAttribute('disabled');
    submitButton.textContent = SUBMIT_BUTTON_TEXT.IDLE;
  }
};

const updateImagePreview = () => {
  const fileImage = imageUploadInput.files[0];
  const fileName = fileImage.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const imageURL = URL.createObjectURL(fileImage);
    previewImageElement.src = imageURL;

    effectPreviewIcons.forEach((icon) => {
      icon.style.backgroundImage = `url('${imageURL}')`;
    });

    imageUploadModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  } else {
    showPopup(POPUP_TYPE.ERROR, FILE_ERROR_MESSAGE);
    uploadFormElement.reset();
  }
};

const openUploadModal = () => {
  updateImagePreview();
  imageUploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // document.addEventListener('keydown', onEscapeForm);
  registerPopup(closeUploadModal);
  imageUploadModal.addEventListener('click', onClickOutside);

  resetEffects();
  resetScale();
  resetValidation();

};

imageUploadInput.addEventListener('change', openUploadModal);

function closeUploadModal() {
  imageUploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  resetValidation();
  uploadFormElement.reset();
  resetEffects();
  resetScale();

  previewImageElement.src = '';
  effectPreviewIcons.forEach((icon) => {
    icon.style.backgroundImage = '';
  });
  unregisterPopup();
  imageUploadModal.removeEventListener('click', onClickOutside);
}

uploadFormElement.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    setSubmitButtonState(SUBMISSION_STATE.SENDING);

    await Promise.resolve();

    sendPhotos(new FormData(evt.target))
      .then(() => {
        closeUploadModal();
        showPopup(POPUP_TYPE.SUCCESS);
      })
      .catch(() => {
        showPopup(POPUP_TYPE.ERROR);
      })
      .finally(() => {
        setSubmitButtonState(SUBMISSION_STATE.IDLE);
      });
  }
});

cancelUploadButton.addEventListener('click', () => {
  closeUploadModal();
});

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeUploadModal();
  }
}
