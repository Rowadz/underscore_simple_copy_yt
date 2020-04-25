const { sample } = require('underscore');
const data = [1, 2, 3, 4, 5, 6];

console.log(sample(data));
console.log(sample(data, 3));

const sample2 = (list, amount) => {
  const r = () => Math.floor(Math.random() * list.length); // 0 -> len - 1
  if (amount) {
    // so you don't get the same element from the same indexes
    const indexes = {};
    const res = [];
    for (let i = 0; i < amount; i++) {
      const idx = r();
      if (idx in indexes) i--;
      else {
        indexes[idx] = true;
        res.push(list[idx]);
      }
    }
    return res;
  } else return list[r()];
};

console.log(sample2(data));
console.log(sample2(data, 4));
