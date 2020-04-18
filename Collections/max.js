const { max } = require('underscore')

const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 }
]

console.log(max(stooges, (stooge) => stooge.age))

const max2 = (list, fun, context) => {
  let theMax = Number.NEGATIVE_INFINITY
  let toReturn = Infinity
  for (const key in list) {
    if (fun) {
      const res = context ? fun.call(context, list[key]) : fun(list[key])
      if (res > theMax) {
        theMax = res
        toReturn = list[key]
      }
    } else {
      if (list[key] > theMax) {
        theMax = list[key]
        toReturn = list[key]
      }
    }
  }
  return toReturn
}

console.log(max2(stooges, (stooge) => stooge.age))
console.log(max2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
