const { find } = require('underscore')
const even = find([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

console.log(even)

/**
 * normal object will be returned as array of the mapped values
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any) => any} fun - the callback function
 * @param {*} context - the `this`
 */
const find2 = (obj, fun, context) => {
  const holder = Object.values(obj)
  for (const key in holder) {
    if (
      context
        ? fun.call(context, holder[key], key, holder)
        : fun(holder[key], key, holder)
    ) {
      return holder[key]
    }
  }
  return undefined
}

const even2 = find2([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)
const even3 = find2(
  [
    { name: 'rowad', age: 21 },
    { name: 'sarah', age: 23 },
    { name: 'rowadz', age: 22 }
  ],
  ({ age }, idx, arr) => age % 2 === 0
)

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')
console.log(even2)
console.log(even3)
