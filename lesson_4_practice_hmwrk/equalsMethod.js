/**
Let's define a function called 'equals', which gets two arguments and
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

var equals = function(a1, a2){}