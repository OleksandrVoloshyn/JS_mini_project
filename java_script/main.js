// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
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

// todo стилізація проекту
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
