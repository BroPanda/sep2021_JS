let searchID = window.location.search;
let postId = searchID.replace(`?Post_Id=`, ``)

let postDetailsDiv = document.getElementsByClassName(`post-details`)[0];


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        postDetailsDiv.innerHTML =
            `<div>
                <div>id: ${post.id}</div>
                <div>title: ${post.title}</div>
                <div>body: ${post.body}</div>
            </div>`


        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                let commentsDiv = document.createElement(`div`);
                commentsDiv.innerHTML = `<h2>ALL COMMENTS</h2>`
                postDetailsDiv.append(commentsDiv)
                for (const comment of comments) {
                    let commentDiv = document.createElement(`div`);
                    commentDiv.innerHTML += `
                    <hr>
                    <div>id: ${comment.id}</div>
                    <div>name: ${comment.name}</div>
                    <div>email: ${comment.email}</div>
                    <div>body: ${comment.body}</div>
                    `

                    postDetailsDiv.append(commentDiv)
                }
            })
    });


