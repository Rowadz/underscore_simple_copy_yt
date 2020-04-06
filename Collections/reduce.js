const { reduce } = require('underscore')

const data = [
  { name: 'rowad', score: 10 },
  { name: 'rowad', score: 10 },
  { name: 'rowad', score: 10 },
  { name: 'rowad', score: 10 },
  { name: 'rowad', score: 10 },
  { name: 'sarah', score: 20 },
  { name: 'sarah', score: 20 },
  { name: 'sarah', score: 20 }
]

const sum = reduce([1, 2, 3], (memo, num) => memo + num)
const groupedData = reduce(
  data,
  (memo, { name, score }) => ({
    ...memo,
    [name]: score + (memo[name] || 0)
  }),
  {}
)

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')
console.log(sum) // 6
console.log(groupedData) // { rowad: 50, sarah: 60 }
