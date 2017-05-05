/**
Create a function 'lastIndexOf' similar to the first task but this one should
return the last index of an item in the array:
e.g.
var a = [1, 2, 3, 1, 2, 1];
lastIndexOf(a, 1) // 5
*/

var lastIndexOf = function(a, item) {
    for(var i = a.length - 1; i >= 0; i--) {
        if(item === a[i]) {
            return i;
        }
    }
    return -1;
}
