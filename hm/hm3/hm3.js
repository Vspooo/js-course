// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let freeArr = [
//     {
//         name: "ex1"
//     },{
//         name: "ex2"
//     },{
//         name: "ex3"
//     },{
//         name: "ex4"
//     },{
//         name: "ex5"
//     },{
//         name: "ex6"
//     },{
//         name: "ex7"
//     },{
//         name: "ex8"
//     },{
//         name: "ex9"
//     },{
//         name: "ex10"
//     }
// ]
// for (let i = 0; i < freeArr.length; i++) {
//     const freeArrElement = freeArr[i];
//     document.write(`<div>${freeArrElement.name}</div>`)
// }


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < freeArr.length; i++) {
//     const freeArrElement = freeArr[i];
//     document.write(`<div>${freeArrElement.name} -  ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// n = 0
// while (n <= 19){
//     document.write(`<h1>+</h1>`)
//     n++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let n = 0
// while (n <= 10){
//     for (let i = 0; i < freeArr.length; i++) {
//         const freeArrElement = freeArr[i];
//         document.write(`<h1>${freeArrElement.name} ${i}</h1>`)
//         n++
//     }
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`)
// }
// document.write(`</ul>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону. Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div>`)
// for (const product of products) {
// 	document.write(`<h3>${product.title}. price ${product.price}</h3>`)
//     document.write(`<img src="${product.image}" alt="nwm">`)
// }
// document.write(`</div>`)


// є масив. За допомоги циклу вивести: - користувачів зі статусом true;    - користувачів зі статусом false;    - користувачів які старші за 30 років

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 40, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.status === true){
//         console.log(user)
//     }
// }
//
// for (const user of users) {
//     if (user.status === false){
//         console.log(user)
//     }
// }
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age > 30){
//         console.log(user)
//     }
// }

