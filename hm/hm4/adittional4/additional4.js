// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let arr = [0,-9,8,100500,4,4,6,-5]
// let min = (array) =>{
//     array.sort((a,b) => a-b)
//     return array[0]
// }
// console.log(min(arr));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let arr = [-6,0,4,88,-9999,100500];
// let max = (array) =>{
//     array.sort((a,b) => b-a)
//     return array[0]
// }
// console.log(max(arr))



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [4,8,6]
// function avgArefmetic(array){
//     let result = 0
//     for (const arrayElement of array) {
//         result += arrayElement/array.length
//     }
//     return  console.log(result)
// }
// avgArefmetic(nums)



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let numbers = [-6,0,4,88,-9999,100500];
//
// function minValue(array) {
//     array.sort((a,b) => a-b)
//     console.log(array[array.length-1])
//     return array[0]
// }
// minValue(numbers)


// - створити функцію яка заповнює масив рандомними числами

// let arrayNew = [];
// function filler(array){
//     array.push(Math.round(Math.random()*100))
//     return console.log(array)
// }
// filler(arrayNew)



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let newArray = [];
// function filler(array,limit){
//     for (let i = 0; i < limit; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
//     return console.log(array)
// }
// filler(newArray,50)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let example = [1,2,3];
// let reverserArray = (array) =>{
//     return array.sort((a,b)=> b-a)
// }
// console.log(reverserArray(example));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


// function test (arg1,arg2,arg3){
//     let joined ='';
//     if (arguments.length === 1){
//        console.log(arguments[0])
//    } else if (arguments.length >=2){
//        for (const key in arguments) {
//            joined += arguments[key]
//        }
//         console.log(joined)
//     }
// }
// test("one")
// test("one","two","three")

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


// let arr = [1,2,3,4];
// let nums = [2,3,4,5,6,7]

// function swap(arr1,arr2){
//     let result = []
//     for (let i = 0; i < Math.min(arr1.length,arr2.length); i++) {
//         result.push(arr1[i] + arr2[i])
//     }
//     console.log(result)
// }
// swap(arr,nums)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let user1 = [{name : "volodymyr",age: 16,status: false},{model : "RS6", power:"605hp", engine : 4.0}]
// function keyRewriter (array){
//     let newArr = []
//     for (const arrayKey in array) {
//         for (const arrayKeyElement of Object.keys(array[arrayKey])) {
//             newArr.push(arrayKeyElement)
//         }
//     }
//     return console.log(newArr)
// }
// keyRewriter(user)
// keyRewriter(user1)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let user1 = [{name : "volodymyr",age: 16,status: false},{model : "RS6", power:"605hp", engine : 4.5}]
// function arrayRewriter (array) {
//     let newArr = [];
//     for (const arrayKey in array) {
//         for (const arrayKeyElement of Object.values(array[arrayKey])) {
//             newArr.push(arrayKeyElement)
//         }
//     }
//     return console.log(newArr)
// }
// arrayRewriter(user)
// arrayRewriter(user1)