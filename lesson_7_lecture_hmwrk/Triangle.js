/**
Triangle class with a private square(side, height) method,
which returns >= 0 value.
*/

function Triangle (side1, side2, side3) {
    this.side1 = side1 || 0;
    this.side2 = side2 || 0;
    this.side3 = side3 || 0;

    function square (base, height) {
        this.base = base || 0;
        this.height = height || 0;
        return (base * height) / 2;
    }
}