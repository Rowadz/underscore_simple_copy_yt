const { every } = require('underscore')

const isAllEven = every([2, 4, 5], (num) => num % 2 == 0)

console.log(isAllEven)

const every2 = (list, fun, context) => {
  let res = true
  for (const item of list)
    if (!(context ? fun.call(context, item) : fun(item))) return false
  return res
}

const isAllEven2 = every2([2, 4, 5], (num) => num % 2 == 0)

console.log(isAllEven2)
