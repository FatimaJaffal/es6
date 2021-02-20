/*
  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
  or properties from objects, into distinct variables.

  Destructuring:
    - array
    - object
    - parameter
*/

// Object

// old way

var info = {
  username: 'Test',
  age: 23,
  city: 'Amman'
};

var username = info.username, age = info.age, city = info.city;

console.log(`Name: ${username}, Age: ${age}, City: ${city}`); // Name: Test, Age: 23, City: Amman

// new way
const newInfo = {
  username: 'Test',
  age: 23,
  city: 'Amman',
  langs: {
    java: '50%',
    php: '90%',
    ruby: '70%'
  }
};

({ username, age, city, country = 'Jordan' } = newInfo);

console.log(`Name: ${username}, Age: ${age}, City: ${city}, Country: ${country}`); // Name: Test, Age: 23, City: Amman, Country: Jordan

const { username: userName, age: userAge, city: userCity, country: userCountry = 'Jordan', langs: { java :javaProgress, php: phpProgress } } = newInfo;

console.log(`Name: ${userName}, Age: ${userAge}, City: ${userCity}, Country: ${userCountry}, Java progress: ${javaProgress}`); // Name: Test, Age: 23, City: Amman, Country: Jordan, Java progress: 50%

const { java, php, ruby } = newInfo.langs

console.log(`Progress: Java: ${java}, PHP: ${php}, Ruby: ${ruby}`); // Progress: Java: 50%, PHP: 90%, Ruby: 70%

// Array

const food = ["Burger", "Pizza", "Chicken", "Rice"];
const [one, two, three, four = "Default"] = food;

// if variables already declared => [one, two, three] = food;

console.log(`${one}, ${two}, ${three}, ${four}`); // Burger, Pizza, Chicken, Rice

// skip elements using ,
const [b, , c] = food;

console.log(`${b}, ${c}`); // Burger, Chicken

const food2 = ["Burger", "Pizza", "Chicken", "Rice", ["Apple", "Banana", "Mango"]];

const[f1, f2, f3, f4, [f5, f6, f7, f8 = 'Default']] = food2;

console.log(`${f1}, ${f2}, ${f3}, ${f4}, ${f5}, ${f6}, ${f7}, ${f8}`); // Burger, Pizza, Chicken, Rice, Apple, Banana, Mango, Default

const food3 = ["Burger", "Pizza", "Chicken", "Rice", "Apple", "Banana", "Mango"];

const [first, second, third, ...other] = food3; // rest operator

console.log(`${first}, ${second}, ${third}, ${other}`); // Burger, Pizza, Chicken, Rice,Apple,Banana,Mango

// swapping

// old way

var book = "Video", video = "Book";

console.log(`Book is ${book} and Video is ${video}`); // Book is Video and Video is Book

var temp = book;
book = video;
video = temp;

console.log(`Book is ${book} and Video is ${video}`); // Book is Book and Video is Video

// new way

let newBook = "Video", newVideo = "Book";
[newBook, newVideo] = [newVideo, newBook];

console.log(`Book is ${newBook} and Video is ${newVideo}`); // Book is Book and Video is Video

// Mixed content

const user = {
  myName: 'Fatima',
  MyCity: 'Amman',
  mySkills: {
    html: 'html',
    css: 'css',
    js: ['Vuejs', 'Reactjs', 'Angularjs']
  }
};

const { myName, MyCity, mySkills: { html, css, js: [s1, s2, s3] } } = user;

console.log(`Name: ${myName}, city: ${MyCity}, skills: ${html}, ${css}, ${s1}, ${s2}, ${s3}`); // Name: Fatima, city: Amman, skills: html, css, Vuejs, Reactjs, Angularjs

// Function Parameters

let showInfo = ({ myName, MyCity, mySkills: { html, css, js: [s1, s2, s3] } }) => {
  console.log(`Name: ${myName}, city: ${MyCity}, skills: ${html}, ${css}, ${s1}, ${s2}, ${s3}`); // Name: Fatima, city: Amman, skills: html, css, Vuejs, Reactjs, Angularjs
}

showInfo(user);
