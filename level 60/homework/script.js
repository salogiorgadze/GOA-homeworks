const form = document.getElementById('formElement'); // მოვიპოვეთ წვდომა form ზე
const tbody = document.getElementById('tbody'); // მოვიპოვეთ წვდომა tbody ზე

const products = JSON.parse(localStorage.getItem('products')) || [];

const addItem = (product) => {
    const exists = products.find((obj) => obj.name === product.name);

    if(exists){
        alert('The product name already exists!');
        return;
    };

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));
};

const deleteItem = (id) => {
    const productIndex = products.findIndex((product) => product.id === id);

    if(productIndex === -1){
        alert('Product does not exist with the given id');
        return;
    };

    products.splice(productIndex, 1);    
    localStorage.setItem('products', JSON.stringify(products));
    
    renderProductInTable();
};

const renderProductInTable = () => {
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td><button onclick="deleteItem(${product.id})">Delete</button></td>
        `;

        tbody.appendChild(tr);
    });
};

form.addEventListener('submit', (e) => {    
    e.preventDefault();

    const productName = e.target.productName.value;

    const product = {
        name: productName,
        id: Date.now()
    };
    
    addItem(product);
    renderProductInTable();

    e.target.reset();
});

renderProductInTable();