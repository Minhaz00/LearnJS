
// all types
function func1() { };              // delaration
const func2 = function () { };      // expresion
const func3 = () => { };           // arrow

// ======= type 1 : function declaration
// It supports hoisting  but type 2, 3 doesn't
// console.log(evenOdd(7));
function evenOdd(number) {
    if (number % 2 === 0) return "even";
    else return "odd";
}
// console.log(evenOdd(6))

// ======== type 2 : function expresion
const PosNegNumber = function (number) {
    if (number < 0) return "neg";
    if (number > 0) return "pos";
    else return '0';
}
// console.log(PosNegNumber(-123));

// ======== type 3 : arrow function
// syntex 1
const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
// syntex 2
const sum2 = (num1, num2, num3) => num1 + num2 + num3;
// console.log(sum2(30, 20, 40));


//=========  object destructuring in function param
const person = {
    name: "minhaz",
    age: 23,
    gender: "male",
}
function show({ name, age, gender }) {
    console.log(name, age, gender);
}
// show(person);


// ======== callback function : passing function as parameter
function func(name) {
    console.log(`my name is ${name}`);
}
function app(callback) {
    console.log("inside APP");
    callback("Minhaz");
}
// app(func);


// ======= function returning function
function app1() {
    function hello() {
        console.log("Hello world");
    }
    return hello;
}
const res = app1();
// console.log(res); // returns func
// console.log(res()); // calls the func