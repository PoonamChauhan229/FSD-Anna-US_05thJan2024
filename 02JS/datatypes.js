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


