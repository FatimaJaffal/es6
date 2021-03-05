/*
  The function* declaration defines a generator function, which returns a Generator object.
  The Generator object is returned by a generator function and 
  it conforms to both the iterable protocol and the iterator protocol.

  Generators are functions that can be exited and later re-entered. 
  Their context (variable bindings) will be saved across re-entrances.

  Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. 
  When the iterator's next() method is called, the generator function's body is executed until the first yield expression
  
  For more information about Iteration protocols
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
*/

function* generateTicketes() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let iterator = generateTicketes();

console.log(typeof(iterator)); // object
console.log(iterator.next()); // Object { value: 1, done: false }
console.log(iterator.next()); // Object { value: 2, done: false }
console.log(iterator.next()); // Object { value: 3, done: false }
console.log(iterator.next()); // Object { value: 4, done: false }
console.log(iterator.next()); // Object { value: undefined, done: true }

let tickets = generateTicketes(); // iterator

for(let t of tickets) {
  console.log(t); // 1 2 3 4
}

for(let t of generateTicketes()) { // generator
  console.log(t); // 1 2 3 4
}

function* generateNumbers(nums) {
  for(let num of nums)
    yield num;
}

let numbersIterator = generateNumbers([1, 2, 3, 4, 5]);

console.log(numbersIterator.next().value); // 1
console.log(numbersIterator.next().value); // 2
console.log(numbersIterator.next().value); // 3
console.log(numbersIterator.next().value); // 4
console.log(numbersIterator.next().value); // 5

// A return statement in a generator, when executed, will make the generator finish
function* names() {
  yield "Name1";
  yield "Name2";
  yield "Name3";
  return "Name4";
  yield "Name5";
}

let theNames = names();

console.log(theNames.next()); // Object { value: "Name1", done: false }
console.log(theNames.next()); // Object { value: "Name2", done: false }
console.log(theNames.next()); // Object { value: "Name3", done: false }
console.log(theNames.next()); // Object { value: "Name4", done: true }
console.log(theNames.next()); // Object { value: undefined, done: true }

// delegate generators

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateNames() {
  yield "Name1";
  yield "Name2";
  yield "Name3";
}

function* generateAll() {
  yield* generateNums();
  yield* generateNames();
}

let delegate = generateAll();

console.log(delegate.next()); // Object { value: 1, done: false }
console.log(delegate.next()); // Object { value: 2, done: false }
console.log(delegate.next()); // Object { value: 3, done: false }
console.log(delegate.next()); // Object { value: "Name1", done: false }
console.log(delegate.next()); // Object { value: "Name2", done: false }
console.log(delegate.next()); // Object { value: "Name3", done: false }
console.log(delegate.next()); // Object { value: undefined, done: true }
