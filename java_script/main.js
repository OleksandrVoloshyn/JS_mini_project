let usersBlock = document.createElement('div');
usersBlock.classList.add('users')
document.body.appendChild(usersBlock)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        users.forEach(user => {
            let userBlock = document.createElement('a');
            userBlock.classList.add('user')
            userBlock.innerText = `${user.id} - ${user.name}`
            userBlock.href = `./user-details.html?data=${JSON.stringify(user)}`
            usersBlock.appendChild(userBlock)
        })
    })