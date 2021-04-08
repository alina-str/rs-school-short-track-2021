/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = '';
  let s1 = '';
  s = n.toString();
  let max = n % 10;
  for (let i = 0; i < s.length; i++) {
    s1 = s;
    s1 = s1.slice(0, i) + s1.slice(i + 1);
    if (Number.parseInt(s1, 10) > max) max = Number.parseInt(s1, 10);
  }
  return max;
}

module.exports = deleteDigit;
