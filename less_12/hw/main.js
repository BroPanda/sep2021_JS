// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts



//  2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки все


const divPosts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement('div');
            let divComment = document.createElement('div');

            divPost.className = 'post';
            divComment.className = 'divComment';

            divPost.innerHTML = ` <h3>POST ID: ${post.id}</h3> `;
            divComment.innerHTML = ` <p>${post.title}</p><p>${post.body}</p> `;

            divPost.append(divComment)
            divPosts.append(divPost);
        }
    });