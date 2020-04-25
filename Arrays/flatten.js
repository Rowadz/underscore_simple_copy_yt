const { flatten } = require('underscore');

console.log(flatten([1, [2], [3, [[4]]]]));
console.log(flatten([1, [2], [3, [[4]]]], true));

const flatten2 = (list, shallow) => {
  const res = [];
  list.forEach((el) => {
    if (Array.isArray(el)) {
      if (shallow) res.push(...el); // [].push.apply(res, el) <- the old way
      else res.push(...flatten2(el));
    } else res.push(el);
  });
  return res;
};

console.log(flatten2([1, [2], [3, [[4]]]]));
console.log(flatten2([1, [2], [3, [[4]]]], true));
