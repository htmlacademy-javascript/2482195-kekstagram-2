//Функция для проверки нажатия клавиши "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция для проверки соответствия длины строки
const isStringLengthValid = (str, maxLength) => str.length <= maxLength;

export {
  isEscapeKey,
  isStringLengthValid
};
