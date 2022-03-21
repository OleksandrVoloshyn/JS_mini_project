let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let postBlock = document.createElement('div');
postBlock.classList.add('post-details')

for (const key in post) {
    let postLine = document.createElement('div');
    postLine.innerText = `${key}: ${post[key]}`
    postBlock.appendChild(postLine)
}

let commentsBlock = document.createElement('div');
commentsBlock.classList.add('post-comments')

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        comments.forEach(comment => {
            let commentBlock = document.createElement('div');
            commentsBlock.appendChild(commentBlock)
            for (const commentKey in comment) {
                let commentLine = document.createElement('div');
                commentLine.innerText = `${commentKey}: ${comment[commentKey]}`
                commentBlock.appendChild(commentLine)
            }
        })
    })

document.body.append(postBlock, commentsBlock)