// მოიძიეთ ინფორმაცია Class - ების და constructor - ების შესახებ JS - ში, 
// შეეცადეთ და გააკეთეთ თქვენით 1 მაგალითი, კარგად გაიაზრეთ

class Me{
    constructor(name,surname,age,height){
        this.name = 'Salome'
        this.surname = 'Giorgadze'
        this.age = 16
        this.height = 1.70
    }
}
const me = new Me("Salome", "Giorgadze", 16, 1.70);
console.log(me.surname)