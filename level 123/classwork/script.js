const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})

    const response = {
        message: 'Hello Salka'
    }
    res.end(JSON.stringify(response))
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})