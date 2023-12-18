/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1 */

function sameCase(char1, char2) {
    if (!/[a-zA-Z]/.test(char1) || !/[a-zA-Z]/.test(char2)) {
      return -1;
    }
  
    if ((char1.toUpperCase() === char1 && char2.toUpperCase() === char2) ||
        (char1.toLowerCase() === char1 && char2.toLowerCase() === char2)) {
      return 1;
    }
  
    return 0;
  }
  
  console.log(sameCase('a', 'g'));
  console.log(sameCase('A', 'C'));
  console.log(sameCase('b', 'G'));
  console.log(sameCase('B', 'g'));
  console.log(sameCase('0', '?'));