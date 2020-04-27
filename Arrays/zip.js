const { zip } = require('underscore');

const data = [
  ['moe', 'larry', 'curly', 'rowad'],
  [30, 40, 50, 99],
  [true, false, false, true],
];

console.log(zip(...data));

const zip2 = (...arrays) => {
  const res = [];
  const maxColCount = Math.max(...arrays.map((d) => d.length));
  Array.from({ length: maxColCount }).forEach((_, col) => {
    const holder = [];
    arrays.forEach((_, row) => holder.push(arrays[row][col]));
    res.push(holder);
  });
  return res;
};

console.log(zip2(...data));
