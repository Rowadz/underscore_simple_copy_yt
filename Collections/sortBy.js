const { sortBy } = require('underscore')
const data = [1, 2, 3, 4, 5, 6]

const res = sortBy(data, (num) => Math.sin(num))
const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 },
]

console.log(res)
console.log(sortBy(stooges, 'name'))

const sortBy2 = (list, funOrStr, context) => {
  let realFun = null
  if (typeof funOrStr === 'function')
    context ? funOrStr.bind(context) : funOrStr
  if (typeof funOrStr === 'string') realFun = funOrStr
  return Object.values(list)
    .map((val, idx) => ({
      val,
      idx,
      toCompare:
        typeof realFun === 'function'
          ? realFun(val)
          : typeof realFun === 'string'
          ? val[realFun]
          : val,
    }))
    .sort((a, b) => {
      if (a.toCompare > b.toCompare) return 1
      else if (a.toCompare < b.toCompare) return -1
      else return 0
    })
    .map(({ val }) => val)
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const res2A = sortBy(data, (num) => Math.sin(num))
const res2B = sortBy2(['z', 'v', 'a'])

console.log(res2A)
console.log(res2B)
console.log(sortBy2(stooges, 'name'))
