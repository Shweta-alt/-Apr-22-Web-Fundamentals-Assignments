const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionareBtn = document.getElementById('show-millionare');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate');


getRandomUser();
getRandomUser();
getRandomUser();
let data = [];

// fetch random user 

async function getRandomUser (){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    console.log(data);
    const user = data.results(0);
    const newUser = {
        name:'${user.name.first} ${user.name.last}',
        money:Math.floor(Math .random() * 1000000),
    };

    addData(newUser);

    // add new obj  to data arr 
    function addData(obj){
        data.push(obj);
        updateDOM();
    }

   function updateDOM (provideData = data){
        main.innerHTML = '<h2><strong>Person</strong></h2>';
        provideData.forEach(itemt => {
            const element = document.getElementById('div');
            element.classList.add('person');
            element.innerHTML = '<strong>${item.name}</strong> ${formatMoney(item.money)}';
            main.appendChild(element);            
        });


    }
   
}

function formatMoney(number){
    return '$' +number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}