import { EFFECTS } from './effect-settings.js';

const effectSlider = document.querySelector('.effect-level__slider');
const effectsRadioList = document.querySelector('.effects__list');
const sliderValue = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const effectSliderBlock = document.querySelector('.img-upload__effect-level');
const noEffectRadio = document.querySelector('#effect-none');

const effectHiddenInput = document.querySelector('#effect-hidden');

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  connect: 'lower',
});

const updateSliderOption = (effectName) => {
  if (EFFECTS[effectName]) {
    effectSlider.noUiSlider.updateOptions(EFFECTS[effectName].options);
  }
};

const renderEffect = (effectName) => {
  if (effectName === 'none') {
    image.style.filter = '';
  } else if (EFFECTS[effectName]) {
    const { filter, unit } = EFFECTS[effectName];
    image.style.filter = `${filter}(${sliderValue.value}${unit})`;
  }

  effectHiddenInput.value = effectName;
};

effectSlider.noUiSlider.on('update', () => {
  sliderValue.value = parseFloat(effectSlider.noUiSlider.get()).toString();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

const defaultImage = () => {
  effectSliderBlock.classList.add('hidden');
  image.style.filter = '';
};

effectsRadioList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    const effectName = evt.target.value;
    if (effectName === 'none') {
      defaultImage();
    } else {
      renderEffect(effectName);
      effectSliderBlock.classList.remove('hidden');
    }
    updateSliderOption(effectName);
  }
});

const resetEffects = () => {
  defaultImage();

  effectSliderBlock.classList.add('hidden');

  noEffectRadio.checked = true;
  effectHiddenInput.value = 'none';

  effectSlider.noUiSlider.set(50);
};

export { resetEffects };
