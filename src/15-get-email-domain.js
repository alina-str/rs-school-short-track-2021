/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let s = '';
  let k = 0;
  for (let i = email.length; i > -1; i--) {
    if (email[i] === '@') {
      k = i;
      break;
    }
  }
  for (let j = k + 1; j < email.length; j++) {
    s += email[j];
  }
  return s;
}

module.exports = getEmailDomain;
