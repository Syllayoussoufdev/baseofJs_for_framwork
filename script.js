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
let utilisationfunc = sayHello('youssouf'); // function call
console.log(utilisationfunc);  // function reference


const user = { // object literal
    name: 'Alice',
    age: 30,
}

console.log(user.name); // dot notation
console.log(user['age']); // bracket notation

const numbers = [1, 2, 3, 4, 5]; // array literal
console.log(numbers[0]); // accessing array element

const doubled = numbers.map(n => n * 2); // array method with arrow function
console.log(doubled[1]);

//destructuring
const [first, second] = numbers; // array destructuring pour extraire les valeurs du tableau
console.log(first, second);
const { name, age } = user;
console.log(name);

const person = { name: 'Bob', age: 25 }; // object literal
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

// spread operator
const newNumbers = [...numbers, 6, 7, 8]; // array spread
console.log(newNumbers);
const newUser = { ...user, city: 'New York' }; // object spread
console.log(newUser);

// chaine de carractere modern
const clientname = 'client';
const greeting = `Hello, ${clientname}! Welcome to our site.`;
console.log(greeting);

//  operator ternary
const address = { street: '123 Main St', city: 'Anytown' };
console.log(address?.street); // optional chaining

const isLogged = false;
comsole.log(isLogged ? 'User is logged in' : 'User is not logged in'); // ternary operator

// callback function une fonction qui est passée en argument à une autre fonction et qui est appelée à un moment donné




