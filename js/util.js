import { ALERT_SHOW_TIME } from './constants.js';

// Функция для генерации случайного числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для генерации случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция для проверки нажатия клавиши "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция для проверки соответствия длины строки
const isStringLengthValid = (str, maxLength) => str.length <= maxLength;

//Функция для обработки возможных ошибок
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey,
  isStringLengthValid,
  showAlert
};
