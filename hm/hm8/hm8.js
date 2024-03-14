// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let array = []
// class User{
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// array.push(
//     new User(1,"vasya","popovich","vasyaPopovich@gmail.com", +26899224692),
//     new User(2,"tolik","wasisdas","tolikWasisdas.com", +3809612565),
//     new User(3,"yura","suryj","yuraSuryj.com", +485252652),
//     new User(4,"anna","chrynuch","annaChynuch@gmail.com", +99825482245),
//     new User(5,"vika","batyk","vikaBatyk@gmail.com", +454865284),
//     new User(6,"volodya","voloshyn","voloshynVolodia@gmail.com", +262225148),
//     new User(7,"kokos","elmexico","kokosik@gmail.com", +86211555541),
//     new User(8,"ananas","laAfrico","ananasLaAfrico@gmail.com", +78322145531),
//     new User(9,"abrikos","neznajy","abrikoska@gmail.com", +380996574125),
//     new User(10,"lolik","bolik","nimyj@gmail.com", +4855525265654)
// )
// console.log(array);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(array.filter((user) => user.id % 2 === 0));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(array.sort((a, b) => a.id - b.id));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// let array = []
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// array.push(
//     new Client(1,"vasya","popovich","vasyaPopovich@gmail.com", +26899224692,["pumpkin","apple","juice","milk","chocolate"]),
//     new Client(2,"tolik","wasisdas","tolikWasisdas.com", +3809612565,["laptop","charger"]),
//     new Client(3,"yura","suryj","yuraSuryj.com", +485252652,["chips"]),
//     new Client(4,"anna","chrynuch","annaChynuch@gmail.com", +99825482245,["coca cola","gfhgfgg","gfhfh","lalalala"]),
//     new Client(5,"vika","batyk","vikaBatyk@gmail.com", +454865284,["pants"]),
//     new Client(6,"volodya","voloshyn","voloshynVolodia@gmail.com", +262225148,["trenbolone","dianabol","crack"]),
//     new Client(7,"kokos","elmexico","kokosik@gmail.com", +86211555541,[]),
//     new Client(8,"ananas","laAfrico","ananasLaAfrico@gmail.com", +78322145531,["headphones"]),
//     new Client(9,"abrikos","neznajy","abrikoska@gmail.com", +380996574125,["meat","potato"]),
//     new Client(10,"lolik","bolik","nimyj@gmail.com", +4855525265654,["monster","snikers","mars","milka","pringels","beer"])
// )
// console.log(array)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(array.sort((a, b) => b.order.length - a.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,productionYear,maxSpeed,engineCapacity){
//     this.model = model;
//     this.producer = producer;
//     this.productionYear = productionYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity
//     this.drive = function (){
//         console.log(`їдемо зі видшкістю ${this.maxSpeed} кілометрів на годину`)
//     }
//     this.info = function (){
//         if (this.driver){
//             for (let i = 0; i <= 4; i++) {
//                 const carKey = Object.keys(this)[i];
//                 const carKeyValue = Object.values(this)[i];
//                 console.log(`${carKey} - ${carKeyValue}`)
//             }
//             console.log(this.driver)
//         } else if (!this.driver){
//
//             for (let i = 0; i <= 4; i++) {
//                 const carKey = Object.keys(this)[i];
//                 const carKeyValue = Object.values(this)[i];
//                 console.log(`${carKey} - ${carKeyValue}`)
//             }
//
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//        return this.maxSpeed += newSpeed
//     }
//     this.changeYear = function (newValue){
//        return  productionYear = newValue
//     }
//     this.addDriver = function (newDriver){
//         this.driver = newDriver
//     }
// }
// let car1 = new Car("audi s7", "audi",2017,290,"3.0")
// car1.drive()
// car1.increaseMaxSpeed(80);
// car1.drive()
// car1.info()
// car1.addDriver({name : "vasya",age:55,status:true})
// car1.info()



// - (Те саме, тільки через клас)
// class Car{
//     constructor(model, producer, productionYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.productionYear = productionYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive(){
//         console.log(`Їде зі швидкість ${this.maxSpeed} км на годину`)
//     };
//     info(){
//         if (this.driver){
//             for (let i = 0; i <= 4; i++) {
//                 const carKey = Object.keys(this)[i]
//                 const carKeyValue = Object.values(this)[i]
//                 console.log(`${carKey} - ${carKeyValue}`)
//             }
//             console.log(this.driver)
//         } else if (!this.driver){
//             for (let i = 0; i <= 4; i++) {
//                 const carKey = Object.keys(this)[i]
//                 const carKeyValue = Object.values(this)[i]
//                 console.log(`${carKey} - ${carKeyValue}`)
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         return this.maxSpeed += newSpeed
//     };
//     changeYear(newValue){
//         this.productionYear = newValue
//     };
//     addDriver(newDriver){
//         this.driver = newDriver
//     }
// }
//
// let car1 = new Car("audi s7", "audi",2017,290,"3.0")
// console.log(car1)
// car1.drive()
// car1.info()

// car1.increaseMaxSpeed(50)
// car1.addDriver({name:"vasya",age:22,status:true})
// car1.info()



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellas = []
// cinderellas.push(
//     new Cinderella("Ola",19,37),
//     new Cinderella("Anna",21,38.5),
//     new Cinderella("Vika",17,39),
//     new Cinderella("Nastya",22,36),
//     new Cinderella("Yulia",18,37.5),
//     new Cinderella("Maria",23,38),
//     new Cinderella("Katya",21,35),
//     new Cinderella("Marta",20,36.5),
//     new Cinderella("Tania",18,39),
//     new Cinderella("Daryna",19,40)
// )
//
// class Prince{
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince("Alex",21,36.5);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.foundShoe){
//         console.log(cinderella)
//     }
// }

// console.log(arr.find((a) => a.footSize === prince.foundShoe));



