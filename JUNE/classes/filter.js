// used to filter the array

// arrayname.filter();
var data = [20, 56, 89, 12, 11];

var filterArray = data.filter(function(e) {
    return e > 50;
});

console.log(data);
console.log(filterArray);