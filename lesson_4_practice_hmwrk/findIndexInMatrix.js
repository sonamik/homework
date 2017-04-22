/**
Create a function 'matrixIndexOf' which does the same lookup as in the first task
but for any matrix.
*/

var m = getRandomMatrix(3, 4);
var matrixIndexOf = function(m, item){
    for(var row = 0; row < m.length; row++){
        for (var col = 0; col < m[row].length; col++) {
            if(item === m[row][col]) return 'row: ' + row + ', col: ' + col;
        }
    }
    return -1;
}