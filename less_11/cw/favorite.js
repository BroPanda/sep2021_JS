let divFavUsers = document.getElementById('favUsers');
let favoriteUsersKey = 'favoriteUsersKey';
let users = JSON.parse(localStorage.getItem(favoriteUsersKey));

console.log(users);

for (const user of users) {
    let divUserInfo = document.createElement('div');

    divUserInfo.innerText = `${user.name} ${user.age} ${user.status} `;

    divFavUsers.append(divUserInfo)


}
