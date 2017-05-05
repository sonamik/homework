/**
Define a function called 'equals', which gets two arguments and
if both of them are primitives it returns strict comparision of that values,
otherwise it returns true if and only if they are strict equal or all their
properties are equal with 'equals'.
e.g.
var a = [1], b = [1];
a == b // false
equals(a, b) // true
a.x = 23;
equals(a, b) // false
b.x = 23;
equals(a, b) // true
*/

var equals = function(a1, a2){

    (Object.prototype.toString.call(a1) === 'function' && Object.prototype.toString.call(a2) === 'function') || (Object.prototype.toString.call(a1) === 'object' && Object.prototype.toString.call(a2) === 'object');
    console.log(Object.prototype.toString.call(a1));
    console.log(Object.prototype.toString.call(a2));
//     if(Object.prototype.toString.call(a1) === Object.prototype.toString.call(a2)) {
//         if(a1 === a2){ return true;}
//         if(a1.getProperty)
//     }
//     return false;



    // arrays of property names
    var a1Properties = Object.getOwnPropertyNames(a1);
    var a2Properties = Object.getOwnPropertyNames(a2);

    if (a1Properties.length != a2Properties.length) {
        return false;
    }

    for (var i = 0; i < a1Properties.length; i++) {
        var propertyName = a1Properties[i];

        if (a1[propertyName] !== a2[propertyName]) {
            return false;
        }
    }
    return true;
}

// var a = [1], b = [1];
// var a = {1:"1", 2:"2", 3:"3"}, b =[1];
var a = 3, b = 4;
console.log(a == b); // false
equals(a, b);