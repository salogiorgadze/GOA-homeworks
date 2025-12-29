/* შექმენით ერთი მასივი, სადაც შეინახავთ რიცხვებს, შექმენით ფუნქცია სახელად 
findNumInArr რომელსაც გადაეცემა 1 არგუმენტი, მომხმარებელს შემოატანინეთ რიცხვი, და
 შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის მასივში დააბრუნეთ მნიშვნელობა 
 'The number is in the array' სხვა შემთხვევაში კი 'The number is not in the array' */

 let arr = [1,2,3,4,5,6,7,8,9,10,11]

 function isSame(number) {
    for (let i of arr){
        if (i === number) {
            return 'The number is in the array'
        }
    }
    return 'The number is not in the array'
 }

let number = Number(prompt('Enter any number:'))

 console.log(isSame(number))

 /* მომხმარებელს შემოატანინეთ ფილმის სახელი, თქვენი დავალებაა, რომ
  მის მიერ შემოტანილი ფილმი ჩაამატოთ ცარიელ მასივში, გადაუაროთ
   მოცემულ მასივს for loop - ის გამოყენებით და დაბეჭდოთ თითოეული ელემენტი */

let arrMovie = []
let movieName = prompt('Enter any film:')
arrMovie.push(movieName)
movieName = prompt('Enter any film:')
arrMovie.push(movieName)

for (let i of arrMovie) {
    console.log(i)
}
// შექმენით ფუნქცია სახელად sum - რომელიც იღებს ორ არგუმენტს, თქვენი დავალებაა, რომ დააბრუნოთ მოცემული რიცხვების ჯამი

function sum(a,b){
    return a+b
}
console.log(sum(5,6))

// შექმენით ფუნქცია სახელად returnLength რომელიც არგუმენტად იღებს მომხმარებლის მიერ შემოტანილ ტექსტს, თქვენმა ფუნქციამ უნდა დააბრუნოს ამ ტექსტის სიგრძე

function wordLen(word){
    return word.length
}
let word = prompt('Enter any word:')
console.log(wordLen(word))

// მომხმარებელს შემოატანინეთ თავისი ინფორმაცია როგორიცაა

// სახელი, გვარი, ასაკი, სიმაღლე, საცხოვრებელი ადგილი

// თქვენი დავალებაა, რომ მოცემული ინფორმაციით შექმნათ ერთი მთლიანი წინადადება, საბოლოო შედეგი კი გამოიტანოთ console - ში

let username = prompt('Enter your name:')
let surname = prompt('Enter your surname:')
let age = Number(prompt('Enter your age:'))
let height = Number(prompt('Enter your height(metres):'))
console.log(`My name is ${username} ${surname},Im ${age} old , im ${height} m`)


// შექმენით ფუნქცია სახელად reverseWords - რომელიც არგუმენტად მიიღებს მასივს, თქვენი დავალებაა, რომ ამ მასივში არსებული ყველა ელემენტი გამოიტანოთ შემობრუნებულად, მაგალითად - ['Nino', 'ExampleName'] ---> ['oniN', 'emaNelpmaxE']

function reverseWords(nameArray){
    let result = []
    for (let i of nameArray){
        let reversed = ""
        for (let l of i){
            reversed = l + reversed
        }
        result.push(reversed)
    }
    return result
}
console.log(reverseWords(['salome','maryam']))

// for loop - ის გამოყენებით 1 - 100 ჩათვლით გამოიტანეთ ისეთი რიცხვები რომლებიც იყოფა 3 - ზე
for (let i = 1;i<100;i++){
    if (i % 3 == 0) {
        console.log(i)
    }
}

// შექმენით ფუნქცია სახელად countLetterB რომელიც იღებს ერთ არგუმენტს (ტექსტს), თქვენი დავალებაა, რომ დაითვალოთ თუ რამდენჯერ მეორდება ასო B თქვენს სიტყვაში

function countLetterB(text){
    let countB = 0
    for (let i of text){
        if (i === "b" || i === "B"){
            countB += 1
        }
    }
    return countB
}
console.log(countLetterB('BestBestbest'))