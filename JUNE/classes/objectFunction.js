var student = {
    name: "S1",
    result: function(a, b) {
        var num1 = 10;
        var num2 = 30;
        console.log("password");
        console.log(num1 + num2);
    },
    marks: [70, 80, 90],
};

student.result(20, 80);
console.log(student.marks);
console.log(student.marks[2]);

student.result();