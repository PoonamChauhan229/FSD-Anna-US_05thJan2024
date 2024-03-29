// Primitive datatypes>
//Number
//String
//Boolean

//Composite Datatypes
//Arrays
//Objects


// Primitive datatypes>
//Number
console.log("Number")
console.log(1)
console.log(typeof(1))
//typeof > method identifies the type of datatype
console.log(typeof(1.5))
console.log(typeof(0.9000766765546789345678909871))
console.log(1+1)// perform add


//String
// ""
console.log("String datatype")

console.log(typeof("Hello String datatype"))
console.log("12")// datatype
console.log("1"+"1")//11 perform concatenation
console.log("10"+1+"22"+3+2)//1012232
console.log("10"+"1")//101
console.log(typeof("10"+1+"22"+3+2))//"1012232"
console.log(3+2+5+"Hello World")//"10HelloWorld"

//Method
// parseInt > converting into integer
console.log("2")//string
console.log(typeof("2"))//string
console.log(typeof(parseInt("2")))//number

console.log(parseInt("A2"))//NAN>Not an number
console.log(parseInt("2A"))//2
console.log(parseInt("262367A"))//262367
console.log(parseInt("26Heelo2367A"))//26
console.log(parseInt("26 6Heelo2367A"))//26
console.log(parseInt(" 26Heelo2367A"))//26


//Boolean
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof("false"))
console.log(typeof("true"))

if(true){
    console.log("hey")
}

//Composite Datatypes
// Array
//[]=>represent an array
//combination of heterogenous dataypes & seperated by the commas
//[string, number, boolean]
var arr=[2,3,4,"hi","helloworld",true,false]
// indiidual element
//How many elements?>7 elements
//access the elements> index no
//index no> start >0 end > n-1
//1st element
// arr[indexno]
console.log(arr[0])
console.log(arr[4])

// length property
arr.length
console.log(arr.length)

// for loop

// for(intiliaze,condition,increment/decremaent){
    //blick ofcode
// }

// 1-7
//0-6
console.log("for loop")
for(var i=0;i<arr.length;i++){
    console.log(i,arr[i])
    
}

var arr1=[1,3,4,5,"6","70","2A"] //89 as an answer
//[1,4,5,6,7,71,3]

console.log("91 as an answer")
var sum=0;
for(var i=0;i<arr1.length;i++){
    // console.log(i,arr1[i])
    sum=sum+parseInt(arr1[i])
    // sum=0+1>1
    // sum=1+3>4
    //sum=4+4>8
    //13+"6"
    // console.log(sum)
}
console.log(sum)//91

var arr=[2,3,4,"hi","helloworld",true,false]
// at 10 index i want to insert 100 as an element
arr[10]=100;
console.log(arr)

// update the element in the array.
// 0th index => 2 , >20
arr[0]=20
console.log(arr)




// Object:
    // In javascript > Object
    // key and value pair
    // {} represented

    //students object data
var obj={
    // key:value
    name:"Ann",
    year:2024,
    hobbies:"reading"
}
//in console> keys are arranged in alphabetical order
console.log(obj)

//access the object
//dot operator . or square bracket ['key']

console.log(obj.hobbies,obj.name)
console.log(obj['name'])
//insert a key:value inside the object
obj.skills="javascript"
console.log(obj)

//update
obj.year=2023;
console.log(obj)

// for in loop > objects
for(var key in obj){
    console.log(key,obj[key], obj.key)
}

// Questions:

// Find the factorial of a Number
var arr=[5]

var num=arr[0]
var fact=1;
//5 times
// var i=1 i<=num; i++
// i=1 1<=5 true 1*1 =1
// i=2 2<=5 true 1*2=2
// i=3 3<=5 true 2*3=6
// i=4 4<=5 true 6*4=24
// i=5 5<=5 true 24*=120
// i=6 6<=5 false terminate

for(var i=1;i<=num;i++){
    fact=fact*i
    //console.log(fact)
}
console.log(fact)


// Write an program for a table, which can easily be able to calculate any number table

// 5
// 10
// 11
// 12

// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// ...5*12=60


// 10*1=10
// 10*2=20....

// https://pythontutor.com/render.html#mode=display




