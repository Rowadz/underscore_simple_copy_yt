const { unzip } = require('underscore');

const data = [
  ['moe', 30, true],
  ['larry', 40, false, 'rowad'],
  ['curly', 50, false],
];

console.log(unzip(data));

const unzip2 = (arrays) => {
  const res = [];
  const maxColCount = Math.max(...arrays.map((d) => d.length));
  Array.from({ length: maxColCount }).forEach((_, col) => {
    const holder = [];
    arrays.forEach((_, row) => holder.push(arrays[row][col]));
    res.push(holder);
  });
  return res;
};

console.log(unzip2(data));