const { contains } = require('underscore')

console.log(contains([1, 2, 3], 3))
console.log(contains({ sex: 'M', name: 'rowad', age: 22 }, 'rowad'))

const contains2 = (list, value, idx) => {
  const vals = Object.values(list)
  for (let i = idx || 0; i < vals.length; i++) {
    if (vals[i] === value) return true
  }
  return false
}

console.log(contains2([1, 2, 3], 3, 2))
console.log(contains2({ sex: 'M', name: 'rowad', age: 22 }, 'rowad', 1))
