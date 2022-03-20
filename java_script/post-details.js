// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let postBlock = document.createElement('div');
postBlock.innerText = `${post.userId} ${post.id} ${post.title} ${post.body}`

// todo нормально зробити коменти
let commentsBlock = document.createElement('div');
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        comments.forEach(comment => {
            let commentBlock = document.createElement('div');
            commentBlock.innerText = JSON.stringify(comment)
            commentsBlock.appendChild(commentBlock)
        })
    })

document.body.append(postBlock, commentsBlock)
