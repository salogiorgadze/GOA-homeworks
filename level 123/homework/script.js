const http = require('http');

const users = [
    { id: 1, name: "John Doe", active: true },
    { id: 2, name: "Emma Smith", active: false },
    { id: 3, name: "Michael Johnson", active: true },
    { id: 4, name: "Sophia Brown", active: true },
    { id: 5, name: "Daniel Wilson", active: false },
    { id: 6, name: "Olivia Davis", active: true },
    { id: 7, name: "James Miller", active: false },
    { id: 8, name: "Ava Taylor", active: true },
    { id: 9, name: "William Anderson", active: true },
    { id: 10, name: "Isabella Thomas", active: false },
    { id: 11, name: "Benjamin Moore", active: true },
    { id: 12, name: "Mia Jackson", active: true },
    { id: 13, name: "Lucas Martin", active: false },
    { id: 14, name: "Charlotte Lee", active: true },
    { id: 15, name: "Henry Perez", active: false },
    { id: 16, name: "Amelia White", active: true },
    { id: 17, name: "Alexander Harris", active: true },
    { id: 18, name: "Evelyn Clark", active: false },
    { id: 19, name: "Jack Lewis", active: true },
    { id: 20, name: "Harper Walker", active: false }
];


const server = http.createServer((req, res) => {
    const pathname = req.url.slice(1, 6);

    console.log(pathname)

    res.end(JSON.stringify(users))
})
server.listen(3000, () => {
    console.log('server is running in port 3000')
})