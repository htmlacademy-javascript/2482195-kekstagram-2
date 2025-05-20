export const MAX_DESCRIPTION_LENGTH = 140;
export const MAX_HASHTAGS_COUNT = 5;
export const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
export const MAX_HASHTAGS_LENGTH = 20;

export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;

export const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const Route = {
  GET_DATA: {
    path: '/data',
    error: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  },
  SEND_DATA: {
    path: '/',
    error: 'Не удалось отправить форму. Попробуйте ещё раз',
  },
};

export const Method = {
  GET: 'GET',
  POST: 'POST',
};

export const ALERT_SHOW_TIME = 5000;

export const SUBMIT_BUTTON_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправка...'
};

export const SUBMISSION_STATE = {
  SENDING: 'sending',
  IDLE: 'idle',
};

export const POPUP_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const SCALE_FACTOR = 0.01;

export const RANDOM_PHOTOS_COUNT = 10;

export const DEBOUNCE_DELAY = 500;

export const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
