import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, obj) {
 if (obj.repeatTimes == undefined) {
    let a = String(str) + `${String(obj.addition)}`;
    return a;
  }
  let separator = obj.separator || '+';
  let additionSeparator = obj.additionSeparator || '|';
  let addition = obj.addition || '';
  if (obj.addition === false) {
    addition = 'false';
  } else if (obj.addition === null) {
    addition = 'null';
  }
  if (str == addition) {
    str += str;
  }
  let nat = `${String(addition)}` + `${additionSeparator}`;
  let cat = nat.repeat(Number(obj.additionRepeatTimes));
  let g = cat.slice(0, -(additionSeparator ? additionSeparator.length : 1))
  let turnip = String(str) + `${g}` + `${separator}`;
  let bird = turnip.repeat(Number(obj.repeatTimes));
  return bird.slice(0, -(separator ? separator.length : 1))
}
