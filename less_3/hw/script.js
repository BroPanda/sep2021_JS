// --створити масив з:
//     - з 5 числових значень

// let intArr = [1, 2, 3, 4, 5]

// - з 5 стічкових значень

// let strArr = ['panda', 'qwi', 'string', 'str', 'some']

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = ['1', 'wasd', 3, 4, true]
// console.log(Arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr_1 = []
// arr_1[0] = 'first'
// arr_1[1] = 22
// arr_1[2] = true

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div> some </div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div> index is ${i} </div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1> SOME H1 </h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i = 0
while (i < 20) {
    document.write(`<h1> SOME H1 index is ${i}</h1>`);
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr_2 = [2, 23, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number of arr_2) {
    console.log(`${number}`)
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


let arr_3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

for (const str of arr_3) {
    console.log(`${str}`)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


let arr_4 = [2, 23, 3, 4, 5, 'f', 'g', 'h', 'i', 'j']

for (const i of arr_4) {
    console.log(`${i}`)
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


let arr_5 = [2, 23, 3, 4, 5, 'f', false, 'h', true, 'j']

for (const i of arr_5) {
    if (typeof i === "boolean") {
        console.log(`${i}`);
    }

}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const i of arr_5) {
    if (typeof i === "number") {
        console.log(`${i}`);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const i of arr_5) {
    if (typeof i === "string") {
        console.log(`${i}`);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arr_6 = []

arr_6[0] = '2';
arr_6[1] = 23;
arr_6[2] = 'bbb';
arr_6[3] = 'aaa';
arr_6[4] = true;
arr_6[5] = 'zzz';
arr_6[6] = 111;
arr_6[7] = false;
arr_6[8] = 'xxx';
arr_6[9] = 0;


for (let j = 0; j < arr_6.length; j++) {
    console.log(`element ${j} is ${arr_6[j]}`)
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(`step ${j}`)
    document.write(`step ${j} `)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j++) {
    console.log(`step ${j}`)
    document.write(`step ${j} `)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 100; j += 2) {
    console.log(`__step___ ${j} `)
    document.write(`__step___ ${j} <br>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let j = 0; j < 100; j++) {
    if (j % 2) {continue}
    console.log(`!_step_! ${j} `)
    document.write(`!_step_! ${j} <br>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let j = 0; j < 100; j++) {
    if (!(j % 2)) {continue}
    console.log(`!_step_! ${j} `)
    document.write(`!_step_! ${j} <br>`)
}
