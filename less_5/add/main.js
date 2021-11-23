// - Дано натуральное число n. Выведите все числа от 1 до n.

// let a = 0;
//
// function logNums(lastNum) {
//     console.log(a)
//     a++
//     if (a > lastNum) {
//         return a
//     }
//     logNums(lastNum)
// }
//
// logNums(8)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function logNums(z, x, upFunc, lowFunc) {
//     if (z < x) {
//         upFunc(z, x)
//     } else {
//         lowFunc(z, x)
//     }
// }
//
// let toUpper = (num1, num2) => {
//     for (let i = num1; i <= num2; i++) {
//         console.log(i)
//     }
// }
//
// let toLower = (num1, num2) => {
//     for (let i = num1; i > num2; i--) {
//         console.log(i)
//     }
// }
//
// logNums(10, 5, toUpper, toLower)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let changeIndex = (array, index) => {
//     let x = array[index + 1]
//     array[index + 1] = array[index]
//     array[index] = x
//     return array
// }
//
// console.log(changeIndex([9, 8, 0, 4], 0));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [0,0,1,0]
//
// let arrSortZeroEnd = (array) => {
//     arrSort = []
//     let wasZero = false
//
//     for (let i = 0, j = 0; i < array.length; i++) {
//         if (array[i] != 0) {
//             arrSort[j] = array[i]
//             j++
//         } else wasZero = true
//     }
//
//     if (wasZero) {
//         for (let i = arrSort.length; i < array.length; i++) {
//             arrSort[i] = 0
//         }
//     }
//     console.log(arrSort);
// }
//
// arrSortZeroEnd(arr)