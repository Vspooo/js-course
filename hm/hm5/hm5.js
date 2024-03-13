// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let area = (a,b) => a*b
// console.log(area(5,5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let cycleArea = (r) => Math.PI * r*r
// console.log(cycleArea(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderArea = (r,h) => 2*r*h
// console.log(cylinderArea(5,2))

// - створити функцію яка приймає масив та виводить кожен його елемент


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
// let arrayIterator = (array) => {array.forEach(user => console.log(user))}
// arrayIterator(users)



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let textCreator = (text) => document.write(`<p>${text}</p>`)
// textCreator("hello world")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let sectionCreator = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// sectionCreator("holla")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let sectionCreator = (text, countOfLi) => {
//     document.write(`<ul>`)
//     for (let i = 0; i <= countOfLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// sectionCreator("holla amigos",5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
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
//
// let listCreator = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         document.write(`<li> ${Object.keys(arrayElement)[i]} ${arrayElement.name} </li>`)
//
//     }
//     document.write(`</ul>`)
// }
// listCreator(users)