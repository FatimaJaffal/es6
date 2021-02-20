/*
  The data type symbol is a primitive data type.
  - Every symbol value returned from Symbol() is unique
  - Enabling opaque data types

*/

// Symbol() is unique

const mySymbolOne = Symbol();
const mySymbolTwo = Symbol();

console.log(mySymbolOne === mySymbolTwo); // false

// opaque property

const myTestSymbol = Symbol();

const myObj = {
  name: 'test',
  [myTestSymbol]: 'hidden from iteration'
};

for (let val of Object.entries(myObj)) {
  console.log(val);
} // Array [ "name", "test" ]

console.log(Object.keys(myObj)); // Array [ "name" ]

console.log(Object.getOwnPropertySymbols(myObj)); // Array [ Symbol() ]

/*
  Static methods:
    1. Symbol.for(key): 
      Searches for existing symbols with the given key and returns it if found. 
      Otherwise a new symbol gets created in the global symbol registry with key.
    2. Symbol.keyFor(sym): Retrieves a shared symbol key from the global symbol registry for the given symbol.
*/
const symbolOne = Symbol.for('testing');
const symbolTwo = Symbol.for('testing');

console.log(symbolOne === symbolTwo); // true

console.log(Symbol.keyFor(symbolTwo)); // testing

// properties:   description: a read-only string containing the description of the symbol.
console.log(symbolTwo.description); // testing
