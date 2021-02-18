// Function without parameters

// regular function
let regular = function() {
  return 'Regular Function';
}
console.log(regular());

let arrow1 = () => { 
  return 'Arrow1 Function';
};
console.log(arrow1());

// or
let arrow2 = () => 'Arrow2 Function';
console.log(arrow2());

// if function doesn't have parameters
let arrow3 = _ => 'Arrow3 Function';
console.log(arrow3());


// Function with one parameter
let regularParam = function (param) {
  return param * 2;
}
console.log(regularParam(6));

let arrowParam = (param) => param * 2; // or let arrowParam = param => param * 2; because we only have one parameter.
console.log(arrowParam(6));

// Function with multiple parameters
let regularMulti = function(param1, param2) {
  return param1 * param2;
}
console.log(regularMulti(5, 6));

let arrowMulti = (param1, param2) => param1 * param2;
console.log(arrowMulti(5, 6));

// this keyword
/*
  - Regular function: represents the element that called the function
  - Arrow function: always represents the object that defined the arrow function
*/

// create elements to test.
var div = document.createElement("div");
div.id = 'show';
var btn = document.createElement("button");
btn.innerHTML = 'click';
btn.id = 'btn';
document.body.appendChild(div);
document.body.appendChild(btn);

let regularTest = function() {
  div.innerHTML = this;
}

// when window object called the function
//window.onload = regularTest(); // [object Window]

// when button object called the function
//btn.addEventListener('click', regularTest); // [object HTMLButtonElement]

let arrowTest = _ => div.innerHTML = this;
window.onload = arrowTest(); // [object Window]

btn.addEventListener('click', arrowTest); // [object Window]