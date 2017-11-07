console.log('Hello Git');
console.log('Tell us tutorials you wanna see!')

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
};

var square = new Shape (1, 1, 1);
console.log(square);
