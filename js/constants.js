const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS_LENGTH = 20;

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const ALERT_SHOW_TIME = 5000;

const SUBMIT_BUTTON_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправка...'
};

const SUBMISSION_STATE = {
  SENDING: 'sending',
  IDLE: 'idle',
};

const POPUP_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_COUNT,
  HASHTAG_REGEX,
  MAX_HASHTAGS_LENGTH,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  ALERT_SHOW_TIME,
  SUBMIT_BUTTON_TEXT,
  SUBMISSION_STATE,
  POPUP_TYPE
};
