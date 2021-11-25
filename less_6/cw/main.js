// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione_Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let fixName = name => {
//     let fix = name
//         .replaceAll(".", " ")
//         .replaceAll("-", " ")
//         .replaceAll("_", " ")
//         .replaceAll("  ", " ")
//         .replaceAll("   ", " ")
//     return fix
// }
//
// console.log(fixName(n2));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomIntArray = (length, maxNum) => {
    let newArray = []
    for (let i = 0; i < length; i++) {
        newArray[i] = Math.floor(Math.random() * maxNum)
    }
    return newArray
}

let arr = randomIntArray(5, 100)
// console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let sortArr = arr.sort()
// let sortArr2 = arr.sort(( a, b ) =>  b - a);
// console.log(sortArr);
// console.log(sortArr2);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let filterArr = arr.filter(value => {
//     if (!(value % 2)){
//         return value
//     }
// })
// console.log(filterArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrToStr = arr.map(value => value.toString())
// console.log(arrToStr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (array, sortTo) => {
//     if (sortTo === "up") {
//         return array.sort();
//     }
//     if (sortTo === "down") {
//         return arr.sort((a, b) => b - a);
//     }
// }
// console.log(sortNums(nums, "down"));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => {
//     return a.monthDuration - b.monthDuration;
// });
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterMore5 = coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5)  return true
//     else return false
// })
// console.log(filterMore5);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// віріант 1
// let str = 'наслаждение'
//
// let cutString = (someWord, cutNum) => {
//     let split = someWord.split('');
//     for (let i = cutNum; i < split.length; i += cutNum) {
//         split[i - 1] += ','
//     }
//     return split.join('')
// }
//
// console.log(cutString('наслаждение', 3));


// віріант 2
// let str = 'наслаждение'
//
// let cutString = (someWord, cutNum) => {
//     let split = someWord.split('');
//     let map = split.map((value, index) => {
//         if (!(index % 3) && index != 0) {
//             return ',' + value
//         } else return value
//     })
//     return map.join('')
// }
//
// console.log(cutString('наслаждение', 3));
