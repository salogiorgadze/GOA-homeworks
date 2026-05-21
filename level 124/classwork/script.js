const http = require("http");

let products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 2, name: "Headphones", price: 49.99, category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 89.99, category: "Footwear" },
    { id: 4, name: "Coffee Maker", price: 59.99, category: "Kitchen" },
    { id: 5, name: "Backpack", price: 39.99, category: "Accessories" },
    { id: 6, name: "Sunglasses", price: 29.99, category: "Accessories" },
    { id: 7, name: "Yoga Mat", price: 24.99, category: "Sports" },
    { id: 8, name: "Water Bottle", price: 14.99, category: "Sports" },
    { id: 9, name: "Desk Lamp", price: 34.99, category: "Home" },
    { id: 10, name: "Notebook", price: 9.99, category: "Stationery" },
];

const server = http.createServer((req, res) => {

    const url = new URL(req.url, "http://localhost:3000");

    const pathName = url.pathname.slice(1);
    const id = Number(url.searchParams.get('id'));

    res.writeHead(200, {"Content-Type": "application/json"})

    if (req.method === "GET" && pathName === "products" && !id) {

        res.end(JSON.stringify(products));
    } else if (req.method === "GET" && pathName === "products" && id) {

        const product = products.find(p => p.id === id);

        res.end(JSON.stringify(product));
    } else if (req.method === "DELETE" && pathName === "products" && id) {

        const product = products.find(p => p.id === id);

        products = products.filter(p => p.id !== id);

        res.end(JSON.stringify(product));
    } else if (req.method === "GET" && pathName === "health") {

        res.end(JSON.stringify({
            status: "success",
            message: "Server is running"
        }))
    }

    else {
        res.writeHead(404)

        res.end(JSON.stringify({
            message: "Route not found"
        }))
    }
})

// listen - მოსმენას
// 3000 - PORT (ოთახის ნომერი)
server.listen(3000);

// მაღაზია ღიია და იღებს მომხმარებლებს
// მაღაზია დაკეტილია და მომხმარებლეს არ რებს