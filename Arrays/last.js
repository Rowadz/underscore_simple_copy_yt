const { last } = require('underscore');
const data = [5, 4, 3, 2, 1];

console.log(last(data));
console.log(last(data, 2));

const last2 = (list, n) => {
  if (n) return list.slice(list.length - n);
  else return list[list.length - 1];
};

console.log(last2(data));
console.log(last2(data, 2));
