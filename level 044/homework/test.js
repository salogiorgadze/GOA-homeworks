// კარგად გაიაზრეთ filter method - ის მუშაობა, და თქვენით გააკეთეთ 2 - 2 მაგალითი

let arr = [1,2,3,4,5,6,7,8,9]
let odd = arr.filter(n=> n % 2===0)
console.log(odd)

let passwords = ['salome1','goa1','random111']
let strong =passwords.filter(pass => pass.length>8)
console.log(strong)

// მოიძიეთ ინფორმაცია map method - ის შესახებ, კარგად გაიაზრეთ მისი მუშაობა, 
// ჯერ გატესტეთ და თქვენით გააკეთეთ რამოდენიმე მაგალითი, და შემდეგ შექმენით მისი
//  manual ფუნქცია

// map გამოიყენება მასივზე, რათა შექმნას ახალი მასივი, სადაც თითოეული ელემენტი 
// გადამუშავებულია კონკრეტული ფუნქციით.

let nums = [2,4,5,6,7,8,9]
let tripled = nums.map(n=> n*3);
console.log(tripled);

// reduce გამოიყენება მასივზე, რათა გადავიყვანოთ მასივი ერთეულ მნიშვნელობად.

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);


