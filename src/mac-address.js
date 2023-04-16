const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

  function isMAC48Address(n) {
    const letters = ['A','B','C','D','E','F'];
    const numbers = [0,1,2,3,4,5,6,7,8,9];
//   console.log(n.split('-'))
    for(let item of n.split('-')) {
//     console.log(item);
      if(item.length != 2) return false
      for(let value of item.split('')) {
        if(letters.includes(value) || numbers.includes(+value)) {
        
        } else {
          return false;
        }
      }
    }
    return true;
  }

module.exports = {
  isMAC48Address
};
