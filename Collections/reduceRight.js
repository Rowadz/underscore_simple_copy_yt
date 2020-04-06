const { reduceRight } = require('underscore')
const list = [
  [0, 1],
  [2, 3],
  [4, 5]
]

const flat = reduceRight(list, (a, b) => [...a, ...b], [])
console.log('~~~~~~~~~~~~~~~~~~~v0~~~~~~~~~~~~~~~~~')
console.log(flat)
