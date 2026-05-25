const express = require('express');

const products = [
    {
        name: 'macbook',
        price: 1300,
        id: 1
    },
    {
        name: 'iphone',
        price: 1300,
        id: 2
    },
    {
        name: 'ipad',
        price: 1700,
        id: 3
    },
    {
        name: 'iphone 15',
        price: 1600,
        id: 4
    }, 
    {
        name: 'iphone 17',
        price: 1900,
        id: 5
    }
]

// express() function creates http app(server)
const app = express();

app.get('/test', (req, res) => {
    res.json(products);
});
app.get('/products/:id', (req, res) => {
    const id = req.params.id;

    const product = products.find(p => p.id == id);

    if(!product){
        return res.status(404).json({
            message: 'product not found!'
        });
    }
    return res.json(product)
});
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;

    const product = products.find(p => p.id == p);

    if(!product){
        return res.status(404).json({
            message: 'product not found'
        });
    };
    products = products.filter(p => p.id !=id);

    res.json({
        message: 'product deleted successfuly'
    });
    return;
})
app.listen(3000, () => {
    console.log('Server is running!');
});
