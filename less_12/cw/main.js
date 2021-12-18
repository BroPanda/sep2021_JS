// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


// const divPosts = document.getElementById('posts');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(result => result.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let divPost = document.createElement('div');
//             let btnPost = document.createElement('button');
//             btnPost.className = `postBtn`
//             btnPost.innerText = `show post`
//
//             divPost.className = 'post';
//
//             divPost.innerHTML = ` <h3>POST ID: ${comment.id}</h3><p>${comment.title}</p>`;
//
//             btnPost.onclick = () => {
//                 divPost.innerHTML += `<p>${comment.body}</p>`
//             }
//
//             divPost.append(btnPost)
//             divPosts.append(divPost);
//         }
//     });