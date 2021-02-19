/*
  startsWith: string.startsWith(search string, position = 0)
  endsWith: string.endsWith(search string, position = string.length)
  includes: string.includes(search string, position = 0)
  repeat: string.repeat(count = 0)
*/

let x = 'test';

console.log(x.startsWith('tes')); // true
console.log(x.endsWith('est')); // true

x = 'test again';

console.log(x.startsWith('test')); // true
console.log(x.startsWith('test', 2)); // false
console.log(x.endsWith('again')); // true
console.log(x.endsWith('test', 4)); // true

x = " test includes";

console.log(x.includes('includes')); // true
console.log(x.includes('include')); // true

x = 'test repeat ';

console.log(x.repeat(2)); // test repeat test repeat
