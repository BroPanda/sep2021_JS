// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let getMain_headerID = document.getElementById('main_header');
getMain_headerID.classList.toggle("nameGroup");

// b) робить шириниу елементу ul 400px
let ulTag = document.getElementsByTagName('ul');

for (const ulTagElement of ulTag) {
    ulTagElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListEl of linkList) {
    linkListEl.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (const listElement2El of listElement2) {
    console.log(listElement2El.innerText);
}


// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
for (const liListEl of liList) {
    // liListEl.firstChild.style.color = 'gray';
    liListEl.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aTag = document.getElementsByTagName("a");
for (const aTagEl of aTag) {
    aTagEl.classList.toggle('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aTagEl of aTag) {
    if (aTagEl.innerText === 'link3') aTagEl.style.fontSize = '40px';
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aTagEl of aTag) {
    aTagEl.classList.add(`element_${aTagEl.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let color = prompt('type color sub-header', 'blue');
let subHeaderLists = document.getElementsByClassName('sub-header')
for (const subHeader of subHeaderLists) {
    subHeader.style.background = `${color}`;
}


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color2 = prompt('type color \'content 2 segment\'', 'red');
for (const subHeader of subHeaderLists) {
    if (subHeader.innerText === `content 2 segment`) {
        subHeader.style.background = `${color2}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName("content_1");
let textContent_1 = prompt('type textContent_1', 'textContent_1');

for (const content1Element of content_1) {
    content1Element.innerText = `${textContent_1}`;
}

// l) отримати елементи p та змінити їм padding на 20px
let dTag = document.getElementsByTagName('d');
for (const dTagElement of dTag) {
    dTagElement.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2Class = document.getElementsByClassName("text2");
text2Class[0].innerText = 'sep-2021'
console.log(text2Class);