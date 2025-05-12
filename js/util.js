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

export {
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey,
  isStringLengthValid
};
