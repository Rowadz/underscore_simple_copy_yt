const { some } = require('underscore')

console.log(some([null, 0, 'yes', false]))

const some2 = (list, fun, context) => {
  let res = false
  for (const item of list)
    if (fun ? (context ? fun.call(context, item) : fun(item)) : item)
      return true
  return res
}

console.log(some2([null, 0, 'yes', false]))
