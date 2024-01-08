// function
// are very very imp
// repeated operations

// 2+2 => 5 times
console.log(2+2)
console.log(2+2)
console.log(2+2)
console.log(2+2)
console.log(2+2)

// syntx
// function functioname(){
//     //block of code
// } 
// functioname()


function test(){
    console.log(3+3)
}
test()
test()
test()

function random(){
    console.log(2,"random")
}
random()// not user dependant
random()

//function with parameters
// (param1,param2,param3.....n)
//sum(a,b)=>parameters
//sum(1,2)=> arguments

// add no's
function sum(a,b){
    console.log(a,b)
    console.log(a+b)
}
sum(1,2)//1+2
sum(3,4)//3+4
sum(4,5)

// multiplication of random 5 nos using function.
// var arr1=[1,3,4,5,"6","70","2A"] 

function totalarr(arr1){  //params
    console.log(arr1)
var sum=0;
for(var i=0;i<arr1.length;i++){
    sum=sum+parseInt(arr1[i])
}
    console.log(sum)
}
totalarr([1,3,4,5,"6","70","2A"])// args// 91
totalarr([1,3,4,5])// args //13

//return keyword
//return
//use the value of 1 function to another function
13
// use it in another function


// Question
// output > totalarr => findout the factorial of that num

// function1=> addition => 6
// function 2=> fact of added num => 720

