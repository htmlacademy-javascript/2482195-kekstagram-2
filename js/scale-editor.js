import { SCALE_STEP, MIN_SCALE, MAX_SCALE, SCALE_FACTOR } from './constants.js';

const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

let scale = MAX_SCALE;

const updateScaleDisplay = () => {
  scaleInput.value = `${scale}%`;
  const previewImage = document.querySelector('.img-upload__preview img');
  previewImage.style.transform = `scale(${scale * SCALE_FACTOR})`;

  decreaseButton.disabled = scale === MIN_SCALE;
  increaseButton.disabled = scale === MAX_SCALE;
};

const handleDecreaseClick = () => {
  scale = scale - SCALE_STEP >= MIN_SCALE ? scale - SCALE_STEP : MIN_SCALE;
  updateScaleDisplay();
};

const handleIncreaseClick = () => {
  scale = scale + SCALE_STEP <= MAX_SCALE ? scale + SCALE_STEP : MAX_SCALE;
  updateScaleDisplay();
};

decreaseButton.addEventListener('click', handleDecreaseClick);
increaseButton.addEventListener('click', handleIncreaseClick);


const resetScale = () => {
  scale = MAX_SCALE;
  updateScaleDisplay();
};

export { resetScale };
