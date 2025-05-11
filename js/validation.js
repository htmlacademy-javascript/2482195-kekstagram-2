import { isStringLengthValid } from './util.js';
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_COUNT,
  HASHTAG_REGEX,
  MAX_HASHTAGS_LENGTH
} from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error'
  },
);

const isDescriptionValid = (value) => isStringLengthValid(value, MAX_DESCRIPTION_LENGTH);

pristine.addValidator(
  descriptionField,
  isDescriptionValid,
  `Длина описания не должна превышать ${MAX_DESCRIPTION_LENGTH} символов.`
);

const isHashtagsCountValid = (value) => value.replace(/ +/g, ' ').trim().split(' ').length <= MAX_HASHTAGS_COUNT;

pristine.addValidator(
  hashtagsField,
  isHashtagsCountValid,
  `Максимум ${MAX_HASHTAGS_COUNT} хештегов.`,

  true
);

const areHashtagsValid = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().split(' ');
  return !tags.some((tag) => !HASHTAG_REGEX.test(tag));
};

pristine.addValidator(
  hashtagsField,
  areHashtagsValid,
  `Хештег должен начинаться с # и содержать только буквы и цифры; максимальная длина одного хэштега ${MAX_HASHTAGS_LENGTH} символов.`,

  true
);

const areHashtagsUnique = (value) => {
  const tags = value.replace(/ +/g, ' ').trim().toLowerCase().split(' ');
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  hashtagsField,
  areHashtagsUnique,
  'Хештеги должны быть уникальными.',

  true
);

const validateForm = () => pristine.validate();

const resetValidation = () => pristine.reset();

export { validateForm, resetValidation };
