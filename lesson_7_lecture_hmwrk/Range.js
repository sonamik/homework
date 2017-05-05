/**
1. Three overloaded constructors
2. greaterThan(rangeObj) method
3. greaterThanOrEquals(rangeObj) method
4. lessThan(rangeObj) method
5. lessThanOrEquals(ranegObj) method
6. compare(rangeObj, f) method, where f is an optional function(like Array.sort() function)
*/

function Range (from, to) {
    this.from = from;
    this.to = to;
}

function Range({
    from: a,
    to: b
}) {
    this.from = arguments[from];
    this.to = arguments[to];
}

function Range([from, to]){
    this.from = arguments[0].from;
    this.to = arguments[0].to;
}

Range.prototype.greaterThan = function (rangeObj) {
    return ((this.from - rangeObj.from) > 0 && (this.to - rangeObj.to) > 0);
}

Range.prototype.greaterThanOrEquals = function (rangeObj) {
    return ((this.from - rangeObj.from) >= 0 && (this.to - rangeObj.to) >= 0);
}

Range.prototype.lessThan = function (rangeObj) {
    return ((this.from - rangeObj.from) < 0 && (this.to - rangeObj.to) < 0);
}

Range.prototype.lessThanOrEquals = function (rangeObj) {
    return ((this.from - rangeObj.from) <= 0 && (this.to - rangeObj.to) <= 0);
}

Range.prototype.compare = function (rangeObj, /* optional */ f) {
    if(f === undefined) {
        return 1 ? this.greaterThan(rangeObj):(-1 ? this.lessThan(rangeObj) : 0);
    }
    else {
        f.call(this, rangeObj);
    }
}
