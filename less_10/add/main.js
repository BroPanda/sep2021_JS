// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// onclick = function (e) {
//     console.log(e);
//     console.log(`element: ${e.target.localName}, have classes: ${e.target.className}, id: ${e.target.id},
//     and have size h: ${e.target.clientHeight}px w: ${e.target.clientWidth}px`)
// }

//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// onclick = function (e) {
//     let popupClass = document.getElementsByClassName('popup')[0]
//     let popupText = document.getElementsByClassName('popup_text')[0]
//     popupClass.style.opacity = '1';
//     popupClass.style.visibility = 'visible';
//
//     popupText.innerText = `element: ${e.target.localName}
//      have classes: ${e.target.className}
//      id: ${e.target.id},
//      have size h: ${e.target.clientHeight}px w: ${e.target.clientWidth}px`
// }


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let divUsers = document.createElement('div')

let checkBox1 = document.createElement('input')
checkBox1.setAttribute('type', 'checkbox')

let checkBox2 = document.createElement('input')
checkBox2.setAttribute('type', 'checkbox')

let checkBox3 = document.createElement('input')
checkBox3.setAttribute('type', 'checkbox')

divUsers.append(checkBox1, checkBox2, checkBox3)
document.body.append(divUsers)

console.log(checkBox1);

let div = document.createElement('div')

onclick = function () {
    let users = usersWithAddress;
    if (checkBox1.checked) users = users.filter(value => value.status === false)
    if (checkBox2.checked) users = users.filter(value => value.age >= 29)
    if (checkBox3.checked) users = users.filter(value => value.address.city === 'Kyiv')

    div.innerText = ''
    for (const user of users) {
        div.innerText += `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city}`
    }
    divUsers.append(div)
}


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let arrImg = [
//     {id: 0, img: 'img/1.jpg'},
//     {id: 1, img: 'img/2.jpg'},
//     {id: 2, img: 'img/3.jpg'},
// ]
//
// let button1 = document.getElementById('prev')
// let button2 = document.getElementById('next')
// let carouselImg = document.getElementsByClassName('carousel_img')[0]
//
// for (let j = 0; j < arrImg.length; j++) {
//     let img = document.createElement('img')
//     img.id = `img${j}`
//     img.src = arrImg[j].img
//     carouselImg.append(img)
// }
//
// let i = 0;
// carouselImg.children[i].style.opacity = '1';
// carouselImg.children[i].style.visibility = 'visible';
//
//
// button1.onclick = () => {
//     if (i > 0) {
//         carouselImg.children[i].style.opacity = '0';
//         carouselImg.children[i].style.visibility = 'hidden';
//         i--;
//         carouselImg.children[i].style.opacity = '1';
//         carouselImg.children[i].style.visibility = 'visible';
//
//     } else {
//         carouselImg.children[i].style.opacity = '0';
//         carouselImg.children[i].style.visibility = 'hidden';
//         i = arrImg.length - 1;
//         carouselImg.children[i].style.opacity = '1';
//         carouselImg.children[i].style.visibility = 'visible';
//     }
//     console.log(i);
// }
//
// button2.onclick = () => {
//     if (i < arrImg.length - 1) {
//         carouselImg.children[i].style.opacity = '0';
//         carouselImg.children[i].style.visibility = 'hidden';
//         i++;
//         carouselImg.children[i].style.opacity = '1';
//         carouselImg.children[i].style.visibility = 'visible';
//
//     } else {
//         carouselImg.children[i].style.opacity = '0';
//         carouselImg.children[i].style.visibility = 'hidden';
//         i = 0;
//         carouselImg.children[i].style.opacity = '1';
//         carouselImg.children[i].style.visibility = 'visible';
//     }
//     console.log(i);
// }


//

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом
// змінює свій стан


let p = document.getElementsByClassName('p')[0]
onmouseup = () => {
    selection = window.getSelection().toString();
    let str = selection.bold().italics()
    p.innerHTML = p.innerText.replace(selection, str);
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .\
// Функция создает
// в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к
// следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с
//     ним на одном уровне


let ddosDiv = document.getElementsByClassName(`xxx`)[0];
let button1 = document.createElement('button');
let button2 = document.createElement('button');
button1.innerText = 'назад';
button2.innerText = 'вперед';

ddosDiv.append(button1, button2)

console.log(ddosDiv);

let arr = []

function rec(fatherDiv) {
    for (let i = 0; i < fatherDiv.children.length; i++) {
        arr.push(`${fatherDiv.children[i].nodeName}`)
        if (fatherDiv.children[i].children.length) {
            rec(fatherDiv.children[i])
        }
    }
}

let i = 0;

button1.onclick = () => {
    if (i > 0) {
        console.log(arr[i]);
        i--
    } else i = arr.length;
}

button2.onclick = () => {
    if (i < arr.length) {
        console.log(arr[i]);
        i++
    } else i = 0;
}

rec(ddosDiv)










