const { rest } = require('underscore');

const data = [5, 4, 3, 2, 1];

console.log(rest(data))
console.log(rest(data, 3))

const rest2 = (list, n = 1) => list.slice(n)

console.log(rest2(data))
console.log(rest2(data, 3))