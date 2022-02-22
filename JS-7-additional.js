// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// class PersonCard {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
// class Address {
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// };
// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// };
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// };
// let geo = new Geo('-37.3159','81.1496');
// let address = new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874', geo);
// let company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// let person = new PersonCard(1, 'Leanne Graham','Bret','Sincere@april.biz', address, '1-770-736-8031 x56442','hildegard.org', company);
// console.log(person);
// // let person1 = new PersonCard(1, 'Leanne Graham','Bret','Sincere@april.biz',
// //     new Address('Kulas Light','Apt. 556','Gwenborough','92998-3874', new Geo('-37.3159','81.1496')),
// //     '1-770-736-8031 x56442','hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'))
// // console.log(person1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// class Attributes {
//     constructor(titleOfAttr, actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
// }
// let a = new Tag('a','предназначен для создания ссылок', [new Attributes('accesskey',
//     'Активация ссылки с помощью комбинации клавиш.'),new Attributes('coords', 'Устанавливает координаты активной области.'), new Attributes(
//         'download', 'Предлагает скачать указанный по ссылке файл.')]);
// console.log(a);
// let div = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [new Attributes('align', 'Задает выравнивание содержимого тега <div>'), new Attributes('title', 'Добавляет всплывающую подсказку к содержимому')]);
// console.log(div);
// let h1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     new Attributes('align', 'Определяет выравнивание заголовка.'));
// console.log(h1);