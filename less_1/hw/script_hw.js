//////////////////////////////    TASK 1    //////////////////////////////

//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let a = 1;
let b = 10;
let c = 999;
let d = 123;
const PI = 3.14;
let e = 2.7;
let f = 16;
let bool_a = true;
let bool_b = false;


// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(PI);
// console.log(bool_a);
// console.log(bool_b);

// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(PI)
// alert(bool_a)
// alert(bool_b)

// document.write(`${hello}`)
// document.write(`${owu}`)
// document.write(`${com}`)
// document.write(`${a}`)
// document.write(`${a}`)
// document.write(`${b}`)
// document.write(`${c}`)
// document.write(`${d}`)
// document.write(`${e}`)
// document.write(`${f}`)
// document.write(`${PI}`)
// document.write(`${bool_a}`)
// document.write(`${bool_b}`)


//////////////////////////////    TASK 2    //////////////////////////////

//- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

hello = 'hi';
owu = 'not owu';
com = 'not com';
ua = 'not ua';
a = 2;
b = 3;
c = 4;
d = 5;
// PI не можна бо конста :)
e = 2.8;
f = 22;
bool_a = false;
bool_b = true;


// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(PI);
// console.log(bool_a);
// console.log(bool_b);

// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(PI)
// alert(bool_a)
// alert(bool_b)

// document.write(`${hello}`)
// document.write(`${owu}`)
// document.write(`${com}`)
// document.write(`${a}`)
// document.write(`${a}`)
// document.write(`${b}`)
// document.write(`${c}`)
// document.write(`${d}`)
// document.write(`${e}`)
// document.write(`${f}`)
// document.write(`${PI}`)
// document.write(`${bool_a}`)
// document.write(`${bool_b}`)


//////////////////////////////    TASK 3    //////////////////////////////

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)


function task3() {
    let firstName = 'Oleh'
    let lastName = 'Kokish'
    let middleName = 'Stanislav'

    let person = `${firstName} ${lastName} ${middleName}`
}

// task3()


//////////////////////////////    TASK 4    //////////////////////////////

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.


function task4() {
    let firstName = prompt("Please enter your firstName", "type here");
    let lastName = prompt("Please enter your lastName", "");
    let middleName = prompt("Please enter your middleName", "");
    let age = prompt("Please enter your age", "");
}
// task4()


//////////////////////////////    TASK 5    //////////////////////////////

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;


function task5() {
    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
// task5()


//////////////////////////////    TASK 6    //////////////////////////////


// 5 != 6 -> true
// 5 == 6 -> false
// 5 > 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


//////////////////////////////    TASK 6    //////////////////////////////

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

 let str = "20";
 let x = 5;

// document.write(str + x + "<br/>"); -> 205 (str строка і приводить обидві змінні до строки із за "+")
// document.write(str - x + "<br/>"); -> 15 (всі решта дії будуть матеметичні якщо строках будуть числа)
// document.write(str * "2" + "<br/>"); -> 40 (всі решта дії будуть матеметичні якщо строках будуть числа)
// document.write(str / 2 + "<br/>"); -> 10 (всі решта дії будуть матеметичні якщо строках будуть числа)

