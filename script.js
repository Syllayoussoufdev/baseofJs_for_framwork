let change = 5; // variable 
console.log(change);
change = 10; // reassignment
console.log(change);
const constant = 15; // constant variable
console.log(constant);
// constant = 20; // error: reassignment of constant variable

function salutation(name) { // function declaration
    return `Hello, ${name}!`; // template literal
}

const sayHello = (name) => `Hello, ${name}!`; // arrow function fution fleche
console.log(sayHello);  // function reference


const user = { // object literal
    name: 'Alice',
    age: 30,
}

console.log(user.name); // dot notation
console.log(user['age']); // bracket notation





