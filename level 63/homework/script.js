// Promise არის დაპირება როდესაც რაღაცა ან შესრულდება ან არა pending არის როცა ჯერ არ შესრულებულა და არც უარყოფილა

const EvenOdd = new Promise((resolve , reject ) => {
    const num = Math.round(Math.random()*10);
    if (num % 2 !== 0){
        resolve('The number is odd');
    } else {
        reject('The number is even');
    }
})
console.log(EvenOdd);

// შექმენით promise - რომელიც შეამოწმებს მომხმარებლის შეკვეთის ნომერს, თუ შეკვეთის 
// ნომერი იწყება 4 - ით, resolve - ით გამოიტანეთ message 'Your order is ready' სხვა
//  შემთხევაში კი reject - 'This is not your order' ან 'Your order is not ready yet'

const orderProcess = new Promise((resolve , reject) => {
    const userNum = prompt('Enter your order number:')
    if (userNum[0] === '4'){
        resolve('Your order is ready')
    } else {
        reject('This is not your order')
    }
})
console.log(orderProcess)

// 4) შექმენით ცვლადი სადაც შეინახავთ ამინდს (მაგალითად 'sunny', 'rainy', 'snowy'
// etc.), შექმენით promise და შეამოწმეთ ამინდი თუ ის უდრის 'sunny', resolve - ით გამოიტანეთ
//  მნიშვნელობა 'Today is a sunny day, i can go out and spend time with my friends',
//  სხვა შემთხვევაში კი reject, 'Today is not a sunny day, so i am not going out'

const day = new Promise((resolve , reject) => {
    const weather = prompt('Enter todays weather:');
    if (weather === 'sunny') {
        resolve('Today is a sunny day, i can go out and spend time with my friends')
    } else {
        reject('Today is not a sunny day, so i am not going out')
    }
})
console.log(day)
