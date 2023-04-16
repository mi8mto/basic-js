const { NotImplementedError } = require('../extensions/index.js');

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
  let array = (''+n).split('');
  let maxInt = 0;
  for(let i = 0; i < array.length; i++) {
    let currentArr = [...array.slice(0,i), ...array.slice(i+1)];
//     console.log(+currentArr.join(''))
    if(+currentArr.join('') >= maxInt) maxInt = +currentArr.join('');
  }
  return maxInt;
}

module.exports = {
  deleteDigit
};
