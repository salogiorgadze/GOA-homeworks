// შექმენით super class - სახელად Fruit რომლის კონსტრუქტორიც იღებს ორ მნიშვნელობას name, price,
//  შექმენით ორი sub class, Apple, Orange, Apple class - დაამატეთ color კუთვნილება, მემკვიდრეობით კი 
// გადაეცით super class - ს name, price მნიშვნელობები, დაამატეთ თქვენთვის სასურველი მეთოდები, შექმენით 
// რამოდენიმე ობიექტი და გატესტეთ მუშაობა

class Fruit{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getInfo(){
        return `${this.name} costs ${this.price} Gel`
    }
}
class Apple extends Fruit{
    constructor(name,price,color){
        super(name,price);
        this.color = color;
    }
    describe() {
        return `This apple is ${this.color}`
    }
}
class Orange extends Fruit{
    constructor(name,price,size){
        super(name,price);
        this.size = size;
    }
    describe() {
    return `This orange is ${this.size} size`;
  }
}
const apple1 = new Apple('Red Apple',2.7,'Red')
const apple2 = new Apple('Green Apple',3.7,'Green')

const orange1 = new Orange('Orange',3.5,'Big')
const orange2 = new Orange('Orange',3.15,'Medium')

console.log(apple1.getInfo())
console.log(apple1.describe())

console.log(apple2.getInfo())
console.log(apple2.describe())

console.log(orange1.getInfo())
console.log(orange1.describe())

console.log(orange2.getInfo())
console.log(orange2.describe())

// კომენტარების სახით ახსენით getter, setter მეთოდების დანიშნულება, კარგად გაიაზრეთ და თქვენით 
// გააკეთეთ ერთი მაგალითი

// getter method გამოიყენება რომ მიწვდეს ობიექტის თვისებას
// setter method გამოიყენება რომ შევცვალოთ ობიექტის ღირებულება

const me = {
    firstname : 'Salome',
    surname : 'Giorgadze',

    get getName() {
        return this.firstname
    },
    get getSurname() {
        return this.surname
    },
    set setName(newName){
        this.firstname = newName;
    }
}
console.log(me.getName)
console.log(me.getSurname)

me.setName = 'Joe'
console.log(me.getName)

console.log(`My name is ${me.getName} and my surname is ${me.getSurname}`)

// შექმენით class - ი სახელად Robot რომლის constructor - საც გადაეცემა ორი მნიშვნელობა name,
//  energyLevel, პირველი მნიშვნელობა name უნდა იყოს private (არ უნდა შეგვეძლოს ამ კუთვნილების
//  class - ის გარეთ გამოყენება) ამისათვის შეგიძლიათ გამოიყენოთ getter მეთოდი, შექმენით ერთი 
// introduce მეთოდი რომელიც console - შ დაბეჭდავს მოცემული Robot - ის შესახებ ინფორმაციას, რობოტის 
// energyLevel საწყის ეტაპზე უნდა იყოს 100 - ის ტოლი, შექმენით მეთოდი სახელად run რომელიც მოცემულ
//  energyLevel შეამცირებს 20 - ით, შექმენით მეთოდი სახელად doDishes რომელიც energyLevel კუთვნილების 
// მნიშვნელობას შეამცირებს 40 - ით შემდეგ კი setter მეთოდში შეამოწმეთ energyLevel - ის მნიშვნელობა თუ 
// ის არის 50 - ზე დაბალი მაშინ console - ში გამოიტანეთ მნიშვნელობა 'The robot needs the recharge'
//  სხვა შემთხვევაში კი 'The robot is full of energy', შექმენით შესაბამისი ობიექტები და გამოიძახეთ
//  შესაბამისი მეთოდები


class Robot{
    constructor(name,energyLevel){
        this._name = name;
        this._energyLevel = energyLevel ?? 100;
    }
    get name(){
        return this._name
    }
    get energyLevel(){
        return this._energyLevel;
    }
    set energyLevel(value) {
        this._energyLevel = value;
    
        console.log(this._energyLevel < 50 ? 'The robot needs the recharge' : 'The robot is full of energy')
    }
    introduce(){
        console.log(`Robots name is ${this._name} and its enery level is ${this.energyLevel}`)
    }
    run(){
        this.energyLevel = this._energyLevel - 20
    }
    doDishes(){
        this.energyLevel = this._energyLevel - 40
    }
    set
}


const robot1 = new Robot('Kate',100)
const robot2 = new Robot('Nin')
const robot3 = new Robot('Kato',40)

// example that name wont change
// robot1.name = 'Nin'
// robot1.energyLevel = 100
robot1.introduce()
robot1.run()
robot1.doDishes()

robot2.introduce()
robot2.doDishes()

robot3.introduce()
robot3.doDishes()


// DOM

let btn = document.getElementById("btn");

    btn.onclick = function () {
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            btn.innerText = "Change The Theme Back To White";
        });
        setTimeout(function () {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            btn.innerText = "Change Theme";
        }, 3000);
    }