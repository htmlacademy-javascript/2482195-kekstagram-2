import { isEscapeKey } from './util.js';

const stack = [];

function onKeydown(evt) {
  if (isEscapeKey(evt) && stack.length) {
    const last = stack.pop();
    last();
    if (!stack.length) {
      document.removeEventListener('keydown', onKeydown);
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
