import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let sum1 = new Array(26);
  let sum2 = new Array(26);
  sum1.fill(0);
  sum2.fill(0);

  let i, calculate = 0;

  for (i = 0; i < s1.length; i++)
    sum1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;

  for (i = 0; i < s2.length; i++)
    sum2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;

  for (i = 0; i < 26; i++)
    calculate += (Math.min(sum1[i], sum2[i]));

  return calculate;
}
