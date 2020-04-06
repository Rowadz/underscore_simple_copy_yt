const { map } = require('underscore')

const a = map([1, 2, 3], function (num) {
  return num * 3
})
const b = map({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return { num: num * 3, key }
})
const c = map(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)
console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

console.log(a)
console.log(b)
console.log(c)

/**
 * maps the values and saves the object keys!
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any) => any} fun - the callback function
 * @param {*} context - the `this`
 */
const map2 = (obj, fun, context) => {
  const holder = []
  for (const key in obj) {
    holder.push(
      context ? fun.call(context, obj[key], key, obj) : fun(obj[key], key, obj)
    )
  }
  return holder
}

console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')

const a2 = map2([1, 2, 3], function (num) {
  return num * 3
})
const b2 = map2({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return { num, key }
})
const c2 = map2(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)
const d2 = map2(
  [
    { name: 'rowad', score: 10 },
    { name: 'sarah', score: 20 },
    { name: 'rowadz', score: 30 }
  ],
  ({ score, name }, idx, arr) => ({ name, score: score ** 2 })
)

console.log(a2)
console.log(b2)
console.log(c2)
console.log(d2)

console.log('~~~~~~~~~~~~~~~~~~~v3~~~~~~~~~~~~~~~~~')

/**
 * maps the values and saves the object keys!
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any) => any} fun - the callback function
 * @param {*} context - the `this`
 */
const map3 = (obj, fun, context) => {
  for (const key in obj) {
    obj[key] = context
      ? fun.call(context, obj[key], key, obj)
      : fun(obj[key], key, obj)
  }
  return obj
}

const b3 = map3({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return num ** 2
})

const d3 = map3(
  [
    { name: 'rowad', score: 10 },
    { name: 'sarah', score: 20 },
    { name: 'rowadz', score: 30 }
  ],
  ({ score, name }, idx, arr) => ({ name, score: score ** 2 })
)

console.log(d3)
console.log(b3)
