// 1) დააიმპორტეთ event module - ი, შემდგომ შექმენით მოვლენა "user" რომელსაც callback ფუნქციაში გადაეცემა name არგუმენტი და მას გამოჰყავს კონსოლში "Hello {name}, how are you?".

const events = require('events')
const myEmmiter = new events.EventEmitter()

myEmmiter.on('user', (name) => {
    console.log(`Hello ${name}`)
})
myEmmiter.emit('user', 'salka')


// 2) გამოიყენეთ process.stdin იმისთვის, რომ შეგეძლოთ ინფორმაციის შეყვანა ტერმინალში, შემდგომ შეამოწმეთ: თუ მომხმარებელი შეიყვანს ლუწ რიცხვს გამოუტანეთ ტერმინალში "{number} is even", თუ კენტ რიცხვს: "{number} is odd", ყველა სხვა შემთხვევაში: "Input not number.".
process.stdin.on('data', (data) => {
    const num = Number(data.toString().trim());
    if (num % 2 == 0){
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
})
// 3) შექმენით ფუნქცია: "customError" რომელსაც გადაეცემა err და 2 რიცხვი, შემდგომ შეამოწმეთ: თუ ერორი გვაქვს მაშინ გამოიტანეთ ეს ერორი კონსოლში, თუ არა და ამ ორი რიცხვის ნამრავლი.
const customError = (err, a, b) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('success', a * b)
    }
}
customError(null, 5, 17)