// 1) ვისაც არ გაქვთ დასრულებული level 117 - ის დავალებები, დაასრულეთ

// 2) კომენტარების სახით ახსენით რას აკეთებს buffer მოდულის .alloc(), .from(), .concat() და .toString() მეთოდები
// .alloc() ქმნის ცარიელ Buffer - ს მითითებული ზომით, ნულებით ავსებს
// .from() ქმნის Buffer-ს არსებული მონაცემებიდან სტრინგი, მასივი, ან სხვა Buffer
// .concat() აერთიანებს რამოდენიმე buffer - ს
// .toString() გარდაქმნის buffer - ს ტექსტად

// 3) მოიყვანეთ მინიმუმ 5 - 5 მაგალითი თითოეული მეთოდის გამოყენებით (.alloc(), .from(), .concat() და .toString())

const {Buffer} = require('buffer');

const buffer1 = Buffer.alloc(17);
console.log(buffer1);

const buffer2 = Buffer.from('Salka');
console.log(buffer2);

const buffer3  = Buffer.from('Node');
const buffer4 = Buffer.from('.');
const buffer5  = Buffer.from('js');
console.log(Buffer.concat([buffer3, buffer4, buffer5]).toString());

console.log(buffer1.toString('utf-8'))


