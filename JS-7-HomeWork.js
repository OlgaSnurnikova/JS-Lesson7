// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// const userArray = [
//     new User(1, 'Vasya', 'Pupkin', 'aa@gmail.com', 30680000001),
//     new User(2, 'Petya', 'Petrov', 'bb@gmail.com', 30680000002),
//     new User(3, 'Jenya', 'Ivanov', 'cc@gmail.com', 30680000003),
//     new User(4, 'Slava', 'Sidorov', 'dd@gmail.com', 30680000004),
//     new User(5, 'Ivan', 'Gayduk', 'ee@gmail.com', 30680000005),
//     new User(6, 'Galya', 'Tykva', 'ff@gmail.com', 30680000006),
//     new User(7, 'Ira', 'Slyva', 'gg@gmail.com', 30680000007),
//     new User(8, 'Nina', 'Kusmina', 'ii@gmail.com', 30680000008),
//     new User(9, 'Lena', 'Ivanova', 'jj@gmail.com', 30680000009),
//     new User(10, 'Katya', 'Petrova', 'll7@gmail.com', 30680001010)
// ];
// console.log(userArray);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filteredUser = userArray.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filteredUser);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortedUser = userArray.sort((a, b) => a.id - b.id);
// console.log(sortedUser)




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let emptyArray = [
//         new Client(1, 'Vasya', 'Pupkin', 'aa@gmail.com', 30680000001, ['milk', 'sugar', 'orange']),
//         new Client(2, 'Petya', 'Petrov', 'bb@gmail.com', 30680000002, ['milk', 'bread', 'orange']),
//         new Client(3, 'Jenya', 'Ivanov', 'cc@gmail.com', 30680000003, ['juice', 'sugar', 'vine']),
//         new Client(4, 'Slava', 'Sidorov', 'dd@gmail.com', 30680000004, ['fish', 'rice']),
//         new Client(5, 'Ivan', 'Gayduk', 'ee@gmail.com', 30680000005, ['juice', 'vine']),
//         new Client(6, 'Galya', 'Tykva', 'ff@gmail.com', 30680000006, ['cheese', 'vine']),
//         new Client(7, 'Ira', 'Slyva', 'gg@gmail.com', 30680000007, ['juice', 'rice']),
//         new Client(8, 'Nina', 'Kusmina', 'ii@gmail.com', 30680000008, ['juice', 'potato']),
//         new Client(9, 'Lena', 'Ivanova', 'jj@gmail.com', 30680000009,['milk', 'rice', 'bread', 'orange']),
//         new Client(10, 'Katya', 'Petrova', 'll7@gmail.com', 30680001010, ['milk', 'bread', 'vine'])
// ];
// console.log(emptyArray);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortedClients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedClients)
//