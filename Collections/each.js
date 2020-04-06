/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
const { each } = require('underscore')

console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')

each([1, 2, 3], console.log)
each({ one: 1, two: 2, three: 3 }, console.log)
const user = {
  friends: {
    user1: true,
    user2: false,
    user3: true,
    user4: false
  }
}

each(
  ['user1', 'user4', 'user5'],
  function (val) {
    console.log(this[val])
  },
  user.friends
)

/**
 *
 * @param {*} obj - can be an Array<any> or normal object
 * @param {(any, any, any) => any} fun - the callback function
 * @param {*} context - the `this`
 */
const each2 = (obj, fun, context) => {
  for (const key in obj) {
    context ? fun.call(context, obj[key], key, obj) : fun(obj[key], key, obj)
  }
  return obj
}

console.log('~~~~~~~~~~~~~~~~~~~v2~~~~~~~~~~~~~~~~~')

each2([1, 2, 3], console.log)
each2({ one: 1, two: 2, three: 3 }, (val, key, obj) => {
  console.log(val, key, obj)
})

const user2 = {
  friends: {
    user1: true,
    user2: false,
    user3: true,
    user4: false
  }
}

// this.user1 = ':)'

each2(
  ['user1', 'user4', 'user5'],
  function (val) {
    console.log(this[val])
  },
  user2.friends
)
