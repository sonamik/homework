/**
Array.prototype.map() method
*/

function myMap(array, func) {
    'use strict';
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array.hasOwnProperty(i)){
            newArray[i] = func(array[i], i, array);
        }
    }
    return newArray;
}

a = [1,, 2, 3];
b = myMap(a, function(x) { return x*x; });  // b is [1, 4, 9] 