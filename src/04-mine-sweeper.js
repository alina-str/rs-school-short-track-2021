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
  const a = [];
  for (let i = 0; i < matrix.length; i++) {
    a[i] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      a[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let k = 0;
      if (i !== matrix.length - 1) {
        if (matrix[i + 1][j] === true) k++;
      }
      if ((i !== matrix.length - 1) && (j !== 0)) {
        if (matrix[i + 1][j - 1] === true) k++;
      }
      if (j !== 0) {
        if (matrix[i][j - 1] === true) k++;
      }
      if ((j !== 0) && (i !== 0)) {
        if (matrix[i - 1][j - 1] === true) k++;
      }
      if (i !== 0) {
        if (matrix[i - 1][j] === true) k++;
      }
      if ((j !== matrix[i].length - 1) && (i !== 0)) {
        if (matrix[i - 1][j + 1] === true) k++;
      }
      if (j !== matrix[i].length - 1) {
        if (matrix[i][j + 1] === true) k++;
      }
      if ((i !== matrix.length - 1) && (j !== matrix[i].length - 1)) {
        if (matrix[i + 1][j + 1] === true) k++;
      }
      a[i][j] = k;
    }
  }
  return a;
}

module.exports = minesweeper;
