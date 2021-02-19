
function showMyInfo(username, role, theme) {
    return `Hello ${username}, Your role is: ${role}, website theme is: ${theme}`;
}

console.log(showMyInfo('Fatima', 'Admin', 'Blue')); // Hello Fatima, Your role is: Admin, website theme is: Blue
console.log(showMyInfo('Fatima', 'Admin')); // Hello Fatima, Your role is: Admin, website theme is: undefined

function oldWay(username, role, theme) {
    username = username || "unknown";
    role = role || "unknown";
    theme = theme || "unknown";
    return `Hello ${username}, Your role is: ${role}, website theme is: ${theme}`;
}

console.log(oldWay()); // Hello unknown, Your role is: unknown, website theme is: unknown
console.log(oldWay('Fatima', 'Admin', 'Blue')); // Hello Fatima, Your role is: Admin, website theme is: Blue

function newWay(username = "unknown", role = "unknown", theme =  "unknown") {
    return `Hello ${username}, Your role is: ${role}, website theme is: ${theme}`;
}

console.log(newWay()); // Hello unknown, Your role is: unknown, website theme is: unknown
console.log(newWay('Fatima', 'Admin', 'Blue')); // Hello Fatima, Your role is: Admin, website theme is: Blue
