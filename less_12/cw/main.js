// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let divPosts = document.getElementById('posts');
let divPostInfo = document.getElementsByClassName('postInfo')[0];


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => {
        for (const post of posts) {
            let divPost = document.createElement('div');
            let btnPost = document.createElement('button');
            btnPost.className = `postBtn`;
            btnPost.innerText = `show post`;

            divPost.className = 'post';

            divPost.innerHTML = ` <h3>POST ID: ${post.id}</h3><p>${post.title}</p>`;

            btnPost.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/comments`)
                    .then(result => result.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (comment.postId === post.id){
                                divPostInfo.innerHTML +=
                                    `<div> 
                                           <p>postId: ${comment.postId}</p> 
                                           <p>id: ${comment.id}</p> 
                                           <p>name: ${comment.name}</p> 
                                           <p>email: ${comment.email}</p> 
                                           <p>body: ${comment.body}</p>
                                           <hr>
                                     </div>`
                            }

                        }
                    })
            }

            divPost.append(btnPost)
            divPosts.append(divPost);
        }
    });