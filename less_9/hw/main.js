// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let htmlDivElement = document.createElement('div');
htmlDivElement.setAttribute('class', 'wrap collapse alpha beta')
htmlDivElement.innerText = 'htmlDivElement'
htmlDivElement.style.background = 'coral'
htmlDivElement.style.color = 'white'
htmlDivElement.style.fontSize = '48px'

document.body.appendChild(htmlDivElement)
document.body.appendChild(htmlDivElement.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main','Products','About us','Contacts']
let menuEl = document.getElementsByClassName('menu')[0];

for (const string of arr) {
    let liEl = document.createElement('li')
    liEl.innerText = string
    menuEl.appendChild(liEl)
}


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let htmlDivElement2 = document.createElement('div');
for (const Element of coursesAndDurationArray) {
    htmlDivElement2.innerText = `${Element.title} - ${Element.monthDuration}`
    document.body.appendChild(htmlDivElement2.cloneNode(true))
}


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let htmlDivElement3 = document.createElement('div');
let htmlH1 = document.createElement('h1');
let htmlP = document.createElement('p');
for (const Element of coursesAndDurationArray) {
    htmlDivElement3.setAttribute('class', 'item')
    htmlH1.setAttribute('class', 'heading')
    htmlP.setAttribute('class', 'description')

    htmlH1.innerText = `${Element.title}`
    htmlP.innerText = `${Element.monthDuration}`

    document.body.appendChild(htmlDivElement3.cloneNode(true))
    htmlDivElement3.append(htmlH1, htmlP)
}
