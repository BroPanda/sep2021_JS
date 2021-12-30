// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let favoriteUsersKey = 'favoriteUsersKey';
localStorage.setItem(favoriteUsersKey, JSON.stringify([]));
let divUsers = document.getElementById('users')


for (const user of users) {
    let divUser = document.createElement('div');
    let divUserInfo = document.createElement('div');
    let btnAddFavorite = document.createElement('button');

    divUserInfo.innerText = `${user.name} ${user.age} ${user.status} `;
    btnAddFavorite.innerText = 'hw to fav';

    divUser.append(divUserInfo, btnAddFavorite);
    divUsers.append(divUser);

    btnAddFavorite.onclick = () => {
        let res = JSON.parse(localStorage.getItem(favoriteUsersKey));
        res.push(user)
        localStorage.setItem(favoriteUsersKey, JSON.stringify(res));
        btnAddFavorite.disabled = true;
    }
}