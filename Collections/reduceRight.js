const { reduceRight } = require('underscore')
const list = [
  [0, 1],
  [2, 3],
  [4, 5]
]

const flat = reduceRight(list, (a, b) => [...a, ...b], [])
console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')
console.log(flat)

/**
 *
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any, any) => any} fun - the callback function
 * @param {*} memo - the init value
 * @param {*} context - the `this`
 */
const reduceRight2 = (obj, fun, memo, context) => {
  const values = Object.values(obj).reverse()
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

const flat2 = reduceRight2(list, (a, b) => [...a, ...b], [])
console.log('~~~~~~~~~~~~~~~~~~~v01~~~~~~~~~~~~~~~~~')
console.log(flat2)
