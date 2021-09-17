import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  let counter = 0;
  let arr1 = [].concat(...arr);
  for (let elem of arr1) {
    if (elem == '^^') {
      counter++;
    }
  }

  return counter;
}
