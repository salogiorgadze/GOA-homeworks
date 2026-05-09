// events module გამოიყენება მოვლენებზე დაფუძნებული პროგრამირებისთვის,შეგვიძლია შევქმნათ მოვლენა,მოვუსმინოთ და გამოვიძახოთ შესაბამის დროს

// EventEmmiter არის კლასი რომელიც ქმნის და მართავს მოვლენებს და გვაძლევს საშუალებას დავამატოთ მსმენელები

// on method
// emmiter.on(eventName, callback)

// emit method
// emmiter.emit(eventName, data)

const EventEmmiter = require('events')

const emmiter = new EventEmmiter();

// მოვლენის მოსმენა
emmiter.on('greet',(name)=>{
    console.log(`Hello ${name}`)
})
// მოვლენის გამოძახება
emmiter.emit('greet','salka')

// მოვლენის მოსმენა
emmiter.on('sum',(a,b) => {
    console.log(a + b)
})
// მოვლენის გამოძახება
emmiter.emit('sum',5,17)


