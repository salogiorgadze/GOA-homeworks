const express = require('express');

const app = express();

const products = [
    {
        id: 1,
        name: 'Iphone',
        price: 1500
    },
    {   id: 2,
        name: 'macbook',
        price: 1700
    }
];

app.get('/products', (req, res) => {
    const {id} = req.query;

    if(!id){
        return res.status(400).json({
            message: 'bad request'
        });

    }
    const product = products.find(p => p.id == id);

        if(!product){
            return res.status(404).json({
                message: 'Product not found!'
            });
        }

    res.status(200).json(product);
});

app.get('/test', (req, res) => {
    res.send('Hello!');
});

app.listen(3000, () => {
    console.log('Server is running!');
});