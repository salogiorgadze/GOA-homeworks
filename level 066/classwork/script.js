// async keywordს ვიყენებთ იმისთვის, რომ ფუნქცია გახდეს ასინქრონული და აბრუნებს promiseს
// await keywordი აჩერებს კოდს სანამ promise შედეგს არ დააბრუნებს

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    renderProducts(data)
}

function renderProducts(products) {
    const container = document.getElementById('products')

    products.forEach(p => {
        const div = document.createElement('div')
        div.innerHTML = `
            <img src="${p.image}" width="300">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <p><strong><i>$${p.price}</i></strong></p>
            <button>Buy</button>
            <hr>
        `
        container.appendChild(div)
    })
}

fetchProducts()


// try / catch გამოიყენება შეცდომების სამართავად (error handling)

// try ბლოკში ვწერთ იმ კოდს,რომლის შესრულების დროს არსებობს შეცდომის შანსი
// JavaScript ჯერ ყოველთვის try ბლოკს ასრულებს თუ ამ ბლოკში კოდი წარმატებით შესრულდა,catch საერთოდ არ იმუშავებს
// catch ბლოკი იმუშავებს მხოლოდ მაშინ,თუ try ბლოკში მოხდა შეცდომა


const promise1 = new Promise((resolve) => {
    resolve('Hello from promise 1')
})

const promise2 = new Promise((resolve) => {
    resolve('Hello from promise 2')
})

const promise3 = new Promise((resolve) => {
    resolve('Hello from promise 3')
})
Promise.all([promise1,promise2,promise3])
    .then((value) => {
        console.log(value[0])
        console.log(value[1])
        console.log(value[2])
    })
    


// Promise.all იღებს Promiseების მასივს და ელოდება ყველა მათგანის შესრულებას ერთად












// const getProducts = async () => {
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     console.log(data)
// }
// getProducts()

