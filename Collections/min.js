const { min } = require('underscore')

const stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 }
]

console.log(min(stooges, (stooge) => stooge.age))
console.log(min([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const min2 = (list, fun, context) => {
  let theMax = Number.POSITIVE_INFINITY
  let toReturn = Infinity
  for (const key in list) {
    if (fun) {
      const res = context ? fun.call(context, list[key]) : fun(list[key])
      if (!isNaN(res) && res < theMax) {
        theMax = res
        toReturn = list[key]
      }
    } else {
      if (!isNaN(list[key]) && list[key] < theMax) {
        theMax = list[key]
        toReturn = list[key]
      }
    }
  }
  return toReturn
}

console.log(min2(stooges, (stooge) => stooge.age))
console.log(min2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
