/**
Array.prototype.filter() method
*/

function myFilter(array, func){
    'use strict';
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array.hasOwnProperty(i) && func(array[i], i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

a = [5, 4, 3, 2, 1];
smallvalues = myFilter(a, function(x) { return x < 3 });
// everyother = myFilter(a, function(x,i) { return i%2==0 });