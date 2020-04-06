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

/**
 *
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any, any) => any} fun - the callback function
 * @param {*} memo - the init value
 * @param {*} context - the `this`
 */
const reduce2 = (obj, fun, memo, context) => {
  const values = Object.values(obj)
  if (!memo) {
    memo = values.shift()
  }
  for (const key in values) {
    memo = context
      ? fun.call(context, memo, values[key], key, values)
      : fun(memo, values[key], key, values)
  }
  return memo
}

const sum2 = reduce2([1, 2, 3], (memo, num) => memo + num)
const sum3 = reduce2({ age1: 1, age2: 2, age3: 3 }, (memo, num) => memo + num)
const groupedData2 = reduce2(
  data,
  (memo, { name, score }) => ({
    ...memo,
    [name]: score + (memo[name] || 0)
  }),
  {}
)

console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')
console.log(sum2) // 6
console.log(sum3) // 6
console.log(groupedData2) // { rowad: 50, sarah: 60 }
