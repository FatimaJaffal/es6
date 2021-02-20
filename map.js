
/*
  The Map object holds key-value pairs and remembers the original insertion order of the keys.
*/

// object
// converts all keys to strings.
var user = {};
user['10'] = 'string';
user[10] = 'number';

console.log(user); // Object { 10: "number" }


let myMap = new Map([
  ['10', 'string'],
  [10, 'number']
]);

//myMap.set('10', 'string');
//myMap.set(10, 'number');

console.log(myMap); // Map { 10 → "string", 10 → "number" }

// Map properties (size)
console.log(myMap.size); // 2

// Map methods (set, get, has, delete, clear)

myMap.set('key', 'value');

console.log(myMap.get('key')); // value
console.log(myMap.has('key')); // true
