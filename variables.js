/*
  var:
    - Function scope
    - Can be redeclared
    - When you call variable before declare it var will return undefined
    - Create properties on the window object, When it is not within any scope(global), this will make it accessable from everywhere.
  
  let:
    - Block scope
    - Can't be redeclared
    - When you call variable before declare it, an error will be raised
    - Doesn't create property on the window object.
  
  const:
    - Block scope
    - Can't be redeclared
    - When you call variable before declare it, an error will be raised
    - Doesn't create property on the window object.
    - Can't be re-assinged.

*/


// Function vs Block scope

function testFunctionScope() {
  var x = 5;
  if (true) {
    var x = 10;
    console.log(x);
  }
  console.log(x);
}

testFunctionScope();

function testBlockScope() {
  let x = 5;
  if (true) {
    let x = 10;
    console.log(x);
  }
  console.log(x);
}

testBlockScope();

// redeclaration
var x = 5;
var x = 10;
console.log(x);

// this will raise an error (syntaxError: redeclaration of var x).
let x = 5;
let x = 10;
console.log(x);

// call variable before declare it
console.log(y); // undefined
var y = 10;

//console.log(t); // ReferenceError: can't access lexical declaration `t' before initialization.
let t = 10;

// Window object property (The window object represents an open window in a browser).
console.log(window.y); // 10
console.log(window.t); // undefined


// Re-assignment
var t1 = 5;
t1 = 10;
console.log(t1); // 10

let t2 = 5;
t2 = 10;
console.log(t2); // 10

const TEST = 5;
TEST = 6;
console.log(TEST); // TypeError: invalid assignment to const `TEST'

const LANGS  = [];
LANGS.push('JS', 'PHP', 'JAVA');
console.log(LANGS); // valid we didn't change the variable itself we add elements to it.

const INFO = {
  'name': 'Fatima',
  'age': 23
};

INFO.name = 'test';
console.log(INFO); // valid

// to freeze the object.
Object.freeze(INFO);
INFO.name = 'test agian';
console.log(INFO); // The name will not change.


