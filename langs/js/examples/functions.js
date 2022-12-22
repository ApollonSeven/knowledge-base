// Primitives are immutable
function setString(string) {
    string = 'Toyota';
}
const a = "Honda"
setString(a)
console.log(a)
// "Honda"


// Objects are mutable
function myFunc(theObject) {
    theObject.make = 'Toyota';
}
const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
};
// x gets the value "Honda"
const x = mycar.make;
// the make property is changed by the function
myFunc(mycar);
// y gets the value "Toyota"
const y = mycar.make;


// Arrays are mutable too
function myFunc(theArr) {
    theArr[0] = 30;
}
const arr = [45];
console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


// STACK
function foo(i) {
    if (i < 0) {
        return;
    }
    console.log(`begin: ${i}`);
    foo(i - 1);
    console.log(`end: ${i}`);
}
foo(3);
// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3


// CLOSURES
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
const result = fnInside(5); // returns 8
const result1 = outside(3)(5); // returns 8

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)