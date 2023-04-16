const { NotImplementedError } = require('../extensions/index.js');

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
    let array = str.split('');
    let endStr = "";
    let count = 1;
      array.forEach((item,i) => {
      if(item == array[i+1]) {
        count++;
      } else if(item != array[i+1] && count <= 1) {
        endStr = endStr + `${item}`;
        count = 1;
      } else if(item != array[i+1] && count > 1) {
        endStr = endStr + `${count}${item}`;
        count = 1;
      }
    });
    return endStr;
  }


module.exports = {
  encodeLine
};
