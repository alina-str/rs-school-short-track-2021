/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let t = 0;
  const a = arr;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      for (let j = i + 1; j < a.length; j++) {
        if ((a[j] < a[i]) && (a[j] !== -1)) {
          t = a[j]; a[j] = a[i]; a[i] = t; i--;
        }
      }
    }
  }
  return a;
}

module.exports = sortByHeight;
