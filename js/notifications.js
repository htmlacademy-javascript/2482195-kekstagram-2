import { onEscapeForm } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closePopupHandler = () => {
  document.querySelector('.popup').remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onClickOutside);
  document.addEventListener('keydown', onEscapeForm);
  document.body.classList.remove('modal-open');
};

const showSuccessPopup = () => {
  const successPopup = successTemplate.cloneNode(true);
  document.body.append(successPopup);
  successPopup.classList.add('popup');
  document.body.classList.add('modal-open');

  const closeButton = document.querySelector('.success__button');
  closeButton.addEventListener('click', closePopupHandler);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);
};

const showErrorPopup = () => {
  const errorPopup = errorTemplate.cloneNode(true);
  document.body.append(errorPopup);
  errorPopup.classList.add('popup');
  document.body.classList.add('modal-open');
};

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopupHandler();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closePopupHandler();
  }
}

export {
  showSuccessPopup,
  showErrorPopup
};
