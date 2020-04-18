const { pluck } = require('underscore')

const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 }
]

console.log(pluck(stooges, 'name'))

const pluck2 = (list, propName) => list.map((obj) => obj[propName])

console.log(pluck2(stooges, 'name'))
