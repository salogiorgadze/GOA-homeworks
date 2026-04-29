let div = document.getElementById('products')
let div2 = document.getElementById('cart')

let cart = JSON.parse(localStorage.getItem('cart')) || []

const addItemToCart = (element) => {
    cart.push(element)

    localStorage.setItem('cart', JSON.stringify(cart))

    renderCart()
}

const renderCart = () => {
    div2.innerHTML = ""

    cart.forEach((cartItem) => {
        const cartProductDiv = document.createElement('div')

        cartProductDiv.innerHTML = `
            <p>Product name: ${cartItem.title}</p>
            <p>Product price: ${cartItem.price}$</p>
            <p>Product description: ${cartItem.description}</p>
            <img src='${cartItem.image}' style="width:120px;height:120px" />
        `

        div2.appendChild(cartProductDiv)
    })
}

const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        data.forEach(element => {
            const productDiv = document.createElement('div')

            productDiv.innerHTML = `
                <p>product name: ${element.title}</p>
                <p>product price: ${element.price}</p>
            `

            const btn = document.createElement('button')
            btn.textContent = 'add item to cart'

            btn.addEventListener('click', () => {
                addItemToCart(element)
            })

            productDiv.appendChild(btn)
            div.appendChild(productDiv)
        })

    } catch (err) {
        console.log(`error ${err}`)
    }
}

fetchData()
renderCart()