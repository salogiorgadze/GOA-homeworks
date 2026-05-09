const events = require('events')

const myEmmiter = new events.EventEmitter()

// process.stdout.write('giorgadze')

process.stdin.on('data', (data) => {
    const str = data.toString().trim();
    // console.log('inputed data', str);

    if (str == '0'){
        process.exit()
    }
})

// 2) დააიმპორტეთ event module - ი, შემდგომ შექმენით მოვლენა "user" რომელსაც callback ფუნქციაში გადაეცემა name არგუმენტი და მას გამოჰყავს კონსოლში "Hello {name}, how are you?".

myEmmiter.on('user', (name) => {
    console.log(`Hello ${name} how are you?`)
})
myEmmiter.emit('user', 'ska')
// 3) გამოიყენეთ process.stdin იმისთვის, რომ შეგეძლოთ ინფორმაციის შეყვანა ტერმინალში, შემდგომ შეამოწმეთ: თუ მომხმარებელი შეიყვანს ლუწ რიცხვს გამოუტანეთ ტერმინალში "{number} is even", თუ კენტ რიცხვს: "{number} is odd", ყველა სხვა შემთხვევაში: "Input not number.".

process.stdin.on('data', (data) => {
    const num = Number(data.toString().trim());
    if (num % 2 == 0){
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
})
// 4) შექმენით ფუნქცია: "customError" რომელსაც გადაეცემა err და 2 რიცხვი, შემდგომ შეამოწმეთ: თუ ერორი გვაქვს მაშინ გამოიტანეთ ეს ერორი კონსოლში, თუ არა და ამ ორი რიცხვის ნამრავლი.

const customError = (err, a, b) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('success', a * b)
    }
}
customError(null, 5, 17)
// 5) შექმენით Buffer string - იდან "Hello World!", შემდგომ გადააკეთეთ hex ფორმატში და საბოლოოდ დააბრუნეთ ისევ ჩვეულებრივ ტექსტად.
// buffer არის კლასი რომელიც გამოიყენება binary მონაცემების დასამუშავებლად, ისეთი მონაცემებისთვის, რომლებიც სუფთა ტექსტი არ არის 

const {Buffer} = require('buffer')

const greet = Buffer.from('Hello World!');

console.log(greet)

console.log(greet.toString('hex'))

// 6) შექმენით text.txt ფაილი, შემდგომ fs მოდულის დახმარებით წაიკითხეთ ეს ფაილი script.js - იდან და გამოიტანეთ კონსოლში.

// fs მოდულის დახმარებით კომპიუტერში ვქმნით ფაილებს,ვკითხულობთ,ვანახლებთ და ვშლით
const fs = require('fs')

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error', err)
    } 
    console.log('file: ');
    console.log(data)
})

// 7) დაწერეთ პროგრამა რომელიც: მისცემს მომხმარებელს რაიმეს შემოყვანის უფლებას ტერმინალში და შემგომ შეამოწმებს:
// თუ მომხმარებლის input - ი იქნება "add {text}", ამ ტექტს ჩაამატებს text.txt - ის ფაილში, თუ მომხმარებელი შეიქყვანს "list" კონსოლში გამოუტანს ყველაფერს რაც კი იყო ჩაწერილი text.txt ფაილში, თუ დაწერს "exit" პროგრამა დაასრულებს მუშაობას.