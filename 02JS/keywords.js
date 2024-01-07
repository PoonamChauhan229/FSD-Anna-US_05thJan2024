//JS 
//var keyword
//with JS
// var is a keyword which is used to declare the variable
//  declare the variable
//initialize it


//console.log(a)//not defined >error

var b;
console.log(b)//undefined

b=10;
console.log(b)//10 > assigning a value 

b=30;
console.log(b)

// limitations
var b=30;
console.log(b)// Q:JS should allow you redeclare it ?

console.log(c)
var c; // you should use the variable and then declare it in var ---XXXXXXXX
//undefined
//hoisting


// let and const

let x;///declared
console.log(x)//undefined

x=20;// assigned a value
console.log(x)

x=30;// reassigined a value
console.log(x)

//let x=100;// cannot a redeclare it 
console.log(x)//Uncaught SyntaxError: Identifier 'x' has already been declared

//console.log(y)//y is not defined
//let y;//Cannot access 'y' before initialization



// const
// constant

//const p;//Missing initializer in const declaration
//console.log(p)

const p=100;// whle declaring the varaible, assign it
console.log(p)

//p=200;
//console.log(p)//Uncaught TypeError: Assignment to constant variable.

//const p=600;
//console.log(p)//Uncaught SyntaxError: Identifier 'p' has already been declared


// var
// declare
// assign
// reassign
// redeclare
// hoisting

//let
// declare
// assign
// reassign-updating a val

// not doable
// redeclare
// hoisting


//const
// declare
//assign

//not doable
//redeclare
//reassign
//hoisting


// difference about undefined  and not defined
//undefined-when u declare a vaiable and dont assign a value and its an datatype
//not defined- variable dosent exist , u try to access the varaible and its an error