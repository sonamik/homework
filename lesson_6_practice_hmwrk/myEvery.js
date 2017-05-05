/**
Array.prototype.every() method
*/

function myEvery(array, func){
    'use strict';
    for(var i = 0; i < array.length; i++){
        if(array.hasOwnProperty(i) && !func(array[i], i, array)){
            return false;
        }
    }
    return true;
}

a = [1,2,3,4,undefined,5];
myEvery(a, function(x) { return x < 10; })