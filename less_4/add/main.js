// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

//
// function some() {
//     if (arguments.length == 1) {
//         console.log(arguments[0])
//     } else if (arguments.length == 2) {
//         console.log(arguments[0] + arguments[1])
//     }
// }
//
// some(1)
// some(1, 2)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// let arr = [1, 2, 3, 4]
// let arr2 = [2, 3, 4, 5]
// let arr3 = []
//
// //     [3,5,7,9]
//
// function addArrsInNewArr(arr_1, arr_2, arr_3) {
//     for (let i = 0; i < arr_1.length; i++) {
//         arr_3[i] = arr_1[i] + arr_2[i]
//     }
//     return arr_3
// }
//
// arr3 = addArrsInNewArr(arr, arr2, arr3)
//
// console.log(arr3)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let someArr = [
    {name: 'Dima', age: 13}, {model: 'Camry'}
]

let keys = []
//
// function findKeysOfObjInArr() {
//     for (const argument of arguments) {
//         for (const argumentElement of argument) {
//             for (const argumentElementKey in argumentElement) {
//                 keys.push(argumentElementKey)
//             }
//         }
//     }
// }
//
// findKeysOfObjInArr(someArr)
// console.log(keys);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let value = []

// function findKeysOfObjInArr() {
//     for (const argument of arguments) {
//         for (const argumentElement of argument) {
//             for (const argumentElementKey in argumentElement) {
//                 value.push(argumentElement[argumentElementKey])
//             }
//         }
//     }
// }
//
// findKeysOfObjInArr(someArr)
//
// console.log(value);



