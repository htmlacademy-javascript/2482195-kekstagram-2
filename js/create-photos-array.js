import { MESSAGES, NAMES, DESCRIPTIONS } from './data.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';

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

export {photosArray};
