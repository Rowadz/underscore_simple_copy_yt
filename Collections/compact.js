const { compact } = require('underscore');

console.log(compact([0, 1, false, 2, '']));

const compact2 = (list) => list.filter(Boolean);

console.log(compact2([0, 1, false, 2, '']));
