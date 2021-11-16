// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.

// const arr = []
//
// for (let i = 0, x = 0; arr.length < 50; i++) {
//     if (!(i % 2)) {
//         arr[x] = i
//         x++
//     }
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// const arr = []
//
// for (let i = 0, x = 0; arr.length < 50; i++) {
//     if (i % 2) {
//         arr[x] = i
//         x++
//     }
// }
// console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// const arr = []
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100)
//
// }
//
// console.log(arr);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// const arr = []
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 732) + 8;
//
// }
//
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < ; i+=3) {
//     console.log()
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i <; i += 3) {
//     if (!(i % 2)) {
//         console.log()
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


// const arr = []
// for (let i = 0, j = 0; i < `some length`; i += 3) {
//     if (!(i % 2)) {
//         console.log()
//         arr[j] = `some number`
//         j++
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// const arr = [1, 2, 3, 5, 7, 9, 56, 8, 67]
//
// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] % 2)) {
//         console.log(`${arr[i - 1]}`)
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// const arr = [100,250,50,168,120,345,188]
// let sum = 0;
//
// for (const number of arr) {
//     sum += number
// }
//
// console.log(`${sum/arr.length}`)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


// const arr = []
// const arr2 = []
//
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor((Math.random() * 10) + 1)
//
// }
//
// console.log(arr);
//
// for (const arrKey in arr) {
//     arr2[arrKey] = arr[arrKey] * 5
// }
//
// console.log(arr2);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// const arr = [11, 'ssdasd', true, 4, 2, 'ssdasd'];
// const arr2 = [];
// let s = 0;
//
// for (const arrKey in arr) {
//     if (typeof arr[arrKey] === "number") {
//         arr2[s] = arr[arrKey]
//         s++
//     }
// }
// console.log(arr2);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// for (const usersWithIdElement of usersWithId) {
//     for (const citiesWithIdElement of citiesWithId) {
//         if (usersWithIdElement.id === citiesWithIdElement.user_id){
//             usersWithIdElement.address = citiesWithIdElement
//         }
//     }
// }
//
// console.log(usersWithId);

//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// const arr =[]
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor((Math.random() * 10) + 1)
//     if (!(arr[i] % 2)) {
//         console.log(arr[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// const arr =[]
// const arr2 =[]
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor((Math.random() * 10) + 1)
// }
//
// for (const key of arr) {
//     arr2[key] = arr[key]
// }


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

const arr = ['a', 'b', 'c']
let word = '';

// for (let i = 0; i < arr.length ; i++) {
//     word += arr[i]
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
//
// while (i < arr.length) {
//     word += arr[i]
//     i++
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for (const arrElement of arr) {
//     word += arrElement
// }
// console.log(word);
