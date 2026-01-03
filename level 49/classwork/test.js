// შექმენით ღილაკი Change bgColor რომელზე დაჭერისას დაგენერირდება random - ად უკანა ფერი, გამოიყენეთ Math ბიბლიოთეკა და შესაბამისი მეთოდები


// const manualGetElementById = (id) => {
//     const elements = document.body.children

//     for (let element of elements){
//         if (element.id === id){
//             return element
//         }
//     }
//     return null
// }

// console.log(manualGetElementById('surname'))

// const surnameP = document.getElementById('city')
// console.log(surnameP)

// const familyMem = document.getElementsByClassName('family')
// console.log(familyMem)

// const getElementsByClassName = (className) => {
//     const result = []
//     const elements = document.body.children
//     for (let element of elements){
//         result.push(element)
//     }
//     return result
// }
// console.log(document.getElementsByClassName('family'))

// const fam = document.querySelectorAll(".family")
// console.log(fam)


// old way
const countDisplay = document.getElementById('counter')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')
let count = 0;
// increaseBtn.onclick = () => {
//     count++;
//     countDisplay.textContent =`count: ${count}`
// }



// new way
increaseBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = `Count: ${count}`
})
decreaseBtn.addEventListener('click',()=> {
    count--;
    countDisplay.textContent = `Count: ${count}`
})
resetBtn.addEventListener('click',()=>{
    count = 0;
    countDisplay.textContent = `Count: ${count}`
})