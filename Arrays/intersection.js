const { intersection } = require('underscore');

const data = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 99],
];

console.log(intersection(...data));

function intersection2(...arrays) {
  let res = arrays[0]
  arrays = arrays.slice(1)
  arrays.forEach((e) => {
    res = res.filter(Set.prototype.has, new Set(e));
  })
  return res
}

console.log(intersection2(...data));