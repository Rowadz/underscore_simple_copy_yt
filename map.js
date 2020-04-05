const { map } = require('underscore')

const a = map([1, 2, 3], function (num) {
  return num * 3
})
const b = map({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return num * 3
})
const c = map(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)
console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

console.log(a, b, c)

// normal object will be returned as array of the mapped values
const map2 = (obj, fun, context) => {
  const holder = Object.values(obj)
  for (const key in holder) {
    holder[key] = context
      ? fun.call(context, holder[key], key, holder)
      : fun(holder[key], key, holder)
  }
  return holder
}

// maps the values and saves the object keys!
const map3 = (obj, fun, context) => {
  for (const key in obj) {
    obj[key] = context
      ? fun.call(context, obj[key], key, obj)
      : fun(obj[key], key, obj)
  }
  return obj
}

console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')

const a2 = map2([1, 2, 3], function (num) {
  return num * 3
})
const b2 = map2({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return num * 3
})
const c2 = map2(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)

console.log(a2, b2, c2)

console.log('~~~~~~~~~~~~~~~~~~~v3~~~~~~~~~~~~~~~~~')

const a3 = map3([1, 2, 3], function (num) {
  return num * 3
})
const b3 = map3({ one: 1, two: 2, three: 3 }, function (num, key, obh) {
  return num * 3
})
const c3 = map3(
  [
    [1, 2],
    [3, 4]
  ],
  ([f]) => f
)

console.log(a3, b3, c3)
