const { shuffle } = require('underscore');

console.log(shuffle([1, 2, 3, 4, 5, 6]));

const shuffle2 = (list) => {
  for (let i = 0; i < list.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

console.log(shuffle2([1, 2, 3, 4, 5, 6]));
