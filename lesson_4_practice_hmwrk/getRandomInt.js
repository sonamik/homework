/**
Create a function 'getRandomInt', which returns random integer
from 0 to max where max is the argument of the function.
Don’t use Mat.floor().
*/

var getRandomInt = function(maxInt){
    var rand = Math.random() * maxInt;
    var st = rand.toString();
    rand = parseInt(st);
    var dot = st.indexOf('.');
    var number = st.charAt(++dot);
    if(number >= 5) { return ++rand; }
    else { return rand;}

    // rand = Math.round(rand); or 
    // rand = parseInt(st); // returns the integer part of the string
}