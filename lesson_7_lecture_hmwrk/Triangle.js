/**
Triangle class with a private square(side, height) method,
which returns >= 0 value.
*/

function Point(xCoord, yCoord){
    this.xCoord = xCoord ? xCoord > 0 : 0;
    this.yCoord = yCoord ? yCoord > 0 : 0;
}

function side(point1, point2){
    if(!(point1 instanceof Point) || !(point2 instanceof Point)) {
        throw "invalid arguments passed";
    }
    else return Math.sqrt(Math.pow(point2.xCoord - point1.xCoord, 2) + Math.pow(point2.yCoord - point1.yCoord, 2));
}

function Triangle (vertex1, vertex2, vertex3) {
    if((side(vertex1, vertex2) + side(vertex2, vertex3) > side(vertex1, vertex3)) &&
    (side(vertex1, vertex2) + side(vertex1, vertex3) > side(vertex2, vertex3)) &&
    (side(vertex1, vertex3) + side(vertex2, vertex3) > side(vertex1, vertex2))) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;

        this.side1 = side(vertex1, vertex2);
        this.side2 = side(vertex2, vertex3);
        this.side3 = side(vertex1, vertex3);
    }
    else {
        return "incorrect verteces";
    }
}

Triangle.prototype.square = function () {
    var s1 = this.side1;
    var s2 = this.side2;
    var s3 = this.side3;
    var p = (s1 + s2 + s3)/2;
    return Math.sqrt(p * (p - s1) * (p - s2) * (p - s3));
}

// var p1 = new Point(1, 2);
// var p2 = new Point(6, 10);
// var p3 = new Point(3, 4);
// var t1 = new Triangle(p1, p2, p3);
// console.log(t1.square());
