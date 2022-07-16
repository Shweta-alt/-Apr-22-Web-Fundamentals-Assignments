
// // synchronous code

// console.log('I');
// console.log('eating ice-cream');
// console.log('love');

// //asynchronous code

// console.log('I');

// // setTimeout(() => {
// //     console.log('love eating');
// // }, 2000);

// function x(){
//     console.log('love eating');

// }
// setTimeout(x, 2000);
// console.log('ice-cream');







// function one(){
//     console.log('print1');

// }

// function two(call_one){
//     console.log('print2');
//     call_one();
// }
// two(one);

// syncronous code

// console.log('I');
// console.log('eating ice-cream');
// console.log('love');

// asynchronous code
// setTimeout(function, time) => it allows to run a function after a specific time

// setTimeout(() => {
//   console.log('ice cream');
// }, 0);

// console.log('I');

// function x() {
//   console.log('love eating');
// }

// setTimeout(x, 3000); // 3 seconds
// Callback: when you pass a function as an argument of other function

// function one() {
//   console.log('print 1');
// }

// function two(call_one) {
//   console.log('print 2');
//   call_one();
// }

// two(one);


// code from geekster

// let store = {
//     fruits: [' strawberry', 'mango', 'cherry', 'grapes'],
//     liquids: ['water', 'ice'],
//     holdings: ['cone', 'cup', 'stick'],
//     toppings: ['choco chips', 'dry fruits'],
//   };
//   // console.log(store.fruits[0]);

//   let order = (fruit_name, call_production) => {
//     setTimeout(() => {
//       console.log(`${store.fruits[fruit_name]} has been selected`);
//       call_production(0, 1);
//     }, 2000);
//   };

//   let production = (holdings, toppings) => {
//     setTimeout(() => {
//       console.log('production has started');
//       // cutting the fruits
//       setTimeout(() => {
//         console.log('The fruits have been chopped');
//         setTimeout(() => {
//           console.log(`${store.liquids[0]} and ${store.liquids[1]} are added`);

//           setTimeout(() => {
//             console.log('Machine has started');
//             setTimeout(() => {
//               console.log(`Ice cream is placed on ${store.holdings[holdings]} `);
//               setTimeout(() => {
//                 console.log(`${store.toppings[toppings]} have been selected`);
//                 setTimeout(() => {
//                   console.log('serve the icecream');
//                 }, 1000);
//               }, 3000);
//             }, 2000);
//           }, 1000);
//         }, 1000);
//       }, 2000);
//     }, 0);
//   };

//   order(1, production);



// practice session on 05-07-2022



// function one(){
//   console.log('print 1');
// }
// function two(call_one){
//   console.log('print 2');
//   call_one();
// }
// two(one);

let store = {
  fruits: ['strawberry', 'mango', 'grapes', 'apple', 'cherry'],
  liquids: ['water', 'ice'],
  holdings: ['cone', 'cup'],
  topings: ['dry fruits', 'choco-chips', 'pomegranate']
};

let order = (fruitname, callproduction) => {
  setTimeout(() => {
    console.log(`${store.fruits[fruitname]} is selected`);
    callproduction(1);
  }, 2000);

}

let production = (topings) => {

  setTimeout(() => {
    console.log('production is started');

    setTimeout(() => {
      console.log('fruits are chopped');

      setTimeout(() => {
        console.log(`${store.liquids[0]}, ${store.liquids[1]} are added`);

        setTimeout(() => {
          console.log('machine has started');

          setTimeout(() => {
            console.log(`Ice cream is placed on ${store.holdings[0]}`);

            setTimeout(() => {
              console.log(`${store.topings[topings]} are garnnished on ice cream`);

              setTimeout(() => {
                console.log('serve the Ice Cream');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
}

order(0, production);