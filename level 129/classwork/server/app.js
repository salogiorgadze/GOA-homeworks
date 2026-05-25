const express = require('express');

const {getData, storeData} = require('../server/utils/file.util');

const app = express();

const FILE_URL = '/Users/salogiorgadze/EXPRESS/server/database/products.json';

// express() function creates http app(server)

app.get('/products', (req, res) => {
    const products = getData(FILE_URL);
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const {id} = req.params.id;

    const products = getData(FILE_URL);

    const product = products.find(p => p.id == id);

    if(!product){
        return res.status(404).json({
            status: 'fail',
            message: 'product not found'
        });
    };
    
    res.json(product);
})


app.delete('/products/:id', (req, res) => {
    const {id} = req.params.id;

    const products = getData(FILE_URL);

    const index = products.findIndex(p => p.id == id);

    if(index == -1){
        return res.status(404).json({
            status: 'fail',
            message: 'product not found'
        });
    }
    const result = products.filter(p => p.id != id);

    storeData(FILE_URL, result);

    res.json({
        status: 'success',
        message: 'product deleted successfully!'
    });
});

app.post('/products',express.json(), (req, res) => {
    const {name, price} = req.body;

    const products = getData(FILE_URL);

    const product = {
        name,
        price,
        id: Date.now()
    };

    products.push(product);
    storeData(FILE_URL, products);

    res.status(201).json({
        status: 'success',
        message: 'product added'
    });
});


// app.get('/products/:id', (req, res) => {
//     const id = req.params.id;

//     const product = products.find(p => p.id == id);

//     if(!product){
//         return res.status(404).json({
//             message: 'product not found!'
//         });
//     }
//     return res.json(product)
// });
// app.delete('/products/:id', (req, res) => {
//     const id = req.params.id;

//     const product = products.find(p => p.id == p);

//     if(!product){
//         return res.status(404).json({
//             message: 'product not found'
//         });
//     };
//     products = products.filter(p => p.id !=id);

//     res.json({
//         message: 'product deleted successfuly'
//     });
// })
app.listen(3000, () => {
    console.log('Server is running!');
});