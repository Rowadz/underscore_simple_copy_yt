const { reduceRight } = require('underscore')
const list = [
  [0, 1],
  [2, 3],
  [4, 5]
]

const flat = reduceRight(list, (a, b) => [...a, ...b], [])
console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')
console.log(flat)


const reduceRight2 = (obj, fun, memo, context) => {
  const isArr = Array.isArray(obj)
  let arrHolder
  let objHolder
  if (!memo) {
    if (isArr) {
      memo = obj.shift()
      arrHolder = [...obj]
      obj.unshift(memo)
    } else {
      const [key] = Object.keys(obj)
      memo = obj[key]
      objHolder = { ...obj }
      delete objHolder[key]
    }
  }
  if (isArr){
    (arrHolder || obj).reverse().forEach((_, key) => {
      memo = context
        ? fun.call(context, memo, (arrHolder || obj)[key], key, obj)
        : fun(memo, (arrHolder || obj)[key], key, obj)
    })
  } else {
    const toLoop = objHolder ? Object.keys(obj).reverse() : Object.keys(objHolder).reverse()
    toLoop.forEach((_, key) => {
      memo = context
        ? fun.call(context, memo, (objHolder || obj)[key], key, obj)
        : fun(memo, (objHolder || obj)[key], key, obj)
    })
  }
  return memo
}


const flat2 = reduceRight2(list, (a, b) => [...a, ...b], [])
console.log('~~~~~~~~~~~~~~~~~~~v1~~~~~~~~~~~~~~~~~')
console.log(flat2)
