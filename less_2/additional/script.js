//
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length > 2) {
    console.log("big arr")
} else {
    console.log("small arr")
}


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
let arr = [9, 3, 7]
console.log(arr[1])
//  Знайти, яке з них є середнім (більше одного, але менше за інше).
if (arr[0] >= arr[1] && arr[0] <= arr[2]) {
    console.log('mid first number')
} else if (arr[1] >= arr[0] && arr[1] <= arr[2]) {
    console.log('mid second number')
} else {
    console.log('mid third number')
}
//  Перевірити, чи знаходиться перше число між двома іншими.
"як може перше число знаходитись між двома іншими якщо воно перше? = ) умова не зрозуміла, треба більше інформації"



if (arr[0] >= arr[1] && arr[0] <= arr[2]) {
    console.log('mid first number')
} else if (arr[1] >= arr[0] && arr[1] <= arr[2]) {
    console.log('mid second number')
} else {
    console.log('mid third number')
}


// - Перепишіть конструкцію if з використанням умовного оператора '?':

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let result = a + b <= 4 ? 'Мало' : 'Багато'


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let x = 99;

x > 0 ? console.log('Позитивне число') : x < 0 ? console.log('Позитивне число') : console.log('нуль')