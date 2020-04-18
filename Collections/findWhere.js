const { findWhere } = require('underscore')

const dataArr = [
  { name: 'rowad', age: 22 },
  { name: 'rowad', age: 21 },
  { name: 'rowad', age: 26, id: 1 },
  { name: 'rowad', age: 19 },
  { name: 'rowad', age: 18 },
  { name: 'rowad', age: 17 },
  { name: 'rowad', age: 26, id: 2 }
]

const res = findWhere(dataArr, {
  name: 'rowad',
  age: 26
})

console.log(res)

const findWhere2 = (list, properties) => {
  const propKeys = Object.keys(properties)
  for (const item of list) {
    let thisItem = true
    for (const propKey of propKeys) {
      if (!(propKey in item) || properties[propKey] !== item[propKey]) {
        thisItem = false
        break
      }
    }
    if (thisItem) return item
  }
  return undefined
}

const res2 = findWhere2(dataArr, {
  name: 'rowad',
  age: 26
})

console.log(res2)
