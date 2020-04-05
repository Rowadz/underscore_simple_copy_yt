/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
const { each } = require('underscore')

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

each([1, 2, 3], console.log)
each({ one: 1, two: 2, three: 3 }, console.log)

// eslint-disable-next-line no-unused-vars
const each1 = (obj, fun) => {
  if (Array.isArray(obj)) {
    for (let i = 0, length = obj.length; i < length; i++) {
      fun(obj[i], i, obj)
    }
  } else {
    const keys = Object.keys(obj)
    for (let i = 0, length = keys.length; i < length; i++) {
      fun(obj[keys[i]], keys[i], obj)
    }
  }
  return obj
}

console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')

each1([1, 2, 3], console.log)
each1({ one: 1, two: 2, three: 3 }, (val, key, obj) => {
  console.log(val, key, obj)
})

const each2 = (obj, fun) => {
  for (const key in obj) {
    fun(obj[key], key, obj)
  }
  return obj
}

console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')

each2([1, 2, 3], console.log)
each2({ one: 1, two: 2, three: 3 }, (val, key, obj) => {
  console.log(val, key, obj)
})
