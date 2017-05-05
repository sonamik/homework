/**
Provide two global functions: setPrimitive, and changePrimitve.
First one should get an object and a primitive and will set that
primitive in that object and make sure that it's valueOf returns
that primitive. While the second one should change that primitive
for given object.
*/


var a = {};
a.x = 322;
var valueOf = function() {
    return this.x;
};

a.valueOf = valueOf;

(function(){
    setPrimitive(a, 4);
    a.valueOf(); // should return 4

    changePrimitive(a, 'hello');
    a.valueOf(); // should return 'hello'
})();


function setPrimitive(numObject, numValue){
    window.a = numObject;
    numObject.x = numValue;
    console.log(window.a.x);
    return numObject.x;
}

function changePrimitive(changeObject, changedValue){
    a = changeObject;
    changeObject.x = changedValue;
    console.log(a.x);
}

var b = {
    x: 231251,
    valueOf: valueOf
};

console.log(a.valueOf());
console.log(b.valueOf());





(function() {
    function setPrimitive(obj, val) {
        obj.x = val;
        obj.valueOf = function() {
            return this.x;
        }
    }

    function changePrimitive(obj,val) {
        obj.x=val;
    }

    window.setPrimitive=setPrimitive;
    window.changePrimitive=changePrimitive;
}());

//var a={};
//a.x=43;

//setPrimitive(a,4);
//a.valueOf();//should return 4

//changePrimitive(a,'hello');
//a.valueOf();//should return "hello"




!function(){
    var propName = '###PrimtiveValue###' + Math.random();
    var changeEnumerable = function(obj){
        Object.defineProperty(obj, propName, {enumerable: false});
    };
    var valueOf = function(){
        return this[propName];
    };

    var setPrimitive = function(obj, val){
        obj[propName] = val;
        changeEnumerable(obj);
        obj.valueOf = valueOf;
    };

    var changePrimitive = function(obj, val){
        obj[propName] = val;
    };

    window.setPrimitive = setPrimitive;
    window.changePrimitive = changePrimitive;
}();

var a = {x: 3, y: 4};
var b = {x: 3, y: 4};

// a.valueOf === b.valueOf;

var vo = a.valueOf;
changePrimitive(a, 343);
vo === a.valueOf;