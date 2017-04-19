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