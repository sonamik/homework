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