// task 1
let arr = ["hello", "okten", true, false, 1, 45, 6, "fdgdf", "kokos", true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// task 2
let book1 = {
    title: "hary poter",
    pageCount: 334,
    gender: "fantastic"
}

let book2 = {
    title: "how to earn money",
    pageCount: 247,
    gender: ["biography", "drama"]
}

let book3 = {
    title: "abetka",
    pageCount: 55,
    gender: "study"
}

console.log(book1);
console.log(book2);
console.log(book3);

// task3

let Book1 = {
    title: "The killer",
    pageCount: 268,
    gender: "detective",
    authors: [
        {
            name: "Max Twen",
            age: 44
        },
        {
            name: "anonymously",
            age: 26
        }
    ]
}
console.log(Book1);

let Book2 = {
    title: "Cherloc Holms",
    pageCount: 437,
    gender: "idk",
    authors: [
        {
            name: "kokos",
            age: 23
        },
        {
            name: "ananas",
            age: 33
        },
        {
            name: "orange",
            age: 55
        }
    ]
}
console.log(Book2);

let Book3 = {
    title: "101 nights",
    pageCount: 177,
    gender: "roman",
    authors: [
        {
            name: "Stivin Jobs",
            age: 59
        },
        {
            nane: "Max Twen",
            age: 44
        }
    ]
}
console.log(Book3);

// task4

let users = [
    {
        name: "Yura",
        username: "Yuran",
        password: "435fgdfg*^%$^&",
    },
    {
        name: "Max",
        username: "Stepan",
        password: "6fghfh_#$$^$"
    },
    {
        name: "Vova",
        username: "Lolololalala",
        password: "45t9540945u6054df"
    },
    {
        name: "Vitya",
        username: "Baranchik",
        password: "054df"
    },
    {
        name: "Yulia",
        username: "Sonce",
        password: "dgfhfhgh455*()*&"
    },
    {
        name: "Oleg",
        username: "ADMIN",
        password: "45645^*&*()*_"
    },
    {
        name: "Oksana",
        username: "Smurfik",
        password: "^&(&GHJTY$%*())"
    },
    {
        name: "Ostap",
        username: "Historik",
        password: "%^787889%$^GHJH"
    },
    {
        name: "Anna",
        username: "Nnw o co chodzi",
        password: "lalkivd^&&*#vvtg3"
    },
    {
        name: "Swiat",
        username: "Lolik",
        password: "4rgr^^&*^vf"
    }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Logical ramifications

//task1

let a = 1;
if (a !== 0) {
    console.log("Вірно")
} else {
    console.log("Не вірно")
}

//task2

// let num = prompt("fill a minute");
// if (num < 0) {
//     console.log("minute cant be negative")
// } else if (num >= 0 && num <= 15) {
//     console.log("its first decade")
// } else if( num>=16 && num<=30){
//     console.log("its second decade")
// } else if(num>=31 && num<=45) {
//     console.log("its third decade")
// } else if (num >=46 && num<=59){
//     console.log("its fours decade")
// } else if (num > 59){
//     console.log("idk xD")
// } else {
//     console.log("its not a num")
// }


//task3

// let day = prompt("fill a day of the month");
// if (day <=0){
//     console.log(" the day cant equal or be less than 0")
// } else if(day>=1 && day<= 10 ){
//     console.log("its first decade of month")
// } else if(day >=11 && day<= 20){
//     console.log("its second decade of month")
// } else if (day >=21 && day<=31){
//     console.log("its third decade of month")
// } else {
//     console.log("please enter a day")
// }


// task4

// let dayOfWeek = parseInt(prompt("Fill a day of the week"));
// switch (dayOfWeek) {
//     case 0:
//         console.log("please fill a correct value");
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default :
//         console.log("sorryy idk what happen")
// }


//task5


// let num1 = parseInt(prompt("enter first number"));
// let num2 = parseInt(prompt("enter your second number"));
// if (num1 === num2){
//     console.log("the nums are equal")
// } else {
//     console.log(Math.max(num1,num2))
// }

// task 6

// let x = "";
// if (x === null || x === "" || x === NaN || x === false || x === 0 || x === undefined) {
//     x = "default";
//     console.log(x)
// } else {
//     console.log("its true value")
// }


// task7

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// if (coursesAndDurationArray[0].monthDuration >=5){
//     console.log("great")
// }
// if (coursesAndDurationArray[1].monthDuration >=5){
//     console.log("great")
// }
// if (coursesAndDurationArray[2].monthDuration >=5){
//     console.log("great")
// }
// if (coursesAndDurationArray[3].monthDuration >=5){
//     console.log("great")
// }
// if (coursesAndDurationArray[4].monthDuration >=5){
//     console.log("great")
// }
// if (coursesAndDurationArray[5].monthDuration >=5){
//     console.log("great")
// }



// simply version on the task
// for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
//     if (coursesAndDurationArrayElement.monthDuration >=5){
//         console.log("great")
//     }
// }


