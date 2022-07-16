class Shape {
    constructor() {}
    area() {
        return 0;
    }
    perimeter() {
        return 0;
    }

}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r; // parent class

    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return Math.PI * this.radius * 2;
    }
}

class Rectangle extends Shape {
    constructor(l, b) {
        super();
        this.length = l;
        this.breadth = b;
    }
    area() {
        return this.length * this.breadth;
    }
    perimeter() {
        return 2 * (this.length * this.breadth);
    }
}


// function overloading 
function a(x, y) {
    console.log(x + y);
}

function a(x, y, z) {
    console.log(x + y + z);
}
a(1, 2);
a(1, 2, 3);
a(1, 2, false); // it will typecast the value of false as 0
a(1, 2, true); // it will typecast the value of true as 1

// ad-hoc polymorphism :operator overloading
// it is also another typer of polymorphism where + operator behaves differen.
console.log('5' + '5'); //55 as it is string
console.log('5' + 5); // 55 as one input is string and another is number and we can't add number to the string therefore it will return 55 .


// Parametric Polymorphism  
let arr = ['suman', 12, 5, 6, { age: '12' }];

function fxn(x) {
    console.log(x); // generic funtion : here we can add any kind of value whether it is string or int it will act accordingly.
}

fxn(1);
fxn('foo');

/* interview :
 what is polymorphism?
 */