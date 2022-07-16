var data = [20, 30, 40, 50, 60]
var newArray = data.map(function(element, index) {
    console.log(element, index);
    return element + 10

});

console.log(newArray);