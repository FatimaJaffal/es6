/*
  The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. 
  The keys must be objects and the values can be arbitrary values.
*/
/*
  Map vs WeakMap:
  * Map:
    - Contains any type of values
    - .size return the size of set
    - forEach and keys are available
  * WeakMap:
    - Contains only objects
    - Can't use .size method
    - forEach and keys are not available
*/

let myMap = new Map();
let objOne = { A: 1};
myMap.set(objOne, "test");
myMap.set('B', 2);
myMap.set('C', 3);

console.log(myMap); // Map(3) { {…} → "test", B → 2, C → 3 }
console.log(myMap.get('C')); // 3
console.log(myMap.has('B')); // true

myMap.delete('B');
console.log(myMap.has('B')); // false

objOne = null;
console.log(myMap.get(objOne)); // undefined
console.log(myMap.size); // 2

// WeakMap

let myWeakMap = new WeakMap();
let obj1 = { A: 1};
myWeakMap.set(obj1, "test");
//myWeakMap.set('B', 2); // TypeError: WeakMap key must be an object, got "B"
//myWeakMap.set('C', 3); // TypeError: WeakMap key must be an object, got "C"

console.log(myWeakMap); // WeakMap { {…} → "test" }
console.log(myWeakMap.get(obj1)); // test

obj1 = null;
console.log(myWeakMap.get(obj1)); // undefined
console.log(myWeakMap); // WeakMap { {…} → "test" }
console.log(myWeakMap.size); // undefined
