// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let div = document.createElement('div');
div.id = 'text';
div.innerText = 'some text';

let btn = document.createElement('button');
btn.id = 'clearTxt';
btn.innerText = 'clear txt';

let task1Id = document.getElementById('task1');
task1Id.append(div, btn);

btn.onclick = function () {
    div.innerText = '';
    if (btn.innerText === 'self destruction') { // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
        btn.style.display = 'none';
    }
    btn.innerText = 'self destruction';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let inputAge = document.createElement('input');
let task3Id = document.getElementById('task3');
let btnAge = document.createElement('button');
let divAgeInfo = document.createElement('div');
inputAge.id = 'age'
btnAge.id = 'btnAge';
btnAge.innerText = 'age'
divAgeInfo.id = 'ageText';

btnAge.onclick = function () {
    if (+inputAge.value >= 18) {
        divAgeInfo.innerText = 'дорослий';
    } else divAgeInfo.innerText = 'малий ще';
}
task3Id.append(inputAge, btnAge, divAgeInfo)


// - Создайте меню, которое раскрывается/сворачивается при клике
let divMenu = document.getElementById('menu');
let btnHide = document.getElementById('hide');

console.log(divMenu);

btnHide.onclick = function () {
    if (divMenu.style.display === ''){
        divMenu.style.display = 'none';
        btnHide.innerText = 'show';
    }else {
        divMenu.style.display = '';
        btnHide.innerText = 'hide';
    }
}

// - Создать список комментариев , 
//     пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arrComments = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
]

let divTask5 = document.getElementById('task5')

for (const key in arrComments) {
    let divComment = document.createElement('div');
    let divTitle = document.createElement('div');
    let divBody = document.createElement('div');
    let btnComm = document.createElement('button')

    btnComm.id = ``





    divComment.append(divTitle, divBody)
    divTask5.append(divComment)
}




