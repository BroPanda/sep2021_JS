// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// const divPosts = document.getElementById('posts');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(result => result.json())
//     .then(posts => {
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//
//             divPost.className = 'post';
//
//             divPost.innerHTML = ` <h3>POST ID: ${post.id}</h3>  <p>${post.title}</p><p>${post.body}</p> `;
//
//             divPosts.append(divPost);
//         }
//     });

//  2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// const divPosts = document.getElementById('posts');
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(result => result.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let divPost = document.createElement('div');
//
//             divPost.className = 'post';
//
//             divPost.innerHTML = ` <h3>POST ID: ${comment.id}</h3><p>${comment.name}</p><p>${comment.email}</p><p>${comment.body}</p> `;
//
//             divPosts.append(divPost);
//         }
//     });