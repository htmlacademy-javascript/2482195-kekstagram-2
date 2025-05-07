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
  start: 100,
  connect: 'lower',
});

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
};

const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${sliderValue.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${sliderValue.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${sliderValue.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${sliderValue.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${sliderValue.value})`;
      break;
  }
  image.style.filter = filterStyle;

  effectHiddenInput.value = effect;
};

effectSlider.noUiSlider.on('update', () => {
  sliderValue.value = effectSlider.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

const defaultImage = () => {
  effectSliderBlock.classList.add('hidden');
  image.style.filter = '';
};

effectsRadioList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      defaultImage();
    } else {
      renderEffect(evt.target.value);
      effectSliderBlock.classList.remove('hidden');
    }
    updateSliderOption(evt.target.value);
  }
});

const resetEffects = () => {
  defaultImage();
  noEffectRadio.checked = true;
  effectHiddenInput.value = 'none';
};

export { resetEffects };
