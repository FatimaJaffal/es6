/*
  Object Literals:
    - Property value shorthand
    - Methods shorthand
    - Computed object property name
*/

// Property value shorthand

const username = 'Fatima', github = 'FatimaJaffal';
const user = {
  username: username,
  github: github
};

// if the value matches the key, then we can rewrite it as the following:
const userObj = {
  username,
  github
};

console.log(userObj); // Object { username: "Fatima", github: "FatimaJaffal" }

// Methods shorthand

// old way:

/*
  const userMethod = {
    myMethod: function(param) {
      return param;
    }
  };
*/

const userMethod = {
  myMethod (param) {
    return param;
  }
};

console.log(userMethod.myMethod('test'));

// Computed object property name

// old way

const myVar = 'key';
const myObj = { myProperty: 'value' };
myObj[myVar] = 'value';

console.log(myObj); // Object { myProperty: "value", key: "value" }

// new way

const myNewObj = { 
  myProperty: 'value',
  [myVar]: 'value'
};

console.log(myNewObj); // Object { myProperty: "value", key: "value" }
