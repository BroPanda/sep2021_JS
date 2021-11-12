// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

//         0   1   2  3  5
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// let i = 0;
// while (i < arr.length) {
//     console.log(`${arr[i]}`)
//     i++
// }
//
// for (let j = 0; j < arr.length; j++) {
//     console.log(`${arr[j]}`)
// }

//
// i = 0
//
// while (i < arr.length) {
//     i++;
//
//     if (!(i % 2)) {
//         continue;
//     }
//     console.log(i)
//     console.log(`${arr[i]}`)
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let j = 0; j < arr.length; j++) {
//     if (!(j % 2)) {
//         continue;
//     }
//     console.log(j)
//     console.log(`${arr[j]}`)
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення


// i = 0
//
// while (i < arr.length) {
//     i++;
//
//     if (i % 2) {
//         continue;
//     }
//     console.log(i)
//     console.log(`${arr[i]}`)
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let j = 0; j < arr.length; j++) {
//     if (j % 2) {
//         continue;
//     }
//     console.log(j)
//     console.log(`${arr[j]}`)
// }


// 7. замінити кожне число кратне 3 на слово "okten"


for (let j = 0; j < arr.length; j++) {
    if (!(arr[j] % 3)) {
        arr[j] = 'okten';
    }
}
// console.log(arr)

// 8. вивести масив в зворотньому порядку.

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)