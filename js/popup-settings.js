import { isEscapeKey } from './util.js';

const popupClosers = [];

function onKeydown(evt) {
  const activeElement = document.activeElement;

  const isHashtagsOrCommentInput =
    activeElement.classList.contains('text__hashtags') || activeElement.classList.contains('text__description');

  if (isEscapeKey(evt) && !isHashtagsOrCommentInput && popupClosers.length) {
    evt.preventDefault();
    const last = popupClosers[popupClosers.length - 1];
    if (typeof last === 'function') {
      last();
    }
  }
}

export function registerPopup(closeCallback) {
  popupClosers.push(closeCallback);
  if (popupClosers.length === 1) {
    document.addEventListener('keydown', onKeydown);
  }
}

export function unregisterPopup() {
  popupClosers.pop();
  if (!popupClosers.length) {
    document.removeEventListener('keydown', onKeydown);
  }
}
