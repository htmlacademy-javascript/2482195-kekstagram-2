//Массив с возможными сообщениями комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Массив с возможными именами комментаторов
const NAMES = [
  'Маша',
  'Глаша',
  'Вася',
  'Петруша',
  'Котя',
  'Труся',
  'Витя',
  'Сержио'
];

const DESCRIPTIONS = [
  'На отдыхе!',
  'Мой кот обожает делать это!',
  'Париж прекрасен в любую погоду.',
  'Кто со мной на гонку героев?',
  'Злободневно'
];

// Функция для генерации случайного числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для генерации случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации комментариев
function generateComments() {
  const comments = [];
  const numberOfComments = getRandomInteger(1, 25);
  const commentIds = new Set();

  for (let i = 1; i <= numberOfComments; i++) {
    let commentId;

    do {
      commentId = getRandomInteger(1, 10000);
    } while (commentIds.has(commentId));
    commentIds.add(commentId);

    comments.push({
      id: commentId,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    });
  }
  return comments;
}

// Функция для генерации массива фотографий
function generatePhotos () {
  const photos = [];

  for(let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: generateComments()
    });
  }
  return photos;
}

// Генерируем массив фотографий
const photosArray = generatePhotos();

//Выводим массив в консоль
// eslint-disable-next-line no-console
console.log(photosArray);
