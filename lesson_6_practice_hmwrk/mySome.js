/**
Array.prototype.some() method
*/

function mySome(array, func){
    'use strict';
    for(var i = 0; i < array.length; i++){
        if(array.hasOwnProperty(i) && func(array[i], i, array)){
            return true;
        }
    }
    return false;
}

a = [1,2,3,'o',4,5];
mySome(a, function(x) { return x%2===0; }); // => true a has some even numbers.
// mySome(a, isNaN);