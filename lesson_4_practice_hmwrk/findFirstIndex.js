/**
Create an 'indexOf' function which returns first index of an item in the
given array. The first argument of the function should be the array in which
it should do lookup and the second one should be the item to be found.
Function should be written without using the indexOf method of array.
Function should return -1 if the array doesn’t contain the item.
The code of the function should stop lookup when it finds an item.
e.g.
var a = [1, 2, 3];
indexOf(a, 2) // 1
indexOf(a, 4) // -1
*/

var indexOf = function(a, item){
    for(var i = 0; i < a.length; i++){
        if(item === a[i]) return i;
    }
    return -1;
}