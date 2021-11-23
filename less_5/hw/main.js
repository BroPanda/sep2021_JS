// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let result = (a, b) => a * b


// - створити функцію яка обчислює та повертає площу кола
// let result = (r) => Math.PI * Math.pow(r, 2)


// - створити функцію яка обчислює та повертає площу циліндру
// let result = (r, h) => 2 * Math.PI * r * h


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 5, 6]
// console.log(arr.map((n) => n))


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let text = "some big text";
// let p_text = (t) => document.write(`<p> ${t} </p>`)
// p_text(text)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let text = "some big text";
// let text = (t) => {
//     document.write(
//         `<ul>
//             <li>${t}</li>
//             <li>${t}</li>
//             <li>${t}</li>
//          </ul>`)
// }
// text(text)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let text = "some big text";
// let ul_text = (t, row) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < row; i++) {
//         document.write(`<ul>${t}</ul>`)
//     }
//     document.write(`</ul>`)
// }
// ul_text(text, 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 2, 3, 5, 6]
// let ul_text = (ar) => {
//     document.write(`<ul>`)
//     for (const arElement of ar) {
//         document.write(`<ul>${arElement}</ul>`)
//     }
//     document.write(`</ul>`)
// }
// ul_text(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'Vasya', age: 24},
//     {id: 2, name: 'Vanya', age: 22},
//     {id: 3, name: 'Misha', age: 19},
// ]
//
// let ul_text = (ar) => {
//     document.write(`<ul>`)
//     for (const arElement of ar) {
//         document.write(`<ul>${arElement.id} ${arElement.name} ${arElement.age}</ul>`)
//     }
//     document.write(`</ul>`)
// }
// ul_text(users)
