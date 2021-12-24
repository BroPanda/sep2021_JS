// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста




const divUsers = document.getElementById('users');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(users => {
        for (const user of users) {
            let divPosts = document.createElement('div');
            let divButtons = document.createElement('div');
            let btnPost = document.createElement('button');

            btnPost.className = `postBtn`
            divButtons.className = `btn_block`
            btnPost.innerText = `show post`


            divPosts.className = 'post';

            divPosts.innerHTML = ` <h3>POST ID: ${user.id}</h3><p>${user.name}</p>`;

            btnPost.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(result => result.json())
                    .then(posts => {
                        console.log(posts);
                        for (const post of posts) {
                            let divPost = document.createElement('div');
                            divPost.innerHTML =
                                `<p>postID: ${post.id}</p> <p>postID: ${post.title}</p> <p>postID: ${post.body}</p>`
                            divPosts.append(divPost)
                        }

                    })
            }


            divButtons.append(btnPost)
            divPosts.append(divButtons)
            divUsers.append(divPosts);
        }
    });