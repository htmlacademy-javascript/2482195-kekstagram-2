//Функция для проверки нажатия клавиши "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция для проверки соответствия длины строки
const isStringLengthValid = (str, maxLength) => str.length <= maxLength;

const debounce = (callback, delay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
};

const getRandomArrayItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export {
  isEscapeKey,
  isStringLengthValid,
  debounce,
  getRandomArrayItems,
  shuffleArray
};
