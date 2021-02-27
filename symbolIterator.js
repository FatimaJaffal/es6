/*
  The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of.
  An iterable is an object that implements a function whose key is Symbol.iterator and returns an iterator.
  An iterator is an object with a function called next inside it. next is an object with two keys value and done.
  value contains the next element of the iteration and done a flag saying if the iteration has finished.
*/

let myName = "Test";
let myNum = 1000;
let myObj = {};

console.log(typeof(myName)); // string
console.log(typeof(myName[Symbol.iterator])); // function
console.log(typeof(myNum[Symbol.iterator])); // undefined
console.log(typeof(myObj[Symbol.iterator])); // undefined

let theIterator = myName[Symbol.iterator]();

console.log(theIterator); // String Iterator {  }
console.log([1, 2, 3][Symbol.iterator]()); // Array Iterator {  }
console.log(theIterator.next()); // Object { value: "T", done: false }
console.log(theIterator.next()); // Object { value: "e", done: false }
console.log(theIterator.next()); // Object { value: "s", done: false }
console.log(theIterator.next()); // Object { value: "t", done: false }
console.log(theIterator.next()); // Object { value: undefined, done: true }

for (let char of myName) {
  console.log(char);
}

// custom iterable object
const info = {
  name: 'test',
  age: '23',
  country: 'Jordan',
  [Symbol.iterator]() {
    let step = 0;
    let properties = Object.keys(this);
    return {
      next() {
        return {
          value: properties[step],
          done: step++ === properties.length
        }
      }
    }
  }
};

for (let prop of info) {
  console.log(prop);
}




