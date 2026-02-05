// Default export ფაილიდან შეიძლება იყოს მხოლოდ ერთი default export, import-ის დროს შეგვიძლია ნებისმიერი სახელი დავარქვათ
// Named export ფაილიდან შეიძლება იყოს რამდენიმე named export , import-ის დროს უნდა გამოვიყენოთ ზუსტად იგივე სახელები {}

const { sumOfNumbers, factorial, guessNum, returnLengthOfArr } = require('./functions')

console.log(sumOfNumbers([1, 2, 3, 4]))
console.log(factorial(5))   
console.log(guessNum(7)) 
console.log(returnLengthOfArr([1, 2, 3]))


// import / export გამოიყენება ES Modulesში ,უფრო თანამედროვე სინტაქსია და მუშაობს browser-ში და Node.js-ში ოღონდ browseში უნდა გვეწეროს type: module
// module.exports / require CommonJS ში, Node.jsის კლასიკური მოდულური სისტემა npm პაკეტების უმეტესობა ამ სინტაქსს იყენებს
const quotes = require('random-quotes')
console.log(quotes)





// npm არის ხელსაწყო, რომელიც საშუალებას გვაძლევს დავაინსტალიროთ, წავშალოთ და ვმართოთ ბიბლიოთეკები

// package.json არიs პროექტის მთავარი კონფიგურაციის ფაილი ინახავს პროექტის სახელს ვერსიას scriptsს

// package-lock.json ავტომატურად გენერირდება npm-ის მიერ უზრუნველყოფს, რომ პროექტი ყველგან ერთნაირად იმუშავებს ასევე უსაფრთხო და სტაბილური ბიბლიოთეკებია

// NINOGVINJILIA HELLO
