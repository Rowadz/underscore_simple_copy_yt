const { groupBy } = require('underscore')

const r = groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num))
const r2 = groupBy(['one', 'two', 'three'], 'length')

console.log(r)
console.log(r2)

console.log(
  '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
)

const groupBy2 = (list = [], funOrStr, context) => {
  const isFunc = typeof funOrStr === 'function'
  return list.reduce((prev, curr) => {
    const func = isFunc ? (context ? funOrStr.bind(context) : funOrStr) : null
    return {
      ...prev,
      [isFunc ? func(curr) : curr[funOrStr]]: [
        ...(prev[isFunc ? func(curr) : curr[funOrStr]] || []),
        curr
      ]
    }
  }, {})
}

const rA = groupBy2([1.3, 2.1, 2.4], (num) => Math.floor(num))
const r2A = groupBy2(['one', 'two', 'three'], 'length')
console.log(rA)
console.log(r2A)
