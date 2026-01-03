// შექმენით Class - ი სახელად Person, მის constructor - ს გადაეცით ორი მნიშვნელობა name, age, თქვენი 
// დავალებაა, რომ შექმნათ Class - ში ახალი მეთოდი სახელად getUserInfo რომელიც console - ში გამოიტანს
//  მომხმარებლის ინფორმაციას მაგალითად `Hello my name is ${name} and i am ${age} years old`, შექმნით
//  სამი მომხმარებლის ობიექტი და გამოიძახეთ შესაბამისი მეთოდი

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getUserInfo() { console.log(`Hello my name is ${this.name} and i am ${this.age} years old`)
    }
}

const user1 = new Person('Mark',19)
const user2 = new Person('Joe',16)
const user3 = new Person('Nick',23)

user1.getUserInfo()
user2.getUserInfo()
user3.getUserInfo()

// შექმენით Class - ი სახელად Rectangle, მის constructor - ს გადაეცით ორი მნიშვნელობა width, height, 
// შექმენით მეთოდი სახელად area რომელიც გამოითვლის ამ rectangle - ის საბოლოო ფართობს

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area() {console.log((this.width+this.height)*2)}
}
const rectangle1 = new Rectangle(20,10)

rectangle1.area()

// შექმენით Class - ი სახელად Student რომლის constructor - საც გადაეცემა ორი მნიშვნელობა name, score,
//  შექმენით ახალი მეთოდი სახელად passed რომელიც დააბრუნებს შესაბამის მნიშნელობას ლოგიკიდან გამომდინარე,
//  იმ შემთხვევაში თუ Student - ის ქულა აღემატება 70 - ს გამოიტანეთ მნიშვნელობა 'This student passed the 
// test' სხვა შემთხვევაში კი 'This student did not pass the test', შექმენით რამოდენიმე ობიექტი და 
// გამოიძახეთ passed method - ი

class Student{
    constructor(pupName , score){
        this.pupName = pupName;
        this.score = score;
    }
    passed(){
        if (this.score > 70){
            console.log(`This student ${this.pupName} passed the test`);
        }else {
            console.log(`This student ${this.pupName} did not pass the test`)
        }
    }
}
const student1 = new Student('Mar',60)
const student2 = new Student('Nick',77)
const student3 = new Student('Luke',99)

student1.passed()
student2.passed()
student3.passed()

// შექმენით Class - ი სახელად Movie რომლის constructor - იც იღებს სამ მნიშვნელობას name, rating, year,
//  შექმენით მეთოდი სახელად isGoodMovie რომელიც დააბრუნებს ამ ფილმის შესახებ ინფორმაციას (იმ შემთხვევაში
//  თუ rating აღემატებს 2 - ს) შემდეგნაირად `This is a good film, its name is ${name}, rating ${rating}
//  and it was released in ${year}`

class Movie{
    constructor(movieName,rating,year){
        this.movieName = movieName;
        this.rating = rating;
        this.year = year;
    }
    isGoodMovie(){
        if (this.rating>2){
            console.log(`This is a good film, its name is ${this.movieName}, rating ${this.rating} and it was released in ${this.year}`)
        } else {
            console.log(`This is not a good film, its name is ${this.movieName}, rating ${this.rating} and it was released in ${this.year}`)
        }
    }
}

const movie1 = new Movie('Harry Potter',3,1998)
const movie2 = new Movie('TVD',1,2000)
const movie3 = new Movie('Gossip Girls',5,2001)

movie1.isGoodMovie()
movie2.isGoodMovie()
movie3.isGoodMovie()

// შექმენით მასივი, სადაც შეინახავთ დადებით და უარყოფით რიცხვებს, თქვენი დავალებაა, რომ დააბრუნოთ 
// ამ მასივიდან არსებული ყველა დადებითი რიცხვის ჯამი, გამოიყენეთ filter, reduce მეთოდები

let numArr = [1,2,3,-1,4,-9,7,9]

let positiveSum = numArr
        .filter(n=> n>0)
        .reduce((sum, n) => sum + n, 0)
console.log(positiveSum)

// შექმენით მასივი სადაც შეინახავთ რიცხვებს და 0 - ნებს, თქვენი დავალებაა, რომ ამ მასივში არსებული
//  ნულიანები გადაიტანოთ მასივის ბოლოში, ამისათვის გამოიყენეთ შესაბამისი მეთოდები

let newArr = [1,2,3,0,9,7,0,7,0,9,0]

let nonZeros = newArr.filter(n=> n !== 0)
let zeros = newArr.filter(n=> n===0)

let result = nonZeros.concat(zeros)

console.log(result)

// კომენტარების სახით ახსენით თითოეული მეთოდის დანიშნულება

// map
// map:
// თითოეული ელემენტის შესაცვლელად და ახალ მასივში დაბრუნებისთვის.
// მაგალითად: ყველა რიცხვის გაორმაგება

// reduce
// მასივის ყველა ელემენტის შეკავშირება ერთ მნიშვნელობაში (ჯამი, გამრავლება, ობიექტის შექმნა და ა.შ.)
// მაგალითად: ყველა რიცხვის ჯამი
// let sum = arr.reduce((total, n) => total + n, 0);

// filter
// მასივიდან გარკვეული ელემენტების ფილტრაცია გარკვეული პირობით.
// მაგალითად: მხოლოდ დადებითი რიცხვების არჩევა

// forEach
// თითოეული ელემენტის შემუშავება, მაგრამ არ ბრუნებს ახალ მასივს.
// მაგალითად: თითოეული ელემენტის კონსოლში დაბეჭდვა

