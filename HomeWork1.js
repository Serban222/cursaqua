// 1.1 ES6 - METHODS
//https://www.w3schools.com/js/js_es6.asp
//ES6  brings out a lot of new features to JavaScript, including let, const, arrow functions, template literals, destructuring, and more. some of the most notable features include:
// 1. let and const
// 2. Arrow Functions
// 3. Template Literals
// 4. Destructuring
// 5. Default Parameters
// 6. Spread and Rest Operators
// 7. Classes
// 8. Modules
// 9. Promises
// 10. Async/Await
// 11. Enhanced Object Literals
// 12. Iterators and Generators
// 13. Symbol Type
// 14. Map and Set Data Structures
// 15. New String Methods
// 16. New Array Methods
// 17. New Number Methods
console.log(a); // shows undefined, if `a` wasn't declared next lines, it will show ReferenceError: a is not defined
{
  var a = 321;
  let b = 123;
  console.log(b); // shows 123
};
console.log(a); // shows 321
console.log(b); // ReferenceError: b is not defined
// You can run a method, return its result and manipulate it, all at the same time
// using arrow functions.
// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const x = (x, y) => x * y;
 // You can also do this and skip the parantheses for the argument if you have only an argument,
 // and also skip the braces if you have only a single line of code.
 //1.2
 // 'var' keyword is used to declare variables globally.More actions
// 'let' keyword is used to declare variables only in the scope they are declared in.
// This is useful because you don't want to have variables colliding in different scopes, you don't
// want to overwrite variables and you want to follow the encapsullation and abstraction OOP concepts.

// The next example uses 'let'.
// Running the script returns an error because I try to log the variable out of its scope.

{
    {
        let x = 2;
        console.log(x);
    }
    
    // ERROR:
    // console.log(x);
}

// The next example uses 'var'.
// The code is identical, the only difference being that the variable is declare as 'var'.

{
    {
        var x = 2;
    }
    
    console.log(x);
}

// You can't also redeclare it as a new object in memory with the same name.
// You have to use the same variable and change its value. This way you avoid memory leaks.

{
    let a = 0;
    a = 1;

    // ERROR:
    // let a = 0;
    // let a = 1;
}

{
    var a = 0;
    var a = 1;
}
// 'const' keyword is is used to declare constant values.
// The following block of code returns an error because I try to change the constant.

{
    const x = 1;
    
    // ERROR:
    // x = 2;
    console.log(x);
}

// 'const' scope is like 'let' in that it is available only in the block of code it is declared in.

{
    const a = 0;
    console.log(a);
}

// ERROR:
// console.log(a);
//1.3 The spread operator is used to expand an iterable (like an array) into more elements.
//Only iterable values, like Array and String, can be spread in array literals and argument lists. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:
const hex = ['0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    console.log(hex); // logs the elements as a list
    console.log(...hex); // logs the elements 1 by one
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
//1.4 Objects
//Objects: How to iterate over an object, deep copy.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Use JSON to make the object a string and then parse it into a deep copy.More actions

const individual = JSON.parse(JSON.stringify(person));

console.log(person);
console.log(individual);
const apiData = [
    { id: 1, name: "Product A", price: 99.99 },
    { id: 2, name: "Product B", price: 149.99 },
    { id: 3, name: "Product C", price: 79.99 }
  ];
  // Iterate over the array of objects and log each product's name and price
  for (const product of apiData) {
    console.log(`${product.name}: $${product.price}`);
  }
  // Iterate over the object properties and log each key-value pair
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
 // 1.5 Arrays - accessor, iteration, and mutator methods (which they are, how to use them)
 // Accessor methods: These methods return a new array without modifying the original array.
const numbers = [1, 2, 3, 4, 5];
// Concatenate 2 iterable objects.More actions

{
    let letters = ['a', 'b', 'c'];
    let numbers = [1, 2, 3];

    let concatenated = letters.concat(numbers);
    console.log(concatenated);
}

// Join an iterable object into a string with the specified character. Default is ',' .

{
    let letters = ['a', 'b', 'c'];
    let joined = letters.join('-');

    console.log(joined);
}

// Slice the iterable object into a smaller iterable object by index.
// This method includes the first argument and goes until before the second
// argument.

{
    let numbers = [0, 1, 2, 3, 4];
    let cut = numbers.slice(1, 3);

    console.log(cut);
}

// Returns the first index of the value found.

{
    let letters = ['a', 'b', 'c', 'b'];
    let firstIndex = letters.indexOf('b');

    console.log(firstIndex);
}

// Returns the last index of the value found.

{
    let letters = ['a', 'b', 'c', 'b'];
    let lastIndex = letters.lastIndexOf('b');

    console.log(lastIndex);
}
// Creates a new array by applying a function to each element.
{
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9]
}
// Sort ascendingly:

