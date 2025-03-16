'use.strict';

// document.querySelector('button').addEventListener('click', (event) => {
//     // location.href = 'https://lms.ithillel.ua/';
//     // location.href = 'https://lms.ithillel.ua/';

//     // const myWind = window.open('', '', 'width=200');
//     console.log('click on btn');   

// })
// document.querySelector('div').addEventListener('click', (event) => {
//       console.log('click on div');
//     event.stopPropagation();
    

// }, true)
// document.querySelector('header').addEventListener('click', (event) => {
   
//     console.log('click on header');  
// })

// document.querySelector('div').addEventListener('click', (event) => {
//  if (event.target.tagName === 'BUTTON') {
//     console.log('clkick ob btn');
//     if (event.target.getAttribute)
//  }

// })

const categories = [
    {
        id:1,
        name: 'Laptops',
        products: [
            {id:1, name: 'Mackbook', price: 19800},
            {id:2, name: 'Samsung', price: 21800},
            {id:3, name: 'Lenovo', price: 19850},
            {id:4, name: 'Mackbook', price: 18800},
            {id:5, name: 'LG', price: 19500},
        ]
    },
    
    {
        id:2,
        name: 'Phones',
        products: [
            {id:6, name: 'Samsung', price: 1980},
            {id:7, name: 'Apple', price: 1800},
            {id:8, name: 'Huawei', price: 800},
            {id:9, name: 'Blackwiev', price: 500},
            {id:10, name: 'Nokia', price: 700},
        ]
    },
    {
        id: 3,
        name: 'Processor',
        products: [
            {id:11, name: 'Intel', price: 19800},
            {id:12, name: 'AMD', price: 19800},
            {id:13, name: 'Mackbook', price: 19800},
            {id:14, name: 'Mackbook', price: 19800},
            {id:15, name: 'Nokia', price: 19800},
        ]
    },
]