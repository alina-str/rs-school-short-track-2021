/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let s = '';
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let k = 0;
    j = i;
    while (str[j] === char) {
      k++;
      j++;
      i++;
    }
    if (k !== 1) s += k.toString() + char;
    else s += char;
    i--;
  }
  return s;
}

module.exports = encodeLine;