{
    const arr = [5, 4, 3, 2, 1];
    console.log(arr.sort());
}

// Adds element at the beggining of the array:

{
    const arr = [5, 4, 3, 2, 1];
    arr.unshift(0);
    console.log(arr);
}

// Removes element at the begging of the array:

{
    const arr = [5, 4, 3, 2, 1];
    arr.shift();
    console.log(arr);
}

// Adds element at the end of the array:

{
    const arr = [5, 4, 3, 2, 1];
    arr.push(0);
    console.log(arr);
}

// Removes element at the end of the array:

{
    const arr = [5, 4, 3, 2, 1];
    arr.pop();
    console.log(arr);
}

// Removes arg1 numbers of elements starting at the arg0 index,
// and optionally replaces them with the arg2 element, if specified.

{
    const arr = [5, 4, 3, 2, 1];
    arr.splice(0, 2, 'replacement');
    console.log(arr);
}

// Reverse array.

{
    const arr = [5, 4, 3, 2, 1];
    arr.reverse();
    console.log(arr);
}

// Changes elements of array into the element specified by arg0,
// from arg1 to (arg2 - 1).

{
    const arr = [5, 4, 3, 2, 1];
    arr.fill('x', 1, 3);
    console.log(arr);
}

// Calls a function specified by arg0 for each element in an array.

{
    const arr = [5, 4, 3, 2, 1];
    arr.forEach(element => console.log(element));
}
// Iterate using for/of:

{
    const hex = ['0', '1', '2', '3', '4', '5'];

    console.log('Iterate using for/of:');
    for (const element of hex) {
        console.log(element);
    }
}

// Ierate using for:More actions

{
    const hex = ['0', '1', '2', '3', '4', '5'];

    console.log('Iterate using for loop:');
    for (let i = 0; i < hex.length; i++) {
        console.log(hex[i]);
    }
}

// Iterate using for each:

{
    const hex = ['0', '1', '2', '3', '4', '5'];

    console.log('Iterate using for each:');
    hex.forEach(element => console.log(element));
}
//1.6 Promises.Callbacks
// Promises are objects in ES6 that are either accomplished or not.
// To check for accomplishment you have 2 arguments - one for accomplishment, one for failure.
// When the promise is accomplished it triggers the accomplishment's method,
// and when it fails, it triggers the failure's method.
// The failure is in other words a maximum interval of time that the application waits
// in order to run the accomplishment.
//
// Promises are a kind of conditional logic, in that they are used for this purpose
// in asynchronous operations. You can't use 'if' statements in asynchronous logic
// because of the simple fact that asynchronous operations may or may not ever happen
// and waiting for a condition to accomplish halts the entire program.

// Regular promise based on a boolean:

{
    const inputVar = true;

    const promise = new Promise((resolve, reject) => {
        if (inputVar) {
            resolve('Success');
        }
        else {
            reject('Error');
        }
    });

    promise.then(msg => {
        console.log(msg);
    }).catch(err => {
        console.log(err);
    });
}

// Promise that triggers after an interval:

{
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        }, 1000);
    });

    promise.then(msg => {
        console.log("Message: " + msg);
    }).catch(() => {
        console.log("Error");
    });
}
// Callbacks are methods that are passed as arguments to another methods.More actions

function writeLog(text) {
    console.log(text);
}

function doubleNumber(number) {
    return number * 2;
}

writeLog(doubleNumber(5));
//1.7 Async. Await. 
//The async function declaration creates a binding of a new async function to a given name.
// The await keyword is permitted within the function body, enabling asynchronous, 
// promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

async function asyncFunction() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000);
    });
  
    let result = await promise;
  
    console.log(result);
}

asyncFunction();
// 1.8 Closures
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
// 1.9 useState vs useRef
// useState is a React Hook that lets you add state to functional components.
// you can use it to create a state variable and a function to update that variable.
// The state variable will cause the component to re-render when it is updated.

/*const [count, setCount] = useState(0);

// Clicking will update UI immediately
<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>
*/

// useRef is a React Hook that lets you create a mutable object that persists for the lifetime of the component.
// It can be used to store a reference to a DOM element or any mutable value that you want to keep across renders without causing re-renders.
const prevValueRef = useRef();
useEffect(() => {
  prevValueRef.current = currentValue;
});