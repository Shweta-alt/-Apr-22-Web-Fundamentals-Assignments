/*
class Student {
    id = 0;
    name = '';
    city = '';

    display() {

        console.log(this.id, this.name, this.city);

    }

}

var s1 = new Student();
s1.id = 101;
s1.name = 'Shweta';
s1.city = 'Ambedkar Nagar';
s1.display();

var s2 = new Student();
s2.id = 102;
s2.name = 'Anushka';
s2.city = 'Kausambi';
s2.display();

*/

// using constructor keyword

/*
class Student {
    id;
    name;
    city;

    // deifining constructor 
    constructor() {
        this.id = 0;
        this.name = '';
        this.city = '';
    }
    display() {
        console.log(this.id, this.name, this.city);
    }
}

var s1 = new Student() //constructor accessing
s1.id = 1001;
s1.name = 'riya';
s1.city = 'Allahabad'
s1.display();

*/

class Mobile {
    name;
    price;
    rating;
    qty;
    totalAmt;

    constructor() {
        this.name = ''
        this.price = 0
        this.rating = 0
        this.qty = 0
        this.totalAmt = 0;
    }
    display() {
        console.log(this.name, this.price, this.rating, this.qty, this.totalAmt);
    }
    totalAmount() {
        console.log(this.price * this.qty);
    }
}

var iphone = new Mobile();


var oneplus = new Mobile();

iphone.name = "iphone 0203";
iphone.price = 1100000;
iphone.rating = 4.5;
iphone.qty = 6;


oneplus.name = "onePlus Pro";
oneplus.price = 120000;
oneplus.rating = 4.6;
oneplus.qty = 9;


iphone.display();
oneplus.display();

iphone.totalAmount();
oneplus.totalAmount();