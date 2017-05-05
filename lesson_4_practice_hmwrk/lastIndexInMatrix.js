/**
Create a function 'matrixLastIndexOf', which does the same as in
task 5(findLastIndex.js), but for any given matrix.
*/

var m = getRandomMatrix(3, 4);
var matrixLastIndexOf = function(m, item) {
    for(var i = m.length - 1; i >= 0; i--) {
        for(var j = m[i].length - 1; j >= 0; j--) {
            if(m[i][j] === item) {
                return 'row: ' + i + ', col: ' + j;
            }
            else {
                return -1;
            }
        }
    }
}