const { indexOf } = require('underscore');

const data = [1, 2, 3, 4, 5, 6, 2, 2];

console.log(indexOf(data, 2));
console.log(indexOf(data, 2, 3));

const indexOf2 = (array = [], value, sortedOrIdx) => {
  if (!sortedOrIdx || typeof sortedOrIdx === 'number') {
    const idx = !isNaN(sortedOrIdx) ? sortedOrIdx : null;
    for (let i = idx || 0; i < array.length; i++) {
      if (value === array[i]) return i;
    }
  } else {
    // binary search
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (array[mid] === value && array[mid - 1] !== value) return mid;
      if (array[mid] > value) high = mid - 1;
      else low = mid + 1;
    }
  }
  return -1;
};

console.log(indexOf2(data, 2));
console.log(indexOf2(data, 2, 3));
console.log(indexOf2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, true));
