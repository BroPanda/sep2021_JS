// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let users = JSON.parse(localStorage.getItem(`users`));
let userNum = JSON.parse(localStorage.getItem(`user`));
userNum -= 1;
let user = users[userNum];
let userDiv = document.getElementsByClassName(`user`)[0];
let postsBtn = document.getElementsByClassName(`postsBtn`)[0];
let postsDiv = document.getElementsByClassName(`posts`)[0];

userDiv.innerHTML = `
    <div class="divBlock">
        <h1>USER INFO</h1>
        <div>id: ${user.id}</div>
        <div>name: ${user.name}</div>
        <div>username: ${user.username}</div>
        <div>phone: ${user.phone}</div>
        <div>email: ${user.email}</div>
        <div>website: ${user.website}</div>
        <div>city: ${user.address.city}</div>
        <div>street: ${user.address.street}</div>
        <div>suit: ${user.address.suite}</div>
        <div>lat: ${user.address.geo.lat}</div>
        <div>lng: ${user.address.geo.lng}</div>
        <div>zip code: ${user.address.zipcode}</div>
        <div>company name: ${user.company.name}</div>
        <div>bs: ${user.company.bs}</div>
        <div>catch phrase: ${user.company.catchPhrase}</div>        
    </div>
`

postsBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let postDiv = document.createElement('div');
                let postButton = document.createElement('button');

                postDiv.innerHTML = `
                <div>${post.title}</div>`
                postButton.innerText = `go to post`
                postButton.onclick = () => {
                    location.href = `post-details.html?Post_Id=${post.id}`
                    console.log(`button id ${post.id}`)
                }
                postsDiv.append(postDiv, postButton)
            }
        })
}

