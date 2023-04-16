const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let finish = [];
  for (let x = 0; x < matrix.length; x++) {
    let newArray = [];
    for (let i = 0; i < matrix[x].length; i++) {
      let count = 0;
      if (matrix[x][i - 1] == true) count++;
      if (matrix[x][i + 1] == true) count++;
      if (x - 1 >= 0) {
        if (matrix[x - 1][i - 1] == true) count++;
        if (matrix[x - 1][i] == true) count++;
        if (matrix[x - 1][i + 1] == true) count++;
      }
      if (x + 1 < matrix.length) {
        if (matrix[x + 1][i - 1] == true) count++;
        if (matrix[x + 1][i] == true) count++;
        if (matrix[x + 1][i + 1] == true) count++;
      }
      newArray.push(count);
    }
    finish.push(newArray);
  }
  return finish;
}


module.exports = {
  minesweeper
};
