const { chunk } = require('underscore');

const data = [
  'Tyrone',
  'Elie',
  'Aidan',
  'Sam',
  'Katrina',
  'Billie',
  'Little Timmy',
];

console.log(chunk(data, 2));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const chunk2 = (array, length) => {
  const res = [];
  let i = 0;
  const chunkLen = length;
  while (i < array.length) {
    res.push(array.slice(i, length));
    i = length;
    length += chunkLen;
  }
  return res;
};

console.log(chunk2(data, 2));
