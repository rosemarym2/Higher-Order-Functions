//Higher Order Functions
// Challenge 1

/*broken code below

// let loop = (greet, fn) =>{
//     return (greet*fn);
// };

// loop(greeting, 5)

// const loop = (loops, greet) => {
//     let greeting = "Hello Code Nation";
//     for (let i=0; i< greeting.length; i++)
//     if (i < 0){
//         console.log((greeting)*5)
//     } else {
//         return "error";
//     }
// };

// loop(5, greeting)*/

let greeting = () => {
    console.log("Hello Code Nation");
}

let greet = (greeting) => {
    for (let i=0; i < 5; i++) {
    greeting()
    }
}
greet(greeting)

// Challenge 2

const addUp = (a, b) => {
    return (a + b);
}

console.log(addUp(4, 3));

const anotherFunc = (fn, num1, num2) => {
let counter = 0;
for (let i=0; i < 5; i++) {

counter += fn(num1,num2);
console.log(counter);
}
}

anotherFunc(addUp, 4, 3)


//Challenge 3

const arr = [1,2,3,4,5];

const mapArr = arr
.map(arr => arr * 3);

console.log(mapArr)

//Challenge 4 

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
 return a+b
}

const divide = (a,b) => {
    return a/b
   }

const subtract = (a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) =>{
        return fn(num1, num2)
    }
}

let testFunction = doMath(6) 
console.log(testFunction(4, multiply))
console.log(testFunction(5, add))
console.log(testFunction(3, divide))
console.log(testFunction(2, subtract))


