const { difference } = require('underscore');

console.log(difference([1, 2, 3, 4, 5], [5, 2, 10]));

const difference2 = (array, ...others) => {
  others.forEach((e) => {
    array = array.filter((d) => !new Set(e).has(d));
  });
  return array;
};

console.log(difference2([1, 2, 3, 4, 5], [5, 2, 10]));
