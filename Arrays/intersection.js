const { intersection } = require('underscore');

const data = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 1],
];

console.log(intersection(...data));

const intersection2 = (...arrays) => {
  const minSet = new Set(
    arrays.reduce(
      (prev, curr) => (prev.length > curr.length ? curr : prev),
      arrays[0]
    )
  );
  const map = {};
  const res = [];
  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    for (let j = 0; j < arr.length; j++) {
      if (minSet.has(arr[j]) && !map[arr[j]]) {
        map[arr[j]] = true;
        res.push(arr[j]);
      }
    }
  }
  return res
};


console.log(intersection2(...data));