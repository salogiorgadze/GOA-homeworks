// const fetchData = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data =  response.json()
//         renderProducts(data)
//     } catch (err) {
//         console.log('Promise is rejected')
//     }
// }

// function renderProducts(products) {
//     const container = document.getElementById('products')

//     products.forEach(p => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//             <img src="${p.image}" width="300">
//             <h3>${p.title}</h3>
//             <p>${p.description}</p>
//             <p><strong><i>$${p.price}</i></strong></p>
//             <button>Buy</button>
//             <hr>
//         `
//         container.appendChild(div)
//     })
// }

// fetchData()

// async ქმნის ფუნქციას ასინქრონულს და აბრუნებს დაპირებას
// await კოდს აჩერებს სანამ promise არ შესრულდება

// try catch გამოვიყენებტ ერორების სამართავად,try ბლოკში ვწერთ იმ კოდს სადაც შეიძლება ერორი მოხდეს,catch ბლოკი იმუშავებს მხოლოდ მაშინ,თუ try ბლოკში მოხდა შეცდომა

console.log(process)