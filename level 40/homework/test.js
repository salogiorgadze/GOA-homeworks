// შექმენით მასივი სადაც შენახავთ სიტყვებს, თქვენი დავალებაა, რომ გამოიტანოთ მხოლოდ ისეთი სიტყვები რომლის index - იც იყოფა 2 - ზე
arr = ['hello','world','goa','python','js']
for (let i = 0;i<arr.length;i++){
    if(i % 2 === 0){
        console.log(arr[i])
    }
}

// მომხმარებელს შემოატანინეთ password, დაწერეთ ფუნქცია, რომელიც შეამოწმებს პაროლის 
// სიძლიერეს, თუ პაროლი შეიცავს punctuation character - ს და მოცემული პაროლის სიგრძე მეტია
//  6 - ზე ან პაროლი შეიცავს რიცხვს გამოიტანეთ message - 'Your password is strong' სხვა 
// შემთხვევაში კი 'Your password is weak'

function strongPass(password){
    let punctuationRegex = '!@#$%^&*(),.?":{}|<>';

    for (let i of password){
        for (let d of punctuationRegex){
            if (i === d && password.length > 6){}
                return 'Your password is strong'
        }
    
        if (i >= '0' && i <= '9') {
            return 'Your password is strong';
      }  
    }
    
    return 'Your password is weak'
}
let password = prompt('Enter your password:')
console.log(strongPass(password))

// შექმენით მასივი, შეინახეთ მასში სიტყვები, თქვენი დავალებაა, რომ გამოიტანოთ 
// ამ მასივიდან ყველაზე გრძელი სიტყვა (გამოიყენეთ ფუნქცია)

function longest(strArr){
    let longestWord = ''
    for (let i = 0;i<strArr.length;i++){
        if(strArr[i].length>longestWord.length){
            longestWord = strArr[i]
        }
    }
    return longestWord
}
console.log(longest(['sal','goa','javascript']))

// capitalize

function formatName(fullName) {
  return fullName
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const myName = "SaLoME giOrgadze";
console.log(formatName(myName));

// შექმენით რიცხვების მასივი, შემდეგ შექმენით შესაბამისი ფუნქცია იმისათვის, რომ
//  მოცემული რიცხვები დალაგდეს ზრდადობის მიხედვით

function rise(numArr){
    return numArr.sort((a,b)=> a-b);
}
let numArr = [1,2,5,7,8,3,6]
console.log(rise(numArr))

// Bonus

function wordLength(sentence){
    return sentence.trim().split(/\s+/).length;
}
console.log(wordLength('hello world'))