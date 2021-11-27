// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id, this.name = name, this.surname = surname, this.email = email, this.phone = phone
}

const usersArray = [
    new User(1, 'Vasya', 'Vasya', 'Vasya@gmail.com', 30930000001),
    new User(7, 'Kokos', 'Kokos', 'Kokos@gmail.com', 30930000002),
    new User(3, 'Abricos', 'Abricos', 'Abricos@gmail.com', 30930000003),
    new User(5, 'Olya', 'Olya', 'Olya@gmail.com', 30930000004),
    new User(4, 'Petya', 'Petya', 'Petya@gmail.com', 30930000005),
    new User(6, 'Nastya', 'Nastya', 'Nastya@gmail.com', 30930000006),
    new User(2, 'Azaza', 'Azaza', 'Azaza@gmail.com', 30930000007)
];
console.log(usersArray);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsersArray = usersArray.filter(value => {
    if (!(value.id % 2)) {
        return value
    }
})

console.log(filterUsersArray)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsersArray = usersArray.sort((a, b) => a.id - b.id)
console.log(sortUsersArray)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client

let clientsArray = [
    new Client(1, 'Vasya', 'Vasya', 'Vasya@gmail.com', 30930000001, [1, 2, 3]),
    new Client(7, 'Kokos', 'Kokos', 'Kokos@gmail.com', 30930000002, [1]),
    new Client(3, 'Abricos', 'Abricos', 'Abricos@gmail.com', 30930000003, [1, 2]),
    new Client(5, 'Olya', 'Olya', 'Olya@gmail.com', 30930000004, [1, 2, 3, 4]),
    new Client(4, 'Petya', 'Petya', 'Petya@gmail.com', 30930000005, [1, 2]),
    new Client(6, 'Nastya', 'Nastya', 'Nastya@gmail.com', 30930000006, [1]),
    new Client(2, 'Azaza', 'Azaza', 'Azaza@gmail.com', 30930000007, [1, 2, 3])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clientsArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);