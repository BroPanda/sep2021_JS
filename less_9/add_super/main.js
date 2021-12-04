let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
},
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let usersAddress = [];
// for (const user of users) {
//     usersAddress.push(user.address);
// }
// console.log(usersAddress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerHTML = `<h1> name: ${user.name}</h1> <h2>age ${user.age} ${user.status}</h2> <br>`;
//     for (const key in user.address) {
//         div.innerHTML += `${key} - ${user.address[key]} <br>`;
//     }
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let nameDiv = document.createElement('div');
//     let ageDiv = document.createElement('div');
//     let statusDiv = document.createElement('div');
//     let addressDiv = document.createElement('div');
//     nameDiv.innerHTML = user.name;
//     ageDiv.innerHTML = user.age;
//     statusDiv.innerHTML = user.status;
//     for (const key in user.address) {
//         addressDiv.innerHTML += `${key} - ${user.address[key]} <br>`;
//     }
//     document.body.append(nameDiv, ageDiv, statusDiv, addressDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let userDiv = document.createElement('div');
// for (const user of users) {
//     let nameDiv = document.createElement('div');
//     let ageDiv = document.createElement('div');
//     let statusDiv = document.createElement('div');
//     let addressDiv = document.createElement('div');
//     nameDiv.innerHTML = user.name;
//     ageDiv.innerHTML = user.age;
//     statusDiv.innerHTML = user.status;
//     for (const key in user.address) {
//         let block = document.createElement('div');
//         block.innerHTML += `${key} - ${user.address[key]} <br>`;
//         addressDiv.append(block);
//     }
//     userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
// }
// document.body.appendChild(userDiv);


//___________________________________________________________________
//___________________________________________________________________
//___________________________________________________________________


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

// -Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let wrapDiv = document.getElementById('wrap')

for (const rule of rules) {
    let mainDiv = document.createElement('div');
    let titleDiv = document.createElement('h2');
    let bodyDiv = document.createElement('p');
    mainDiv.append(titleDiv, bodyDiv)

    titleDiv.innerText = rule.title;
    bodyDiv.innerText = rule.body;

    wrapDiv.appendChild(mainDiv)
}

//___________________________________________________________________

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
//     яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let divContent = document.getElementById('content');
let rulesCollection = document.getElementsByTagName('h2');
let ul = document.createElement('ul');
divContent.appendChild(ul);

for (const el of rulesCollection) {
    ul.innerHTML += `<li>${el.innerHTML}</li>`;
}

