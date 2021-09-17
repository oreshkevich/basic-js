import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr ) {
 let res = Array.isArray(arr);
  if (res !== true) {
    throw new RangeError();
  } else {
    let g = []
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] == '--discard-next') {
        delete arr[i + 1];
      } else if (arr[i] == '--discard-prev') {
        g.pop();
      } else if (arr[i] == '--double-next') {
        g.push(arr[i + 1]);

      } else if (arr[i] == '--double-prev') {
        g.push(arr[i - 1]);

      } else {
        g.push(arr[i]);
      }
    }
    return g.filter((el) => el !== undefined);
  }
}
