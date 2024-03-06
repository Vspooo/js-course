// - Знайти та вивести довижину настипних стрінгових значень : 'hello world', 'lorem ipsum', 'javascript is cool'

// let array = ["hello world", "lorem ipsum", "javascript is cool"];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(`'${arrayElement}' length is ${arrayElement.length}`)
// }

// - Перевести до великого регістру наступні стрінгові значення  'hello world', 'lorem ipsum', 'javascript is cool'

// let array = ["hello world", "lorem ipsum", "javascript is cool"];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement.toUpperCase());
// }

// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let array  = ["HELLO WORLD","LOREM IPSUM","JAVASCRIPT IS COOL"]
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement.toLowerCase());
// }


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// let newStr = str.replaceAll(" ", '');
// console.log(newStr)


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// let stringToArray =(str) => str.split(" ")
// console.log(stringToArray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(nums.map(String));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// function sortNum (arrayOfNums,arg){
//     if (arg === "ascending"){
//         return  console.log(arrayOfNums.sort((a,b) => a-b))
//     } else if (arg === "descending"){
//         return console.log(arrayOfNums.sort((a,b)=> b-a))
//     } else {
//         console.log("something went wrong")
//     }
//
// }
// sortNum(nums,"descending")


//  є масив;

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//  -- відсортувати його за спаданням за monthDuration;
// console.log(coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// }));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців;
// console.log(coursesAndDurationArray.filter((k) => k.monthDuration > 5));

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let mappedArray = coursesAndDurationArray.map((coursesElement,index)=>{
//     let course ={
//         id : index,
//         title : coursesElement.title,
//         monthDuration : coursesElement.monthDuration
//     }
//     return course
// })
// console.log(mappedArray);


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// let cards = [
//     {
//         cardSuit: "diamond",
//         value: 6,
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: 7,
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: 8,
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: 9,
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: 10,
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: "ace",
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: "jack",
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: "queen",
//         color: "red"
//     }, {
//         cardSuit: "diamond",
//         value: "king",
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: 6,
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: 7,
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: 8,
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: 9,
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: 10,
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: "ace",
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: "jack",
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: "queen",
//         color: "red"
//     }, {
//         cardSuit: "heart",
//         value: "king",
//         color: "red"
//     }, {
//         cardSuit: "spade",
//         value: 6,
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: 7,
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: 8,
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: 9,
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: 10,
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: "ace",
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: "jack",
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: "queen",
//         color: "black",
//     }, {
//         cardSuit: "spade",
//         value: "king",
//         color: "black",
//     }, {
//         cardSuit: "clubs",
//         value: "6",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "7",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "8",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "9",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "10",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "ace",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "jack",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "queen",
//         color: "black"
//     }, {
//         cardSuit: "clubs",
//         value: "king",
//         color: "black"
//     }
//
// ]
// - знайти піковий туз

// console.log(cards.filter((card) => card.value === "ace" && card.cardSuit === "spade"));


// - всі шістки
// console.log(cards.filter((card) => card.value === 6));


// - всі червоні карти
// console.log(cards.filter((card) => card.color === "red"));

// - всі буби

// console.log(cards.filter((card) => card.cardSuit === "diamond"));

// - всі трефи від 9 та більше
// console.log(cards.filter((card) => card.value > 6 && card.cardSuit === "clubs" || card.value === "ace" && card.cardSuit === "clubs" || card.value === "jack" && card.cardSuit === "clubs" || card.value === "queen" && card.value === "clubs" || card.value === "king" && card.cardSuit === "clubs"));


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// let newArray = cards.reduce((accumulator, user) =>{
//     if (user.cardSuit === "spade"){
//         accumulator[0].push(user)
//     }else if (user.cardSuit === "diamond"){
//         accumulator[1].push(user)
//     } else if (user.cardSuit === "heart"){
//         accumulator[2].push(user)
//     } else if (user.cardSuit === "clubs"){
//         accumulator[3].push(user)
//     }
//     return accumulator
// }, [ [],[],[],[] ] )
//
// console.log(newArray);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass
//
//
// console.log(coursesArray.filter((course) => course.modules.includes("sass")));
// console.log(coursesArray.filter((course) => course.modules.includes("docker")));