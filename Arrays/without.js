const { without } = require('underscore');

const data = [1, 2, 1, 0, 3, 1, 4];

console.log(without(data, 0, 1));
console.log(without(data));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const without2 = (list, ...values) => {
  const set = new Set(values);
  return list.filter((e) => !set.has(e));
};



console.log(without2(data, 0, 1));
console.log(without2(data));