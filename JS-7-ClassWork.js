// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і
//
//  function Cars(model, factory, year, maxSpeed, volume){
//      this.model=model;
//      this.factory=factory;
//      this.year=year;
//      this.maxSpeed=maxSpeed;
//      this.volume=volume;
//      this.drive = function (){
//          console.log (`Їдемо зі швидкістю ${maxSpeed} на годину`)
//      }
//      this.info=function (){
//          for (const key in this) {
//              if (typeof this[key] !== 'function')
//                  console.log (`${key} - ${this[key]}`)
//          }
//      }
//      this.increaseMaxSpeed=function (newSpeed){
//          this.maxSpeed=this.maxSpeed+newSpeed
//          console.log(this.maxSpeed)
//      }
//      this.changeYear=function (newValue){
//          this.year=newValue
//          console.log(this.year)
//      }
//      this.addDriver=function (driver){
//          this.driver=driver
//          console.log(this.driver)
//      }
//  }
// let newCar = new Cars('Toyota', 'Japan', 2017, 220,1.6);
//  console.log(newCar);
//  newCar.drive();
//  newCar.info();
//  newCar.increaseMaxSpeed(20);
//  newCar.changeYear(2018);
//  newCar.addDriver('Vasya');
// console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, factory, year, maxSpeed, volume){
//          this.model=model;
//          this.factory=factory;
//          this.year=year;
//          this.maxSpeed=maxSpeed;
//          this.volume=volume;
//          this.drive = function (){
//              console.log (`Їдемо зі швидкістю ${maxSpeed} на годину`)
//          }
//          this.info=function (){
//              for (const key in this) {
//                  if (typeof this[key] !== 'function')
//                      console.log (`${key} - ${this[key]}`)
//              }
//          }
//          this.increaseMaxSpeed=function (newSpeed){
//              this.maxSpeed=this.maxSpeed+newSpeed
//              console.log(this.maxSpeed)
//          }
//          this.changeYear=function (newValue){
//              this.year=newValue
//              console.log(this.year)
//          }
//          this.addDriver=function (driver){
//              this.driver=driver
//              console.log(this.driver)
//          }
//      }
// }
//
//     let newCar = new Cars('Toyota', 'Japan', 2017, 220,1.6);
//      console.log(newCar);
//      newCar.drive();
//      newCar.info();
//      newCar.increaseMaxSpeed(20);
//      newCar.changeYear(2018);
//      newCar.addDriver('vasya');
//     console.log(newCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelyushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
//     const popelyushkaArray = [
//     new Popelyushka('sveta', 27, 36),
//     new Popelyushka('lena', 26, 37),
//     new Popelyushka('katya', 18, 36),
//     new Popelyushka('vasylina', 26, 35),
//     new Popelyushka('natasha', 25, 40),
//     new Popelyushka('ganna', 30, 38),
//     new Popelyushka('ira', 31, 34),
//     new Popelyushka('dasha', 30, 35),
//     new Popelyushka('olya', 34, 38),
//     new Popelyushka('kris', 16, 34)
//     ];
//
// class Prince {
//     constructor(name, age, shoose) {
//       this.name=name;
//       this.age=age;
//       this.shoose=shoose;
//     }
// }
// const prince = new Prince('Ivan', 26, 37);

//     const popelyushkaForPrince = (popelyushkaArray, prince)=>{
//      for (const item of popelyushkaArray) {
//                  if (item.footsize === prince.shoose) {
//                      return `Popelyushka - ${item.name}`
//                  }
//              }
//          }
// console.log(popelyushkaForPrince(popelyushkaArray, prince));

// const popelyushkaForPrince = popelyushkaArray.find((item) => item.footsize === prince.shoose);
// console.log(popelyushkaForPrince);