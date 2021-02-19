/*
    Spread syntax (...) allows an iterable such as an array expression or string 
    to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
    or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

*/

let arrOne = [1, 2, 3], arrTwo = [4, 5, 6];
console.log(arrOne.concat(arrTwo));

let all = [...arrOne, ...arrTwo];
console.log(all);

sum = (x, y, z) => x + y + z;
const myNumbers = [1, 2, 3];

console.log(sum(1, 2, 3)); // 6
console.log(sum(myNumbers)); // 1,2,3undefinedundefined
console.log(sum(...myNumbers)); // 6

let origin = [1, 2, 3], copy = origin;
copy.push(4);
console.log(origin); // Array(4) [ 1, 2, 3, 4 ]
console.log(copy); // Array(4) [ 1, 2, 3, 4 ]

let copySpread = [...origin];
copySpread.push(10);
console.log(origin); // Array(4) [ 1, 2, 3, 4 ]
console.log(copySpread); // Array(5) [ 1, 2, 3, 4, 10 ]

let arr = [1, 2, 3, 100, -20, -10, 500];
console.log(Math.min(arr)); // NaN
console.log(Math.min(...arr)); // -20

let getMin =  (...params) => Math.min(...params);
console.log(getMin(...arr)); // -20
