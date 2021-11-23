// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minResult = (a, b, c) => {
//     if (a <= b && a <= c) {
//         return a
//     } else if (b <= a && b <= c) {
//         return b
//     } else return c
// }


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let minResult = (a, b, c) => {
//     if (a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else return c
// }


// - створити функцію яка повертає найбільше число з масиву
// let arr = [5, 3, 4, 9, 2, 4, 2]
// let maxNumberOfArray = (array) => {
//     let a = array[0]
//     for (const arrayElement of array) {
//         if (a > arrayElement) {
//             a = arrayElement
//         }
//     }
//     return a
// }
// console.log(maxNumberOfArray);


// - створити функцію яка повертає найменьше число з масиву
// let arr = [5, 3, 4, 9, 2, 4, 2]
// let minNumberOfArray = (array) => {
//     let a = array[0]
//     for (const arrayElement of array) {
//         if (a < arrayElement) {
//             a = arrayElement
//         }
//     }
//     return a
// }


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [5, 3, 4, 9, 2, 4, 2]
// let sum = 0
// arr.map((n) => sum += n)
// console.log(sum)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [5, 3, 4, 9, 2, 4, 2]
// let sum = 0
// arr.map((n) => sum += n)
// console.log(sum / arr.length)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minResult = (...arr) => {
//
//     let max = arr[0]
//     let min = arr[0]
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement
//         }
//         if (arrElement < min) {
//             min = arrElement
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// minResult(5, 3, 4, 9, 2, 4, 2)


// - створити функцію яка заповнює масив рандомними числами
// let arrayCreator = (n) => {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.floor(Math.random() * 10)
//     }
//     return arr
// }
// console.log(arrayCreator(9));


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomNum = () => console.log(Math.round(Math.random() * 100))
// randomNum()


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrayCreator = (n) => {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.floor(Math.random() * n)
//     }
//     return arr
// }
// console.log(arrayCreator(9));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [5, 3, 4, 9, 2, 4, 2]
// let reversArr = (array) => {
//     rev = []
//     for (let i = array.length, j = 0; i > 0; i--, j++) {
//         rev[j] = array[i - 1]
//     }
//     return rev
// }
//
// console.log(reversArr(arr));


