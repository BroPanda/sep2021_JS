// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 22;

if (typeof time === typeof 0) {
    if (time >= 0 && time <= 14) {
        console.log('first part');
    } else if (time >= 15 && time <= 29) {
        console.log('second part');
    } else if (time >= 30 && time <= 44) {
        console.log('third part');
    } else if (time >= 45 && time <= 59) {
        console.log('fourth part');
    } else {
        console.log('wrong number');
    }
} else {
    console.log('error')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random() * 31) + 1;

if (day >= 1 && time <= 9) {
    console.log('first ');
} else if (time >= 10 && time <= 19) {
    console.log('second part');
} else {
    console.log('third part');
}


// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = false;

if (!test) {
    console.log('Вірно')
} else {
    console.log('Неправильно');
}

!test ? console.log('Вірно') : console.log('Неправильно');


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let a = 0;

a ? console.log('Вірно') : console.log('Невірно')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let n = 1

switch (n) {
    case 1:
        console.log("Понеділок банька");
        break;
    case 2:
        console.log("Вівторок басей");
        break;
    case 3:
        console.log("Середа пляж");
        break;
    case 4:
        console.log("Четвер спортзал");
        break;
    case 5:
        console.log("Пятниця пікнік");
        break;
    case 6:
        console.log("Суббота карпати");
        break;
    case 7:
        console.log("Неділя - щось придумаєм");
        break;

    default:
        console.log("wrong number");
}


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = 2001;

year % 4 && year % 100 && year % 400 ? console.log("рік не високосний") : console.log("рік високосний")


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let q = prompt('Яка «офіційна» назва JavaScript?')

if (q.toLowerCase() == 'ecmascript'){
    console.log("Правильно");
} else {
    console.log("Не знаєте? ECMAScript!");
}