const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    renderUsers(data.users)
}

function renderUsers(users) {
    const container = document.getElementById('users')

    users.forEach(u => {
        const div = document.createElement('div')
        div.innerHTML = `
            <img src='${u.image}'>
        `
        container.appendChild(div)
    })
}
fetchData()



// Module Node.js-ში არის კოდის ნაწილი (ფაილი), რომელიც ასრულებს კონკრეტულ ფუნქციას.
// მოდულების გამოყენება გვაძლევს საშუალებას:
// კოდი იყოს დალაგებული
// ერთი და იგივე კოდი რამდენჯერმე გამოვიყენოთ
// არ ავურიოთ ყველაფერი ერთ ფაილში





/*
npm (Node Package Manager) არის ხელსაწყო, რომელიც გამოიყენება:

1) გარე ბიბლიოთეკების (packages) ჩამოსატვირთად
   მაგ: npm install express

2) პროექტის დამოკიდებულებების (dependencies) სამართავად

3) სკრიპტების გასაშვებად
   მაგ: npm run start

4) საკუთარი package-ების შექმნისა და გაზიარებისთვის

npm ავტომატურად ქმნის package.json ფაილს,
რომელშიც ინახება პროექტის კონფიგურაცია
*/
