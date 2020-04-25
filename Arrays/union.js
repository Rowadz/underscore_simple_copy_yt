const { union } = require('underscore');

const data = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 1],
];

console.log(union(...data));

const union2 = (...arrays) => {
  return [
    ...new Set(arrays.reduce((prev, curr) => [].concat(...prev, ...curr), [])),
  ];
};

console.log(union2(...data));
