/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let p = -1;
  let middle;
  let k = 0;
  while (k === 0 && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      p = middle;
      k++;
    } else if (array[middle] > value) last = middle - 1;
    else first = middle + 1;
  }
  return p;
}

module.exports = findIndex;
