const { size } = require('underscore');


console.log(size([1, 2, 3, 4, 5]));

console.log(size({one: 1, two: 2, three: 3}));


const size2 = (list) => Object.values(list).length


console.log(size2([1, 2, 3, 4, 5]));

console.log(size2({one: 1, two: 2, three: 3}));
