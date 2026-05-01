console.log('Hello World')

let names = ['sally','tako','anuki','veko']
console.table(names)

console.assert(0)



// process არის გლობალური ობიექტი რომელიც აღწერს იმ პროცესს სადაც ჩვენი node.js მუშაობს
console.log(process)
console.log(process.argv[2] + ' ' + process.argv[3])

// არის ობიექტი
console.log(process.env.PWD)



for (let i = 0; i < 7; i++){
    console.log('Hello');
};
console.log(process.memoryUsage())

const os = require('os')
// ოპერაციული სისტემის ტიპს
console.log('operationg system',os.type())
// გვიჩვენებს პროცესორის არქიტექტურას
console.log('CPU arch',os.arch())
// აბრუნებს ყველა ქსელურ ინტერფეისს (ინტერნეტ კავშირები)
console.log('Network',os.networkInterfaces())
// გვაძლევს მომხმარებლის home დირექტორიას
console.log('Homedir',os.homedir())
// კომპიუტერის სახელი (network name)
console.log('Hostname',os.hostname())
// გიჩვენებს რამდენი წამია სისტემა ჩართული
console.log('uptime',os.uptime())