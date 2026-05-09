const fs = require('fs')

fs.readFile('text.txt','utf-8',(err, data) => {
    if (err) {
        console.log(`error ${err}`)
    } else {
        console.log(data)
    }
})

const readline = require('readline');
const myInterface = readline.createInterface({
    input: fs.createReadStream('text.txt')
})
myInterface.on('line', (filename) => {
    console.log(filename)
})

const fileStream = fs.WriteStream('text.txt')

fileStream.write('salka\n')
fileStream.write('lina\n')
fileStream.write('mariami\n')
fileStream.write('tamri\n')
fileStream.write('liza\n')


const interval = setInterval(() => {
    console.log('Hello World')
}, 2000);

setTimeout(() => {
    clearInterval(interval)
}, 10000);