import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const arrAmount = array =>
    array.reduce(
      (amount, number) => amount + (Array.isArray(number) ? arrAmount(number) : number * 1),
      0
    );
  let answer = matrix.length;
  let question = matrix[0].length;
  for (let i = 0; i < answer; i++) {
    for (let j = 0; j < question; j++) {
      if (typeof matrix[i + 1] !== 'undefined' &&
        matrix[i][j] == 0) matrix[i + 1][j] = 0;
    }
  }
  return arrAmount(matrix);
}
