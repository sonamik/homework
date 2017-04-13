/**
 * Created by Sona Mikayelyan on 4/13/2017.
 */
var sum = 0;

var rand1 = Math.floor((Math.random() * 10) + 1);
var rand2 = Math.floor((Math.random() * 10) + 1);

sum = add(rand1, rand2);
console.log("sum is ");
console.log(sum);

console.log("adding a number to a string ");
console.log(getNumberFromAddition(5, '34'));

console.log("add many numbers ");
console.log(addMultipleInputs(1.1, 2, 3.4, 4.4, "hello!", -1));

console.log("parse boolean ");
console.log(parseStringToBoolean("tRue"));
console.log(parseStringToBoolean("false"));
console.log(parseStringToBoolean("hi"));
console.log(parseStringToBoolean(3));

function add(number1, number2){
    return number1 + number2;
}

function getNumberFromAddition(n1, n2){
    return parseInt(n1)+parseInt(n2);
}

function addMultipleInputs(){
    var total = 0;
    var parsedNumber;

    for (var i = 0; i < arguments.length; i++) {
        parsedNumber = parseFloat(arguments[i]);
        if (isNaN(parsedNumber) === false ) {
            total += parsedNumber;
        }
    }

    return total;
}

function parseStringToBoolean(st) {
    if(typeof st === "string"){
        if(st.toLowerCase().valueOf() === "true") return true;
        if(st.toLowerCase().valueOf() === "false") return false;
        else return "is not a boolean string";
    }
    else
        return "input must be a string value";

}

/*
* function check(b){
* return b !=="false";
* }
*/