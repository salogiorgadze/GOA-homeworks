// მომხმარებელს შემოატანინეთ messy string მაგალითად '      heLLo WoRld       ', თქვენი
//  დავალებაა, რომ მოცემული string - ს მოაშოროთ ზედმეტი space - ები, და მოცემული სიტყვების
//  პირველი ასოები გამოიტანოთ მაღალ რეგისტრში, მაგალითად '      heLLo WoRld       ' ----> 
//  'Hello World'

function clean(sentence){
    let words = sentence.trim().split(/\s+/); // ნებისმიერი რაოდენობის space
    let result = [];
    for (let i of words){
        result.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
    }
    return result.join(" ");
}

let sentence = prompt('Enter your sentence:');
console.log(clean(sentence));

// შექმენით ფუნქცია რომელიც წინადადებაში არსებულ სიტყვებს, და მთლიან წინადადებას 
// შემოაბრუნებს მაგალითად - 'Hello My name is Nino' ---> 'oniN si eman yM olleH', 
// გამოიყენეთ შესაბამისი მეთოდები

function reverseWords(reversed) {
    return reversed
        .split(" ")                       // წინადადების გაყოფა სიტყვებად
        .map(word => word.split("")        // სიტყვის გაყოფა ასოებად
                        .reverse()       // ასოების reverse
                        .join(""))       // ასოების შეკრება ისევ სიტყვად
        .join(" ");                        // სიტყვების გაერთიანება წინადადებად
}
console.log(reverseWords('Hello my name is Salome'));

// შექმენით მასივი სახელად products სადაც შეინახავთ პროდუქტებს, მომხმარებელს შემოატანინეთ პროდუქტის სახელი, 
// შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი პროდუქტი არის მასივში გამოიტანეთ 'The product is in products array' 
// სხვა შემთხვევაში კი 'The product is not in products array'

arr = ['bread','eggs','milk','coffee','tea','meat']
function products(userProduct){
    for (let i of arr){
        if (i === userProduct){
            return 'The product is in products array'
        }
    }
    return 'The product is not in products array'
}
let userProduct = prompt('Enter product:')
console.log(products(userProduct))


// შექმენით ფუნქცია სახელად generateUsername რომელიც არგუმენტად იღებს მომხმარებლის მიერ შემოატნილ username - ს, მოცემული username - ს
//  მოაშორეთ space - ები, შეაერთეთ და ბოლოში 1 - 100 ჩათვლით დაუმატეთ random რიცხვი (გამოიყენეთ Math ბიბლითეკა)

function generateUsername(username){
    let cleanUser = username.trim().replace(/\s+/g, "");
    let randomNumber = Math.floor(Math.random()*100)+1;
    return cleanUser + randomNumber;
}
let username = prompt('Enter your username:')
console.log(generateUsername(username))

// შექმენით მასივი შენახეთ მასში password - ები, შექმენით ფუნქცია რომელიც გამოიტანს 
// მხოლოდ ისეთ პაროლებს რომლის სიგრძეც მეტია 6 - ზე და მოიცავს რაიმე რიცხვს

let passwords = ['salome1','goa','password']
function checkPass(passwords){
    let result = []
    for (let i of passwords){
        if (i.length > 6 && /\d/.test(i)){
            result.push(i)
        }
    }
    return result
}
console.log(checkPass(passwords))

// შექმენით მასივი მასში კი რამოდენიმე მასივი, ჩაშენებულ მასივებში კი შეინახეთ სახელები, 
// თქვენი დავალებაა, რომ მოიპოვოთ მთავარ მასივში არსებულ ისეთ მასივზე წვდომა, რომელშიც 
// თქვენი სახელია მოთავსებული, გამოიყენეთ indexing

let array = [['Nini','Taso'],['Tamari','Niniko'],['Salome','Maryam']]
console.log(array[2][0])