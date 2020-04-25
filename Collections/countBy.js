const { countBy } = require('underscore');
const data = [1, 2, 3, 4, 5];

console.log(countBy(data, (num) => (num % 2 == 0 ? 'even' : 'odd')));

const countBy2 = (list, fun, context) => {
  fun = context ? fun.bind(fun) : fun;
  const values = Object.values(list);
  return values.reduce((prev, curr) => {
    const key = fun(curr);
    return {
      ...prev,
      [key]: 1 + (prev[key] || 0),
    };
  }, {});
};


console.log(countBy2(data, (num) => (num % 2 == 0 ? 'even' : 'odd')));