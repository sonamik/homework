/**
1. Three overloaded constructors
2. greaterThan(range) method
3. greaterThanOrEquals(range) method
4. lessThan(range) method
5. lessThanOrEquals(raneg) method
6. compare(range, f) method, where f is an optional function(like Array.sort() function)
7. includes(range) method
*/

(function Range () {
    'use strict';
    if(arguments.length === 2){
        this.from = arguments[0];
        this.to = arguments[1];
    }
    else if(arguments[0] instanceof Array){
        this.from = arguments[0][0];
        this.to = arguments[0][1];
    }
    else if(arguments[0].typeof === Object){
        this.from =  arguments[0].from;
        this.to = arguments[0].to;
    }
    else {
            throw "invalid parameters passed";
        }
}

Range.compare = function(range1, range2, /* optional */ f) {
    if(!(range1 instanceof Range) || !(range2 instanceof Range)) {
            throw "Invalid parameters passed";
        }

    if(f && typeof f === "Function") { //function must return 1/-1/0 for cases when r1>r2, r1<r2, r1===r2;
            return f(range1, range2);
        }
    else {
        var diff = (range1.to - range1.from) - (range2.to - range2.from);
        if(diff > 0) return 1;
        if(diff < 0) return -1;
        return 0;
    }
}

Range.prototype.compare = function(range, /* optional */ f) {
    return Range.compare(this, range, f);
}

Range.prototype.greaterThan = function (range) {
    return this.compare(range) > 0;
}

Range.prototype.greaterThanOrEquals = function (range) {
    return this.compare(range) >= 0;
}

Range.prototype.lessThan = function (range) {
    return this.compare(range) < 0;
}

Range.prototype.lessThanOrEquals = function (range) {
    return this.compare(range) <= 0;
}

Range.prototype.includes = function (range){
    return (this.from <= range.from) && (this.to >= range.to);
}(window));

// var r1 = new Range(0, 7);
// var r2 = new Range(5, 10);
// var r3 = new Range(2, 7);
// var r4 = new Range(0, 15);
// var r5 = new Range(-1, 5);
// var r6 = new Range('kkk');

// var comp = function(a, b){
//     if(a.from > b.from) return 1;
//     else if(a.from < b.from) return -1;
//     else return 0;
// }

// console.log(r1.compare(r2, comp(r1, r2)));
// console.log(r1.compare(r4, comp(r1, r4)));
// console.log(r1.compare(r5, comp(r1, r5)));