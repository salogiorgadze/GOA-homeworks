// შექმენით კონსტანტა სადაც შეინახავთ 10-100 ჩათვლით რომელიღაც რიცხვს, თქვენი დავალებაა,
//  რომ შეამოწმოთ მოსწავლის ქულა და შესაბამისად გამოიტანოთ შეფასება, მაგალითად, თუ 
// მოსწავლის ქულა მეტია ან ტოლი 90 მაშინ გამოიტანეთ მნიშვნელობა 'A' 

const pupGrade = 99;

console.log(pupGrade>= 90 ? 'A' : 'C')


const grade = 55;

switch (true) {
    case grade <= 30:
        console.log('D');
        break;
    case grade <= 50:
        console.log('C');
        break;
    case grade <= 80:
        console.log('B');
        break;
    case grade > 80:
        console.log('A');
        break;
    default:
        console.log('none');
}


// შექმენით ორი კონსტანტა სადაც შეინახავთ სახელს და ასაკს, თქვენი დავალებაა, 
// რომ შეამოწმოთ უდრის თუ არა მომხმარებლის სახელი თქვენს სახელს და უდრის თუ 
// არა მომხმარებლის ასაკი თქვენს ასაკს, თუ მოცემული პირობა არის true, გამოიტანეთ 
// ტექსტი 'We have the same name or age' სხვა შემთხვევაში კი გამოიტანეთ ტექსტი 
// "We don't have the same name and age", ამისათვის გამოიყენეთ logical operator 



const myName = 'Salome'
const myAge = 16
const userName = 'Nika'
const userAge = 16

if (myName === userName || myAge === userAge) {
    console.log('We have the same name or age')
} else {
    console.log("We don't have the same name and age")
}

/* შექმენით ორი კონსტანტა, პირველი age რომელშიც შეინახავთ ასაკს, მეორე 
hasTicket - რომელშიც შეინახავთ boolean მნიშვნელობას, თქვენი დავალებაა, რომ 
შეამოწმოთ იმ შემთხვევაში თუ მომხმარებლის ასაკი მეტია 15 - ზე და hasTicket - ის 
მნიშვნელობა არის true, მაშინ გამოიტანეთ ტექსტი 'You can go in, and watch a movie' 
სხვა შემთხვევაში "You can't go in", გამოიყენეთ logical, comparation operator - ები */

const tkAge = 16;
const hasTicket = true;

if (tkAge > 15 && hasTicket === true) {
    console.log('You can go in, and watch a movie')
} else {
    console.log("You can't go in")
}



// for loop - ის გამოიყენებით, გამოიტანეთ 1 - 100 ჩათვლით რიცხვების ჯამი

let total = 0;
for (let i = 0;i < 100+1;i++) {
    total += i
}
console.log(total)

// for loop - ის გამოყენებით, გამოიტანეთ რიცხვები 100 - 1 - მდე

for (let i = 100;i>0;i--) {
    console.log(i)
}

// შექმენით მასივი, მასში შეინახეთ რიცხვები თქვენი დავალებაა, რომ გამოიტანოთ მხოლოდ 
// ისეთი რიცხვები რომლებიც არის ლუწი 

let numArr = [1,2,3,4,5,6,7,8,9]

for (let i of numArr) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// შექმენით მასივი, სადაც შეინახავთ რიცხვებს, თქვენი დავალებაა, რომ გამოიტანოთ ამ მასივიდან ყველაზე დიდი რიცხვი console - ში

let numArray = [1,2,3,4,5,6,7,8,9,10,11]
console.log(Math.max(...numArray))

// Bonus
/* შექმენით ფუნქცია რომელიც პარამეტრად იღებს მასივს, თქვენი დავალებაა, რომ გამოთვალოთ 
ამ მასვში არსებული რიცხვების საშუალო არითმეტიკული */

function average(newArr) {
    let sum = 0
    for (let i of newArr) {
        sum += i
    }
    return sum / newArr.length
}
let newArr = [10,10,7]
console.log(average(newArr))