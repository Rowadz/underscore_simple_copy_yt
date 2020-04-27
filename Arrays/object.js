const { object } = require('underscore');

console.log(object(['moe', 'larry', 'curly'], [30, 40, 50]));
console.log(
  object([
    ['moe', 30],
    ['larry', 40],
    ['curly', 50],
  ])
);

const object2 = (list, values) => {
  if (values) list = list.map((key, i) => [key, values[i]]);
  return list.reduce(
    (prev, [key, val]) => ({
      ...prev,
      [key]: val,
    }),
    {}
  );
};

console.log(object2(['moe', 'larry', 'curly'], [30, 40, 50]));
console.log(
  object2([
    ['moe', 30],
    ['larry', 40],
    ['curly', 50],
  ])
);
