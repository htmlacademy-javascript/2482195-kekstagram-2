const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 50,
      step: 1
    }
  },
  chrome: {
    name: 'chrome',
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    }
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    }
  },
  marvin: {
    name: 'marvin',
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 50,
      step: 1
    }
  },
  phobos: {
    name: 'phobos',
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 1.5,
      step: 0.1
    }
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 1.5,
      step: 0.1
    }
  }
};

export { EFFECTS };
