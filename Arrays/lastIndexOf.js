const { lastIndexOf } = require('underscore');
const data = [1, 2, 3, 1, 2, 3];

console.log(lastIndexOf(data, 2));

const lastIndexOf2 = (array, value, fromIndex) => {
  for (let i = fromIndex || array.length - 1; i >= 0; i--) {
    if (array[i] === value) return i;
  }
  return -1;
};

console.log(lastIndexOf2(data, 3));
