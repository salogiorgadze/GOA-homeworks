const fs = require('fs');

// const fileStream = fs.WriteStream('text.txt');

// console.log('enter any text: ');

// process.stdin.on('data', (data) => {
//     const input = data.toString().trim()

//     if (input === '0') {
//         process.exit()
//     }


//     fileStream.write(input + '\n')
// });

// console.log('1 - add product, 2 - clear products, 3 - exit program');

// const fileStream = fs.WriteStream('text.txt');

// process.stdin.on('data', (data) => {
//     const input = data.toString().trim()

//     if (input === '1'){
//         console.log('enter product: ');
//     } else if (input === '2'){
//         fs.writeFileSync('text.txt', '')
//         console.log('clear')
//     } else if (input === "3") {
//         console.log('program is over')
//         process.exit();
//     } else {
//         fileStream.write(input + '\n')
//     }
// });
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const FILE_URL = 'data.json';


if (!fs.existsSync(FILE_URL)) {
    fs.writeFileSync(FILE_URL, '[]');
}

function getProducts() {
    const data = fs.readFileSync(FILE_URL);
    return JSON.parse(data);
}

function saveProducts(products) {
    fs.writeFileSync(FILE_URL, JSON.stringify(products));
}

function addProduct() {
    const products = getProducts();

    rl.question('Name: ', (name) => {

        rl.question('Price: ', (price) => {

            const product = {
                id: Date.now(),
                name,
                price: Number(price)
            };

            products.push(product);

            saveProducts(products);

            console.log('Product added!');

            showMenu();
        });
    });
}

function deleteAllProducts() {
    fs.writeFileSync(FILE_URL, '[]');

    console.log('All products deleted!');

    showMenu();
}

function showProducts() {
    const products = getProducts();

    if (products.length === 0) {
        console.log('No products found');
    }

    products.forEach((element, index) => {
        console.log(
            `${index + 1}. Name: ${element.name}, Price: ${element.price}, ID: ${element.id}`
        );
    });

    return products;
}

function deleteProduct() {
    const products = showProducts();

    rl.question('Choose product to delete: ', (choice) => {

        const result = products.filter((_, index) => {
            return index + 1 != choice;
        });

        saveProducts(result);

        console.log('Product deleted!');

        showMenu();
    });
}

function showMenu() {

    console.log(`
1. Add product
2. Delete product
3. Clear all products
4. Exit
`);

    rl.question('Option: ', (choice) => {

        switch (choice) {

            case '1':
                addProduct();
                break;

            case '2':
                deleteProduct();
                break;

            case '3':
                deleteAllProducts();
                break;

            case '4':
                console.log('Bye admin!');
                rl.close();
                process.exit();
                break;

            default:
                console.log('Invalid choice');
                showMenu();
        }
    });
}

showMenu();