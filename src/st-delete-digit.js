import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  for (let g = 0; g < 1; g++) {
    let result = 0;
    let i = 1;
    while (parseInt(n / i) > 0) {
      let smile = parseInt(n / (i * 10)) * i + (n % i);
      i *= 10;
      result = Math.max(result, smile);
    }
    n = result;
  }
  return n;
}
