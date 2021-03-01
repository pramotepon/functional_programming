// Pure Function
function addPure(a, b){
    return a+b;
}
console.log('Pure function: ', addPure(1, 6));
// Avoid Side Effect
const b = 10;
function addSideEffect(a){
    return a+b;
}
console.log('Side Effect: ', addSideEffect(1));

// First class function
// 3.1 Assigning a function to a variable
const addAssigning = function(a, b) {
    return a + b;
}
console.log('Assigning: ', addAssigning(1, 6));
// 3.2 Returning a function
function addReturning(a, b){
    return function(){
        return a + b;
    }
}
const addTwoNumber = addReturning(1, 6);
// console.log('Returning: ', addTwoNumber);
console.log('Returning: ', addTwoNumber());
// 3.3 Accepting a function as an argument
function addNumber(a, b){
    return a + b;
}
function addAccepting(add, a, b){
    return add(a, b);
}
console.log('Accepting', addAccepting(addNumber, 1, 6));


// Higher-Order Functions
const persons = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 10 },
    { name: 'Jim', age: 15 }
]
// Filter
// Default Code
// const kids = [];
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if (person.age <= 15) {
//         kids.push(person)
//     }
// }
// console.log('Kids: ', kids);

// Filter Code
const kids = persons.filter(person => person.age <= 15);
console.log('Kids: ', kids);

// map
// Default Code
// const olderPersons = [];
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     olderPersons.push({
//         ...person,
//         age: person.age * 2
//     });
// }
// console.log('Older Person: ', olderPersons);

// map code
const olderPersons = persons.map(person => ({
    ...person,
    age: person.age *2
}));
console.log('Older Person: ', olderPersons);

// reduce
// Default Code
// let totalAge = 0;
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     totalAge += person.age;
// }
// console.log('Total age: ', totalAge);

// reduce code
const totalAge = persons.reduce((age, person) => age + person.age, 0);
console.log('Total age: ', totalAge);

// Other Higher-Order Functions
// forEach
// Default Code
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     console.log(`Name ${person.name}, age ${person.age}`);
// }

// forEach
persons.forEach(person => console.log(`Name ${person.name}, age ${person.age}`));

// find, findIndex
// Default Code
// let jane;
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if (person.name === 'Jane') {
//         jane = person;
//         break;
//     }
// }
// console.log('Jane: ', jane);

// find
const jane = persons.find(person => person.name === 'Jane');
console.log('Jane: ', jane);
// findIndex
const janeIndex = persons.findIndex(person => person.name === 'Jane');
console.log('Jane Index', janeIndex);

// every, some
// Default Code
// let isKids = true;
// for(let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if (person.age > 15) {
//         isKids = false;
//         break;
//     }
// }
// console.log('isKids: ', isKids);

// every
const isKids = persons.every(person=>person.age <= 15);
console.log('isKids: ', isKids);

// some
const isKid = persons.some(person => person.age <= 9);
console.log('isKid: ', isKid);

// myFilter
// function myFilter(arr, callback){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         const element = arr[i];
//         if(callback(element)){
//             result.push(element);
//         }
//     }
//     return result;
// }
// use myFilter
// const myKids = myFilter(persons, person => person.age <= 15);
// console.log(myKids);

// or myFilter
Array.prototype.myFilter = function myFilter(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        const element = this[i];
        if(callback(element)){
            result.push(element);
        }
    }
    return result;
}
const myKids = persons.myFilter(person => person.age <= 15);
console.log(myKids);

// myMap
// function myMap(arr, callback){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         const element = arr[i];
//         result.push(callback(element));
//     }
//     return result;
// }
// use myMap
// const myPersons = myMap(persons, person => ({
//     ...person,
//     age: person.age *2
// }));
// console.log(myPersons);

// or myMap
Array.prototype.myMap = function myMap(callback){
    const result = [];
    for(let i = 0; i < this.length; i++){
        const element = this[i];
        result.push(callback(element));
    }
    return result;
}
const myPersons = persons.myMap(person => ({
    ...person,
    age: person.age *2
}));
console.log(myPersons);


// Closures
function outer(){
    const name = 'Outer';
    return function inner(){
        console.log('Outer name', name);
    }
    inner();
}
const innerFunction = outer();
innerFunction();

// Data privacy
function createTimes(){
    let counter = 0;
    return function times(){
        counter += 1;
        console.log('Counter', counter);
    }
}
const times = createTimes();
times();
times();

// Stateful function
// Default
// function addFive(a) {
//     return a + 5;
// }
// function addTen(a){
//     return a + 10;
// }
// console.log('Add Five: ', addFive(10));
// console.log('Add Ten: ', addTen(10));

// Closures
function createAdd(a){
    return function(b){
        return a + b;
    }
}
const addFive = createAdd(5);
const addTen = createAdd(10);
console.log('Add Five: ', addFive(10));
console.log('Add Ten: ', addTen(10));

// Recursion
