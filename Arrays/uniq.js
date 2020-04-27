const { uniq } = require('underscore');
const data = [
  { name: 'rowad', age: 21 },
  { name: 'sarah', age: 21 },
  { name: 'polo', age: 22 },
];

console.log(uniq([1, 2, 1, 4, 1, 3]));
console.log(uniq(data, false, ({ age }) => age));

const uniq2 = (array, _, fun) => {
  const map = {};
  const res = [];
  for (const item of array) {
    let val = item;
    if (fun) val = fun(item);
    if (!map[val]) {
      map[val] = true;
      res.push(item);
    }
  }
  return res;
};

console.log(uniq2([1, 2, 1, 4, 1, 3]));
console.log(uniq2(data, false, ({ age }) => age));
