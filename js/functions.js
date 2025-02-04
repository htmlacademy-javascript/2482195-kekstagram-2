//проверка длины строки
const checkLengthString = (string = 'проверяемая строка', maxSymbol = 18) => string.length <= maxSymbol;
checkLengthString();


//функция проверки палиндрома
const isPalindrome = (string = 'ТопоТ') => {
  string = string.replaceAll(' ', '');
  string = string.toUpperCase();
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return string === newString;
};
isPalindrome();

//функция извлекает число из строки и записывает только целое положительное число. Если числа нет возвращает NaN
const extractNumber = (string = '123x') => {
  let integer = '';
  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      integer += string[i];
    }
  }
  return integer === '' ? NaN : Number(integer);
};
extractNumber();
