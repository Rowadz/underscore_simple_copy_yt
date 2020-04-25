const { first } = require('underscore');

const data = [5, 4, 3, 2, 1]

console.log(first(data));
console.log(first(data, 3));


const first2 = (list, n) => {
    if (n) return list.slice(0, n)
    else return list[0]
}


console.log(first2(data));
console.log(first2(data, 3));

