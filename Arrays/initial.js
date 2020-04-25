const { initial } = require('underscore');
const data = [5, 4, 3, 2, 1];

console.log(initial(data));
console.log(initial(data, 2));

const initial2 = (list, n = 1) => list.slice(0, list.length - n);

console.log(initial2(data));
console.log(initial2(data, 2));