const { sortedIndex } = require('underscore');

console.log(sortedIndex([10, 20, 30, 40, 50], 35));
const stooges = [
  { name: 'moe', age: 40 },
  { name: 'curly', age: 60 },
];
console.log(sortedIndex(stooges, { name: 'larry', age: 50 }, 'age'));

console.log('~~~~~~~~~~~~~~~~')

const sortedIndex2 = (array, value, fun, context) => {
  if (typeof fun === 'function') fun = context ? fun.bind(context) : fun;
  const isStr = typeof fun === 'string';
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = fun ? (isStr ? array[mid][fun] : fun(array[mid])) : array[mid];
    const val2 = fun
      ? array[mid + 1]
        ? isStr
          ? array[mid + 1][fun]
          : fun(array[mid + 1])
        : undefined
      : array[mid + 1];

    if (val <= value[fun] && val2 > value[fun]) return mid + 1;
    if (val > value[fun]) high = mid - 1;
    else low = mid + 1;
  }
  return value[fun] < array[0][fun] ? 0 : array.length;
};

console.log(sortedIndex2([10, 20, 30, 40, 50], 541));
console.log(sortedIndex2([20, 30], 43));
console.log(sortedIndex2(stooges, { name: 'larry', age: 50 }, 'age'));
