const { filter } = require('underscore')

const evens = filter([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)

console.log(evens)

const filter2 = (list, fun, context) => {
  const res = []
  for (const key in list) {
    if (
      context
        ? fun.call(context, list[key], key, list)
        : fun(list[key], key, list)
    )
      res.push(list[key])
  }
  return res
}

const evens2 = filter2([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)
console.log(evens2)
