/* შექმენით მასივი, სადაც შეინახავთ თქვენი ოჯახის წევრების სახელებს, თქვენი დავალებაა,
  რომ თითოეულ სახელზე indexing - ის გამოყენებით მოიპოვოთ წვდომა და შეინახოთ ცვლადებში,
 არსებული ცვლადები კი დაბეჭდეთ */
const family = ['Irina','Giorgi','Saba','Sandro','Salome']
const mom = family[0]
const dad = family[1]
const brother = family[2]
const brother2 = family[3]
const me = family[4]
console.log(mom)
console.log(dad)
console.log(brother)
console.log(brother2)
console.log(me)

// კომენტარების სახით ახსენით განასხვავება const, let, var keyword - ებს შორის, როდის და რა შემთხვევაში ვიყენებთ ჩვენ მათ
// var — ძველი keyword (ES5-მდე გამოიყენებოდა), აქვს function scope (არა block scope) შეიძლება ხელახლა გამოცხადება (redeclare) 
// let — თანამედროვე keyword (ES6),აქვს block scope,ხელახლა გამოცხადება არ შეიძლება,ვიყენებთ მაშინ, როცა ცვლადის მნიშვნელობა უნდა შეიცვალოს
// const — მუდმივი (constant) ცვლადი, აქვს block scope,მნიშვნელობის შეცვლა არ შეიძლება

/* შექმენით ცვლადი სადაც შეინახავთ 1 - 10 - მდე random - რიცხვს 
(გამოიყენეთ Math ბიბლიოთეკა და მასზე შესაბამისი მეთოდი), შექმენით მეორე ცვლადი
 სადაც შეინახავთ თქვენთვის სასურველ რიცხვს 1 - 10 - მდე, თქვენი დავალებაა, რომ შეამოწმოთ 
 თუ თქვენს მიერ შემოტანილი რიცხვი უდრის random რიცხვს გამოიტანეთ text - 'You have guessed 
 the random number' სხვა შემთხვევაში კი 'You have not guessed the random number. Please try 
 again later' */

let number = Math.floor(Math.random()*10);
let myNumber = 7;
console.log(number === myNumber ? 'You have guessed the random number' : 'You have not guessed the random number. Please try again later')

/* შექმენით მასივი, სადაც შეინახავთ რიცხვებს, თქვენი დავალებაა, რომ თქვენით
 დაწეროთ ამ მასივში არსებული რიცხვების საბოლოო ჯამის გამოსათვლელი ლოგიკა */
let sumArray = 0
let array = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < array.length;i++) {
    sumArray += array[i]
}
console.log(sumArray)

// შექმენით სახელების მასივი, თქვენი დავალებაა, რომ ამ მასივს გადაუაროთ და გამოიტანოთ თითო ელემენტი

const names = ['Salome','Tamari','Nini','Taso','Niniko']
for (let i = 0;i<names.length;i++) {
    console.log(names[i])
}

// მოიძიეთ დამატებითი ინფორმაცია მასივის მეთოდების შესახებ, და თითოეულზე გააკეთეთ 2-2 მაგალითი
let arrNumbers = [1,2,3,4,5,6,7,8,9]
arrNumbers.pop();
arrNumbers.pop();
arrNumbers.push(10);
arrNumbers.push(11);
arrNumbers.shift();
arrNumbers.shift();
arrNumbers.unshift(21);
arrNumbers.unshift(24);
console.log(arrNumbers);

let newArrNumbers = arrNumbers.map(n => n*3);
console.log(newArrNumbers)

// კომენტარების სახით ახსენით იქნება თუ არა მოცემულ კოდში შეცდომა
// console.log(1090 + 'Nino')
// შეცდომა არ იქნება მოხდება კონკატინაცია '1090Nino'


// შექმენით მასივი სადაც შეინახავთ სახელებს, თქვენი დავალებაა, რომ შეამოწმოთ მოიცავთ თუ არა თქვენი მასივი თქვენს სახელს, თუ კი გამოიტანეთ, რომ name is in the array, სხვა შემთხვევაში კი name is not in the array, გამოიყენეთ შესაბამისი მეთოდი

let randomNames = ['Nini','Tamo','Ani','Salome','Lili']
let foundName = false;
for (let i of randomNames) {
    if (i === 'Salome'){
        foundName = true;
        break;
    }
}
console.log(foundName === true ? 'name is in the array' : 'name is not in the array' )

// შექმენით ორი ცვლადი რომელშიც შეინახავთ რიცხვებს, თქვენი დავალებაა, რომ შეამოწმოთ თუ
//  პირველი რიცხვი მეორეზე მეტია გამოიტანეთ 'The first number is greater than the second 
// number' თუ მეორე რიცხვი პირველ რიცხვზე მეტია გამოიტანეთ 'The second number is greater
//  than the first number' სხვა შემთხვევაში კი გამოიტანეთ 'The numbers are equal to each 
// other'

let a = 5;
let b = 7;

if (a > b) {
    console.log('The first number is greater than the second number')
} else if (a<b) {
    console.log('The second number is greater than the first number')
} else {
    console.log('The numbers are equal to each other')
}

