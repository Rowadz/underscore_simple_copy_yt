const { find } = require('underscore')
const even = find([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

console.log(even)

const find2 = (list, fun, context) => {
  for (const idx in list) {
    if (
      context
        ? fun.call(context, list[idx], idx, list)
        : fun(list[idx], idx, list)
    )
      return list[idx]
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
