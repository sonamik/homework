/**
Create a function 'matrixLastIndexOf', which does the same as in
task 5(findLastIndex.js), but for any given matrix.
*/

var matrixLastIndexOf = function(m, item){
    for(var row = m.length; row >= 0; row--){
        for(var col = m[row].length; col >= 0; col--){
            if(m[row][col] === item){ return 'm[' + row + '][' + col + ']' };
            else { return -1;}
        }
    }
}