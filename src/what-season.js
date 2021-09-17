import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
 if (arguments.length === 0) return 'Unable to determine the time of year!';

  let m = new Date(1995, 7, 27, 1, 1, 2, 3);
  if (date.getMonth !== m.getMonth) {
    throw new Error("Invalid date!");
  };
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')
  let t = date.getMonth();
  if (t < 2 || t > 10) return 'winter';
  else if (t < 5) return 'spring';
  else if (t < 8) return 'summer';
  else return 'autumn';
}
