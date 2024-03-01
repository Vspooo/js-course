// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sOfrEctangle (a,b) {
//     return console.log(a*b)
// }
// sOfrEctangle(5,4)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sOfCircle (r){
//     return console.log(3.14*r*r)
// }
// sOfCircle(5)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sOfCylinder(r,h){
//     return console.log(2*3.14*r * (h+r))
// }
// sOfCylinder(2,2)


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
//
// function arrayPrinter (array){
//     for (const arrayKey in array) {
//         console.log(array[arrayKey])
//     }
// }
// arrayPrinter(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textCreator (text) {
//     document.write(`<p>${text}</p>`)
// }
// textCreator("hello okten")


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulCreator(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// ulCreator("sup men")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listCreator(text, countOfLines){
//     document.write(`<ul>`)
//     for (let i = 0; i < countOfLines; i++) {
//         const textElement = text[i];
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listCreator("hello",5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = ["hello",true,5885,"buenos",false,NaN];
// function arrWriter(array){
//     document.write(`<ul>`)
//     for (const arrayElement of array){
//         document.write(`<li>${typeof arrayElement} ${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// arrWriter(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
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

// function userIterator(array){
//     for (const arrayElement of array) {
//         document.write(`<div>`)
//         for (const arrayElementKey in arrayElement) {
//             document.write(`<p>${arrayElementKey} - ${arrayElement[arrayElementKey]}</p>`)
//         }
//         document.write(`</div>`)
//     }
// }
// userIterator(users)


// - створити функцію яка повертає найменьше число з масиву

// let arr = [11,100500,8,0.1,5,144,11.89];
// function arrayIterator(array){
// return document.write(`${Math.min(...array)}`)
// }
// arrayIterator(arr)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let numbers = [2,4,6] // 12
// let sum = 0
// function sumNums (array){
//     for (const arrayElement of array) {
//         sum += arrayElement
//     }
//     return console.log(sum)
// }
// sumNums(numbers)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах


// let numbers = [11,22,33,44,55,66];
// function swap(array,index1,index2){
//     let value1 = array[index1];
//     let value2 = array[index2];
//
//     array.splice(index2,1,value1);
//     array.splice(index1,1,value2)
//
//     return console.log(array)
// }
// swap(numbers,0,5)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)


// let wallet = [
//     {currency: "USD", value: 40},
//     {currency: "EUR", value: 42},
//     {currency: "PLN",value: 9}
// ]
//
// function exchange(sumUA, array) {
//     for (const arrayElement of array) {
//         if (arrayElement.currency === "USD"){
//             console.log(sumUA/arrayElement.value)
//         } else if (arrayElement.currency === "EUR"){
//             console.log(sumUA/arrayElement.value)
//         } else if (arrayElement.currency === "PLN"){
//             console.log(sumUA/arrayElement.value)
//         } else {
//             console.log("We don't exchange current currency")
//         }
//     }
// }
//
// exchange(10000, wallet)
// exchange(10000,[{currency:"Ur",value:50}]) // test what happen if I'll use wrong currency


