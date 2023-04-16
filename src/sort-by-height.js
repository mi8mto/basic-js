const { NotImplementedError } = require('../extensions/index.js');

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
  let end = [];
  let filterArray = arr.filter((item) => item != -1);
//   console.log(filteredArr);
  filterArray = filterArray.sort((a, b) => a - b);
//   console.log(filteredArr);
  for (let item of arr) {
    if (item != -1) {
      end.push(filterArray.shift());
    } else {
      end.push(-1);
    }
  }
  return end;
}


module.exports = {
  sortByHeight
};
