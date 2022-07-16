function fncallback(printname) {
    printname();
    console.log("i am from main function")
}

fncallback(function() {
    console.log("i an shweta");
})