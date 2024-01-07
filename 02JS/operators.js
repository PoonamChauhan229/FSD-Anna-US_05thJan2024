// Assignment
// =
var a=5;
a=100;
console.log(a)
//Comparision
// ==
var a="5"
var b=5
console.log(a==b)// true > value is stored in a and b , same >true
// ===
console.log(a===b)//false > value + datatype > false
// Logical Operators
var x=5;
var y=50;
//&& > AND
if(x > 0 && y>0){
    console.log("condition is true")
}else{
    console.log("condition is false")
}
//|| > OR > anyone condition is true
if(x===5 || y===0){
    console.log("yes,condition is true")
}
//  ! > NOT
console.log(!true)
console.log(!false)
if(!false){
    console.log("Not Operator")
}
//Aritematic Operators
// +
//-
//% > modulus ==>remainder
// / > division ==> quotient
// * > multiplication
// ** >exponential 

// conditional
//if
//if(condition){
    // true}

// if else
//if elseif elseif else
var c=100
if(c==5){
    console.log("C val is equal to 5, C value is:",c)
}else if (c>=60) {
    console.log("C val is greater than 60, C value is:",c)
} else if(c<=10){
    console.log("C val is less than 10, C value is:",c)
}else{
    console.log("C val is not satisfying any condition, C value is:",c)
}

//OR opeartor 
