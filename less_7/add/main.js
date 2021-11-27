//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


class Worker {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, compName, catchPhrasem, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {lat: lat, lng: lng}
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name: compName,
            catchPhrasem: catchPhrasem,
            bs: bs
        }
    }
}

let worker1 = new Worker(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(worker1)


// - Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//      -назву атрибуту
//      -опис дії атрибуту

// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//                  {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//                  {/*some props and values*/},
//                  {/*...*/},
//                  {/*...*/},
// ]
//
// }


class tagDescription {

    constructor(name, action, attrs) {
        this.name = name;
        this.action = action;
        this.attrs = attrs
    }
}


let arrayTags = [
    new tagDescription(
        '<a>',
        'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости ' +
        'от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка ' +
        'внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает ' +
        'на якорь, происходит переход к закладке внутри веб-страницы.',
        [
            {
                titleOfAttr: 'href',
                actionOfAttr: 'Задает адрес документа, на который следует перейти'

            },
            {
                titleOfAttr: 'name',
                actionOfAttr: 'Устанавливает имя якоря внутри документа'

            },
            {
                titleOfAttr: 'title',
                actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'

            }
        ]
    ),
    new tagDescription(
        '<div>',
        'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью ' +
        'изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый ' +
        'раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class ' +
        'или id с именем селектора.',
        [
            {
                titleOfAttr: 'align',
                actionOfAttr: 'Задает выравнивание содержимого тега <div>.'

            },
            {
                titleOfAttr: 'title',
                actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'

            }
        ]
    ),
    new tagDescription(
        '<h1>',
        'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, ' +
        'расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, ' +
        'а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию,' +
        ' заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего ' +
        'уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с ' +
        'новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком ' +
        'и после него добавляется пустое пространство.',
        [
            {
                titleOfAttr: 'align',
                actionOfAttr: 'Задает выравнивание содержимого тега <div>.'

            }, {
                titleOfAttr: 'class',
                actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'

            },
        ]
    )
]

