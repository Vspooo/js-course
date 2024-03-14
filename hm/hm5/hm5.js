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

// let arr = ["hello","amigos",55,true,false,"owu",999,551155,1112686,true]
//
// let arrayLister = (array) =>{
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${typeof arrayElement} - ${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayLister(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

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
// ];

// let listCreator = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<ul>`)
//
//         for (let i = 0; i < Object.keys(arrayElement).length; i++) {
//             const userKey = Object.keys(arrayElement)[i]
//             const userKeyValue = Object.values(arrayElement)[i]
//             document.write(`<li>${userKey} - ${userKeyValue}</li>`)
//         }
//         document.write(`</ul>`)
//
//     }
// }
// listCreator(users)

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [11,22,33,9999]
// let minValueFromArray = (array) => Math.min(...array)
// console.log(minValueFromArray(numbers));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result += arrayElement
//     }
//     return result
// }
// let nums = [1,2,10]
// console.log(sum(nums));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (array,index1,index2) => {
//    let value1 = array[index1]
//    let value2 = array[index2]
//    array.splice(index1,1,value2);
//    array.splice(index2,1,value1);
//    return array
// }
// let nums = [11,22,33]
// console.log(swap(nums,0,2));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let currencies = [
//     {
//         currencyName : "usd"
//     },
//     {
//         currencyName:"eur"
//     },
//     {
//         currencyName: "pln"
//     },
//     {
//         currencyName: "gbp"
//     }
// ]

// let exchange = (sumUAH,exchangeCurrency,currencyValues) => {
//     let isCurrencyFound = false;
//     for (const currency of currencies) {
//         if (currency.currencyName === exchangeCurrency){
//             console.log(sumUAH/currencyValues)
//             isCurrencyFound = true;
//             break;
//         }
//     }
//     if (!isCurrencyFound){
//         console.log("ми не обмінюємо данну валюту")
//     }
// }
// exchange(10000,"usd",40)