/**
forEach method of arrays
*/

function forEach(array, func) {
    'use strict';
    for(var i = 0; i < array.length; i++){
        if(array.hasOwnProperty(i)){
            func(array[i], i, array);
        }
    }
}

var data = [1, 2, 3, 4, 5];
var sum = 0;
forEach(data, function(value) { sum += value; });
console.log(sum);

var data = [1, 2, 3, 4, 5, 0];
var prod = 1;
forEach(data, function(value) { prod *= value; });
console.log(prod);