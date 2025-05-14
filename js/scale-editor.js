import { SCALE_STEP, MIN_SCALE, MAX_SCALE } from './constants.js';

const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');
const scaleHiddenInput = document.querySelector('#scale-hidden');

let scale = MAX_SCALE;

const updateScaleDisplay = () => {
  scaleInput.value = `${scale}%`;
  previewImage.style.transform = `scale(${scale * 0.01})`;

  if (scaleHiddenInput) {
    scaleHiddenInput.value = scale;
  }

  if (scale === MIN_SCALE) {
    decreaseButton.disabled = true;
  } else {
    decreaseButton.disabled = false;
  }

  if (scale === MAX_SCALE) {
    increaseButton.disabled = true;
  } else {
    increaseButton.disabled = false;
  }
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
