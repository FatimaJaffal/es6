// Template strings

const GENDER = "Female";

let oldWay = "Hello I am Fatima \n" +
"I am " + GENDER + "\n" +
"From Jordan";

console.log(oldWay);

let newWay = `Hello I am Fatima
I am  ${GENDER}
From Jordan`;

console.log(newWay);

let username = "Fatima", age = 23;
const myHtmlMarkup = `
<div class="card">
    <h2 class="name">${username}</h2>
    <span class="age">${age}</span>
</div>
`;

document.body.innerHTML = myHtmlMarkup;