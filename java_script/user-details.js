// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

// todo оптимізувати наступні 10 сток коду
let userDetailBlock = document.createElement('div');
let userMainInfo = document.createElement('div')
userMainInfo.innerText = `${user.id} - ${user.name} - ${user.username} - ${user.email}`
let userAddress = document.createElement('div')
userAddress.innerText = `${user.address.street} - ${user.address.suite} - ${user.address.city} - ${user.address.zipcode} - geo: ${user.address.geo.lat}, ${user.address.geo.lng}`
let userContacts = document.createElement('div')
userContacts.innerText = `phone: ${user.phone}, site:${user.website}`
let userCompany = document.createElement('div')
userCompany.innerText = `${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs} `

let postBtn = document.createElement('button')
postBtn.innerText = 'post of current user'
let postTitlesBlock = document.createElement('div')

postBtn.addEventListener('click', (e) => {
    e.preventDefault()
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

userDetailBlock.append(userMainInfo, userAddress, userContacts, userCompany, postBtn)
document.body.append(userDetailBlock, postTitlesBlock)