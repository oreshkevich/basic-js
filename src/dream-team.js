import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
   let res = Array.isArray(arr);
  if (res == true) {
    let arrString = arr.filter(function (item) {
      return typeof item == 'string';
    });
    let g = []
    for (let i = 0; i <= arrString.length - 1; i++) {
      g.push(arrString[i].split(' ').join(''))
    }

    let a = g.map(item => item.charAt(0).toUpperCase())
    return a.sort().join('');

  } else {
    return false;
  }
}
