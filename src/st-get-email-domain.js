import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
   let k = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      k += 1;
    }
  }
  if (k == 1) {
    return email.split('@')[1]
  } else {
    return email.split('@')[2]
  }
}
