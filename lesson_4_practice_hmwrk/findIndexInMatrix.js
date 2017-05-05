/**
Create a function 'matrixIndexOf' which does the same lookup as in the first task
but for any matrix.
*/

var m = getRandomMatrix(3, 4);
var matrixIndexOf = function(m, item){
    for(var i = 0; i < m.length; i++){
        for (var j = 0; j < m[i].length; j++) {
            if(item === m[i][j]) {
                return 'row: ' + i + ', col: ' + j;
            }
        }
    }
    return -1;
}