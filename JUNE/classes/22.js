// // var d = [1, 3, -9, 4, -5, 6]
// // var newarr=d.filter((ele) => {
// //     return ele > 0
// //     console.log(ele);
// //     newarr.map(()=>)

// // });


// var arr = [1, 3, 45, -6, -7, 4, -70]
// var sum = 0;
// for (int i = 0; i < arr.length(); i++) {

//     sum += arr[i]
// }
// console.log(sum)

var arr = [1, 3, 4, 5, 6, 7]
var value = arr.reduce((sum, ele) => {
    return sum + ele;
})