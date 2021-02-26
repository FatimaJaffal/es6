/*
  The WeakSet object lets you store weakly held objects in a collection.
  The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. 
  If no other references to an object stored in the WeakSet exist, those objects can be garbage collected. 
*/
/*
  Set vs WeakSet;
  * Set:
    - Contains any type of values
    - .size return the size of set
    - forEach and keys are available
  * WeakSet:
    - Contains only objects
    - Can't use .size method
    - forEach and keys are not available
*/

let mainObj = { A: 1 };
let mySet = new Set([mainObj]);
let obj1 = { B: 2 }, obj2 = { C: 3 };
mySet.add(obj1).add(obj2);

console.log(mySet);
console.log(mySet.has(obj2)); // true
console.log(mySet.size); // 3
console.log(mySet.keys());

mySet.delete(obj1);
console.log(mySet.has(obj1)); // false

obj2 = null;
console.log(mySet.has(obj2)); // false
console.log(mySet); // [{A: 1}, {C: 3}]

mySet.add('string');
console.log(mySet); // Set(3) [ {…}, {…}, "string" ]

mySet.forEach(value => {
  console.log(value); // Object { A: 1 } Object { C: 3 }, string
});

// WeakSet

let mainObject = { A: 1 };
let myWeakSet = new WeakSet([mainObject]);
let objOne = { B: 2 }, objTwo = { C: 3 };
myWeakSet.add(objOne).add(objTwo);

console.log(myWeakSet); // WeakSet(3) [ {…}, {…}, {…} ]
console.log(myWeakSet.has(objTwo)); // true
console.log(myWeakSet.size); // undefined
//console.log(myWeakSet.keys()); // TypeError: myWeakSet.keys is not a function

myWeakSet.delete(objOne);
console.log(myWeakSet.has(objOne)); // false

objTwo = null;
console.log(myWeakSet.has(objTwo)); // false
console.log(myWeakSet); // [{A: 1}, {C: 3}]

//myWeakSet.add('string'); // TypeError: WeakSet value must be an object, got "string"

/*
myWeakSet.forEach(value => {
  console.log(value);
}); // TypeError: myWeakSet.forEach is not a function
*/