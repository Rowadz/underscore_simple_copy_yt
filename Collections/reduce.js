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

const reduce2 = (obj, fun, memo, context) => {
  const isArr = Array.isArray(obj)
  let arrHolder
  let objHolder
  if (!memo) {
    if (isArr) {
      memo = obj.shift()
      arrHolder = [...obj]
      obj.unshift(memo)
    } else {
      const [key] = Object.keys(obj)
      memo = obj[key]
      objHolder = { ...obj }
      delete objHolder[key]
    }
  }
  for (const key in isArr ? arrHolder || obj : objHolder || obj) {
    if (arrHolder || objHolder) {
      memo = context
        ? fun.call(context, memo, (arrHolder || objHolder)[key], key, obj)
        : fun(memo, (arrHolder || objHolder)[key], key, obj)
    } else {
      memo = context
        ? fun.call(context, memo, obj[key], key, obj)
        : fun(memo, obj[key], key, obj)
    }
  }
  return memo
}

const sum2 = reduce2([1, -1, 3], (memo, num) => memo + num)
const groupedData2 = reduce2(
  data,
  (memo, { name, score }) => ({
    ...memo,
    [name]: score + (memo[name] || 0)
  }),
  {}
)

const test = reduce2(
  { sum1: 1, sum2: 30, sum3: 100 },
  (memo, val, key) => ({
    sum: val + (memo.sum || 0)
  }),
  {}
)

console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')
console.log(sum2) // 6
console.log(groupedData2) // { rowad: 50, sarah: 60 }
console.log(test)
