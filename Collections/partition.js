const { partition } = require('underscore');
const data = [0, 1, 2, 3, 4, 5];

console.log(partition(data, n => n % 2 !== 0));

const partition2 = (list, fun) => {
  const succ = [];
  const fail = [];
  Object.values(list).forEach((el) => {
    if (fun(el)) succ.push(el);
    else fail.push(el);
  });
  return [succ, fail]
};


console.log(partition2(data, n => n % 2 !== 0));