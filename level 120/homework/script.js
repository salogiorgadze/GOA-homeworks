const fs = require('fs');

fs.readFile('students.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log(data)
    }
})

fs.promises.readFile('students.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err))

try {
    const data = fs.readFileSync('students.txt', 'utf-8');
    console.log(data)
} catch (err) {
    console.error(err)
}

const readline = require('readline');

const myInterface = readline.createInterface({
    input: fs.createReadStream('courses.txt')
});
myInterface.on('line', (fileline) => {
    console.log(fileline);
});
myInterface.emit('line', 'courses.txt');

const fileStream = fs.WriteStream('students.txt');

fileStream.write('sally\n')
fileStream.write('lina\n')
fileStream.write('mariami\n')
fileStream.write('nini\n')
fileStream.write('tako\n')
fileStream.write('veko\n')
fileStream.write('lana\n')
fileStream.write('dato\n')
fileStream.write('luka\n')
fileStream.write('saba\n')
fileStream.write('sandro\n')


let interval = setInterval(() => {
    console.log('sally')
}, 2000);
setTimeout(() => {
    clearInterval(interval)
}, 20000);
