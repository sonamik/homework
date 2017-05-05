/**
If we have an array of arrays, we will say that we have a matrix.
Create function 'getRandomMatrix' which gets two arguments 'n' and 'm'
and returns n by m matrix filled with random Integers from 0 to 100.
*/

var getRandomMatrix = function(n, m){
    var myArray = new Array(n);

    for( var i = 0; i < myArray.length; i++ ) {
        myArray[i] = new Array(m);
    }

    for(var row = 0; row < myArray.length; row++) {
        for(var col = 0; col < myArray[row].length; col++) {
            myArray[row][col] = Math.floor(Math.random() * 100);
            // Math.floor(Math.random() * 100);
            // getRandomInt(100);
        }
    }
}

/**
    for(var row = 0; row < myArray.length; row++) {
        var st = '';
        for(var col = 0; col < myArray[row].length; col++) {
            st += myArray[row][col] + '  ';
        }
        console.log(st + '\n');
    }

*/

getRandomMatrix(3, 4);