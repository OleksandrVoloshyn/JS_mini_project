let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userDetailBlock = document.createElement('div');
userDetailBlock.classList.add('user-details')

let objValueArr = []
const getObjValues = (obj, arr) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            getObjValues(obj[key], arr)
        }
        if (typeof obj[key] !== 'object') {
            arr.push(`${key}: ${obj[key]}`)
        }
    }
}
getObjValues(user, objValueArr)

for (const item of objValueArr) {
    let line = document.createElement('div');
    line.innerText = item
    userDetailBlock.appendChild(line)
}

let postTitlesBlock = document.createElement('div')
postTitlesBlock.classList.add('post-titles')

let postBtn = document.createElement('button')
postBtn.innerText = 'post of current user'
postBtn.addEventListener('click', () => {
    postTitlesBlock.innerText = ''
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            posts.forEach(post => {
                let postTitleBlock = document.createElement('a');
                postTitleBlock.innerText = post.title
                postTitleBlock.href = `./post-details.html?data=${JSON.stringify(post)}`
                postTitlesBlock.appendChild(postTitleBlock)
            })
        })
})

userDetailBlock.appendChild(postBtn)
document.body.append(userDetailBlock, postTitlesBlock)