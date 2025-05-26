import { isEscapeKey } from './util.js';

const stack = [];

function onKeydown(evt) {
  const activeElement = document.activeElement;

  const isHashtagsOrCommentInput =
    activeElement.classList.contains('text__hashtags') || activeElement.classList.contains('text__description');

  if (isEscapeKey(evt) && !isHashtagsOrCommentInput && stack.length) {
    evt.preventDefault();
    const last = stack[stack.length - 1];
    if (typeof last === 'function') {
      last();
    }
  }
}

export function registerPopup(closeCallback) {
  stack.push(closeCallback);
  if (stack.length === 1) {
    document.addEventListener('keydown', onKeydown);
  }
}

export function unregisterPopup() {
  stack.pop();
  if (!stack.length) {
    document.removeEventListener('keydown', onKeydown);
  }
}
