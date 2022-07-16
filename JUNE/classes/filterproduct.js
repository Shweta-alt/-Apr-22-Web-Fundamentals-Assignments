var products = [{
        name: "Apple",
        pname: "Iphone12",
        price: 110000,
    },
    {
        brand: "Apple",
        pname: "Iphone 11 pro",
        price: 120000,
    },
    {
        brand: "vivo",
        pname: "vivofkf",
        price: 400000,
    },
    {
        brand: "Samsung",
        pname: "samsung",
        price: 400000,
    },
];

var filteredData = products.filter(function(element) {
    return element.brand === "Apple"
})

console.log(filteredData);