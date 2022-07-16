// Array.isArray(value);

/*
let name = 'suman';

let arr = ['suman', 18];

console.log(arr[0]);

let details = {
    name: 'suman',
    age: '18',
    fullName: function() {
        console.log('suman');
    },
};

details.fullName();

let maid = {
    task1: 'cooking',
    task2: 'cleaning',
    calling: function() {
        console.log('she cooks and cleans');
    },
    askHerToShop: function() {
        console.log('she shops the grocery');
    }
};

maid.calling();



//------------------------------------------------

let human = {
    doesRolks: function() {
        console.log('yes');
    },
    ifTalks: function() {
        console.log('yes');
    },
    doesFly: function() {
        console.log('No');
    },

};
human.ifTalks();

let num = [2];
let res = Array.isArray(num);
console.log(res);


// concat() method: merges on or more array

let f1 = [1, 2, 3];
let sec = [1, 3, 4];
let ress = f1.concat(sec);

console.log(f1, sec, ress);


//------------------------------------------------------------------------

const values = [2, 3, 5];
const joined = values.join('-');
console.log(values);
console.log(joined);


// include if an element is present in an aray or not.

let inc = values.includes(2);
console.log(inc);


// indexOf() index of array

let cla = ['ahi', 'ram', 'jaya']
cla.indexOf('ram');

let clue = cla.indexOf('ram');
console.log(clue);


//------------------------------------------------------------

// lastIndexOf(): helps find the last occurence of an Element in Array

//if 


let cla = ['ahi', 'ram', 'jaya']
cla.indexOf('ram');

let clue = cla.lastIndexOf('ram');
console.log(clue);


*/

// let constu = [1, 3, 4];
// console.log(constu.reverse());
// // console.log(constu);


// var student = ['s2', 900, true, 's4'];
// console.log(student.length);

// function fnArray(student) {
//     console.log(student)
// }

// fnArray([34, 89, 67, 45])

/*

function fnCallBack(printName) {
    printName();
    console.log('i am from main function');
    printName();
    printName();
}

fnCallBack(function() {
    console.log('i am kabir');
});

*/


//----------------------------------------------
// --- insert or update ---
/* 
var student = {
    name: "shweta",
    city: "delhi",
    email: "allahabad",
    phone: 999999
};

console.log(student);
console.log(student.name);
student.state = "Maharastra";
console.log(student);
student.city = "pune";
console.log(student);

*/
// -----------

/*

var student = {
    id: 101,
    name: "anjali",
    address: {
        city: "allahabad",
        area: {
            area1: "A1",
            area: "A2",
        },
        state: "UP",
        pincode: 98090,

    },
    gmail: 'anjali@gmail.com',

};

console.log(student.address.city);
console.log(student.address.area.area1);



var student = {
    name: "stuti",
    result: function() {
        var num1 = 10;
        var num2 = 20;
        console.log(num1 + num2);
        console.log("passed");
    },
};

student.result();





var student = {
    name: "stuti",
    result: function(a, b) {
        var num1 = a;
        var num2 = b;
        console.log(num1 + num2);
        console.log("passed");
    },
    marks: [70, 80, 90, 100],
};

student.result(50, 50);
console.log(student.marks);
console.log(student.marks[2]);


var student = {
    p1: [
        { name: "s1" },
        { name: "s2" },
        { name: "s3" },
    ],
};
console.log(student);
console.log(student.p1);
console.log(student.p1[2]);
console.log(student.p1[2].name);

*/

//------------------------------------



//------------------------------------------------------------
/* 

var product = {
    name: "iphone 13",
    brandname: "apple",
    ram: "8gb",
    storage: "128gb",
    reviews: "great product, go for it",
    rating: "4.5/5",
    price: 100000

};
console.log(product );

//------------------------------------

var data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];

*/

// filter() :- this method will filter the array and return output in boolean either true or false.
/*

var data = [20, 50, 30, 40, 51, 33]

var filteredData = data.filter(function(e, i) {
    //return e > 50;
    return e > 30 && e < 50;

});
console.log(data);
console.log(filteredData);

*/

//------------------------------------------------------------------