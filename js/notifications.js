import { Route, ALERT_SHOW_TIME } from './constants.js';
import { registerPopup, unregisterPopup } from './popup-settings.js';

const templates = {
  success: document.querySelector('#success').content.querySelector('.success'),
  error: document.querySelector('#error').content.querySelector('.error')
};

const showDataErrorMessage = () => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorMessage = errorTemplate.cloneNode(true);

  errorMessage.querySelector('.data-error__title').textContent = Route.GET_DATA.error;

  document.body.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ALERT_SHOW_TIME);
};

const closePopupHandler = () => {
  const successPopup = document.querySelector('.success');
  const errorPopup = document.querySelector('.error');
  if (successPopup) {
    successPopup.remove();
  }

  if (errorPopup) {
    errorPopup.remove();
    document.body.classList.remove('modal-open');
  }
  unregisterPopup();
  document.removeEventListener('click', onClickOutside);
  document.body.classList.remove('modal-open');
};

const showPopup = (type) => {
  const existingPopup = document.querySelector('.success, .error');
  if (existingPopup) {
    existingPopup.remove();
  }
  const popupElement = templates[type].cloneNode(true);
  document.body.append(popupElement);
  if (type !== 'success') {
    document.body.classList.add('modal-open');
  }

  const closeButton = popupElement.querySelector(`.${type}__button`);
  if (closeButton) {
    closeButton.addEventListener('click', closePopupHandler);
  }

  registerPopup(closePopupHandler);
  document.addEventListener('click', onClickOutside);
};

function onClickOutside(evt) {
  if (
    evt.target.classList.contains('overlay') ||
    evt.target.classList.contains('success') ||
    evt.target.classList.contains('error')
  ) {
    closePopupHandler();
  }
}

export {
  showPopup,
  showDataErrorMessage
};
