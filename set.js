/*
  The Set object lets you store unique values of any type, whether primitive values or object references.
  Set: new Set(Iterable)
*/

let myBooks = new Set([1, 2, 3, 3]);

console.log(myBooks); // Set(3) [ 1, 2, 3 ]
console.log(myBooks[0]); // undefined

let arr = [1, 2, 3, 3, 4, 5, 5];

myBooks = new Set(arr);

console.log(myBooks); // Set(5) [ 1, 2, 3, 4, 5 ]
console.log([...myBooks]); // Array(5) [ 1, 2, 3, 4, 5 ]

let names = new Set(['name1', 'name2']);
names.add('name3').add('name4');
names.delete('name3');

console.log(names); // Set(3) [ "name1", "name2", "name4" ]
console.log(names.has('name4')); // true

names.clear();

console.log(names); // Set []
