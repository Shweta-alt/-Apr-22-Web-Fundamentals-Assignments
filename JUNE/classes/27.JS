// class inheritance


class User {
    constructor(name, email) {
        fromCourseList = []
        getInfo()
        return { name: this.name, email: this.email };

    }

    enrollCouse(name) {
        this.fromCourseList.push(name);
    }
    getFreeCouseList() {
        return this.fromCourseList;
    }
    login() {
        return 'Logged in';
    }

    static getpremiumCourse() {
        return ' this is a premium course';
    }



}

class PaidUser extends User {
    constructor(name, email) {
            // used to call the constructor of parent class to acces the methods and properties of parent class.
            super(name, email);
        }
        //function overriding
    getInfo() {
        return 'I am a Paid User'; //: $ { this.name }: $ { this.email };
    }
    paidCouseList = []
    enrollPaidCourse(name) {
        this.paidCouseList.push(name);
    }

    getPaidCouseList() {
        return this.paidCouseList;
    }
}

User.prototype.postpaidCourseList() = function() {
    return "We don't have post paid Course now";
}

const suman = new User('suman', 'suman@gmail.com');
console.log(suman.postpaidCourseList()); // postpaidCourseList();


console.log(suman.getInfo());
// suman.enrollCouse(['web dev Course', 'python basics']);
// console.log(suman.getFreeCouseList());

const tom = new PaidUser('tom', 'tom@gmail.com');
console.log(tom.getInfo());

tom.enrollCouse('dsa course');
console.log(tom.fromCourseList());
tom.enrollCouse(['web dev begi couse']);
console.log('free Course ->',
    tom.getFreeCouseList());

tom.enrollPaidCourse(['HTML', 'CSS']);
console.log(tom.getPaidCouseList());