/* 
    The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
    providing a way to represent variadic functions in JavaScript.
    (In mathematics and in computer programming, a variadic function is a function of indefinite arity).
    (arity: is the number of arguments or operands taken by a function or operation).
*/

let sum = (x, y) => x + y;

console.log(sum(5, 6)); // 11
console.log(sum(5, 6, 7)); // 11

let addAll = (...numbers) => {
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(addAll(1, 2, 3, 4, 5, 6)); // 21
