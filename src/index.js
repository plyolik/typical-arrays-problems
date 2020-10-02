const arrayIsNotEmpty = (array) => array !== undefined && array.length !== 0;

exports.min = (array) =>
  arrayIsNotEmpty(array) ? Math.min.apply(null, array) : 0;

exports.max = (array) =>
  arrayIsNotEmpty(array) ? Math.max.apply(null, array) : 0;

exports.avg = (array) =>
  arrayIsNotEmpty(array) ? array.reduce((a, b) => (a + b)) / array.length : 0;
