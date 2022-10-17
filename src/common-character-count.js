const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let SS1 = s1.split("").sort();
  let SS2 = s2.split("").sort();
  for (let i = 0; i < SS1.length; i++) {
    if (SS2.includes(SS1[i])) {
      SS2.splice(SS2.indexOf(SS1[i]), 1);
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
