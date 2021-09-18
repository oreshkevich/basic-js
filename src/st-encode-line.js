import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let answer = '';
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      k += 1;
    } else {
      answer += k + str[i];
      k = 1;
    }
  }
  return answer.replace(/1/g, '');
}
