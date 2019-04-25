"use strict";


// (1)
var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var filtarr = arr.filter(function(number){
    return number >= 0;
});
console.log(filtarr);

var mapArr = filtarr.map(function(number){
    return (Math.sqrt(number));
});
console.log(mapArr);


// (2)
var arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
var result = arr2.reduce(function(sum, i){
    return sum + i;
}, 0);
console.log(result);


// (3)
function summArguments(){
var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(summArguments(10, 1, 2, 5));