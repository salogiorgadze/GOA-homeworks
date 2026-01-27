function renderProducts(products){
    const container = document.getElementById('products')
    products.forEach(p => {
        const div = document.createElement('div')
        div.innerHTML = `
            <img src='${p.image}' width='300'>
            <h3>${p.title}</h3>
                       <p>${p.description}</p>
                       <p><strong><i>$${p.price}</i></strong></p>
                       <button>Buy</button>
                       <hr>`
        container.appendChild(div)
    });
}

fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => renderProducts(data))
    .catch((reason) => console.log(reason))