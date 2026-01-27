// შექმენით 4 Promise, აქედან 3 Promise რომლებიც 5 წამის შემდეგ გამოიძახებენ resolve ფუნქციას success - message - ით, ერთი რომელიც 
// გამოიძახებს reject ფუნქციას 3 წამში, Promise.all მეთოდის გამოყენებით ერთდროულად მართეთ მოცემული Promise - ები

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('success 1')
//     },5000)
// })
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('success 2')
//     },5000)
// })
// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('success 3')
//     },5000)
// })
// const promise4 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject('rej 4')
//     },3000)
// })


// Promise.all([promise1,promise2,promise3,promise4])
//     .then((result)=> console.log(result))
//     .catch((error)=> console.log(error))

//შექმენით პროექტი, გააგზავნეთ მოთხოვნა https://dummyjson.com/users მოცემულ მისამართზე, გამოიტანეთ მომხმარებლის ინფორმაცია 
// როგორიცაა, firstname, username, role, image, უნდა გქონდეთ ღილაკი სახელად filter/show admins რომელზე დაჭერისას საიტზე გამოჩნდება
//  მხოლოდ ისეთი მომხმარებელი რომლის role - იც უდრის admin - ს, კოდი გაიაზრეთ (სურვილისამებრ ახსენით კომენტარების სახით), გამოიყენეთ
//  დღევანდელ გაკვეთილზე ახსნილი async/await

let allUsers = []

async function fetchUsers() {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()

    allUsers = data.users
    renderUsers(allUsers)
}

function renderUsers(users) {
    const container = document.getElementById('users')
    container.innerHTML = ''

    users.forEach(user => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h2><i>Name is:</i> ${user.firstName} ${user.lastName}</h2>
            <img src="${user.image}" width="100"><br>
            <h3>${user.role}</h3>
            <h3>${user.birthDate}</h3>
            <p><b>Email:</b> ${user.email}</p>
            <p>${user.phone}</p>
            <hr>
        `
        container.appendChild(div)
    })
}
const btn = document.getElementById('admin')
btn.addEventListener('click', () => {
    const admins = allUsers.filter(user => user.role === 'admin')
    renderUsers(admins)
})

fetchUsers()