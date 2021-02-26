/*
  foreach(currentVal, index ==> optional, array ==> optional): 
   - The forEach() method executes a provided function once for each array element.
   - is not invoked for index properties that have been deleted or are uninitialized.
*/

const arr = [1, 2, 3, 4, 5, , 6];
arr.forEach((element, index) => {
  console.log(`${index}: ${element}`); // 0: 1  1: 2 2: 3 3: 4 4: 5 6: 6
});

let loop = (element, index) => console.log(`${index}: ${element}`);
arr.forEach(loop); // // 0: 1  1: 2 2: 3 3: 4 4: 5 6: 6

/*
  in the set the current key is the same as the current value.
*/

const mySet = new Set([1, 2, 2, 3, 4, 5, 6]);

mySet.forEach((item1, item2) => {
  console.log(`${item1}: ${item2}`); // 1: 1 2: 2 3: 3 4: 4 5: 5 6: 6
});

const myMap = new Map([["A", 1], ["B", 2], ["C", 3]]);
myMap.forEach((val, key) => {
  console.log(`${key}: ${val}`);
});