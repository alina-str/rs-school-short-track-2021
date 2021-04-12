/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  const array = [];
  const array2 = [];
  for (let i = 0; i < domains.length; i++) {
    array[i] = domains[i].split('.').reverse();
  }
  for (let i = 0; i < domains.length; i++) {
    array2[i] = '.';
    array2[i] += array[i].join('.');
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let s = '';
      let k = 0;
      for (let m = 0; m <= j; m++) {
        s += '.';
        s += array[i][m];
      }
      for (let n = 0; n < array.length; n++) {
        if (array2[n].indexOf(s) !== -1) k++;
      }
      dns[s] = k;
    }
  }
  return dns;
}

module.exports = getDNSStats;
