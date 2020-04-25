const { toArray } = require('underscore');

const fun = function () {
  return toArray(arguments);
};

console.log(fun(1, 2, 3, 4, [1, 'rowad'], { name: 'rowad' }));

const toArray2 = (list) => Object.values(list);

const fun2 = function () {
  return toArray2(arguments);
};

console.log(fun2(1, 2, 3, 4, [1, 'rowad'], { name: 'rowad' }));
