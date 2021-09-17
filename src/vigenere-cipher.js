import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
 encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let i = 0,
      crypt;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z][]/g, ' ').replace(/[A-Z]/g,
      function (cat) {
        crypt = key[i++ % key.length];
        return String.fromCharCode((((cat.charCodeAt(0) - 65) + (crypt.charCodeAt(0) - 65)) % 26 + 65));
      });
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let i = 0;
    let crypt;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z][]/g, ' ').replace(/[A-Z]/g,
      function (cat) {
        crypt = key[i++ % key.length];
        return String.fromCharCode((((cat.charCodeAt(0) - 65) + (26 - (crypt.charCodeAt(0) - 65))) % 26 + 65));
      })
  }
}
