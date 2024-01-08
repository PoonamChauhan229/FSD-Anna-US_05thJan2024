// sum of all the elemnets in an array
// [1,2,3,4,5]// 15

//normal function

function sumnormal(arr){
    console.log(arr)
    var total=0;
    for(var i=0;i<arr.length;i++){
        total=total+arr[i]
    }
    console.log(total)
}
sumnormal([1,2,3,4,5])

//annoymous

var sumannoymous=function(arr){
    //block of code

    //console.log(arr)
    var total=0;
    for(var i=0;i<arr.length;i++){
        total=total+arr[i]
    }
    //console.log(total)
    return total;

}
console.log(sumannoymous([1,2,3,4,5]))
//window events
//on load

//arrow function

// you have done it

var sumarrow=(arr)=>{
    //block of code

    //console.log(arr)
    var total=0;
    for(var i=0;i<arr.length;i++){
        total=total+arr[i]
    }
    //console.log(total)
    return total;

}
console.log(sumarrow([1,2,3,4,5]))


//3 ways of fetching dTA FROM AN API
//xml http request=> basic =>JS 

//JSON
// JAVASCRIPT OBJECT NOTATION
var obj={
    abc:"wyuy",
    pqr:"ioioi"
}
//json
// key and value both are in double quotes
var jsonobj={
    "a":"wyuy",
    "b":"ioioi"
}

// sending data to the server ===> convert it into a string and send to the server
var x=JSON.stringify(obj)//
console.log(JSON.stringify(obj))
console.log(obj.abc)


//convert into the object

console.log(JSON.parse('{"a":"wyuy","b":"ioioi"}'))
