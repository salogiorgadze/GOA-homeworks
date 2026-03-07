// let seconds = 0

// const timer10 = setInterval(()=>{
//     seconds ++
//     console.log(seconds)
//     if (seconds == 10){
//         clearInterval(timer10)
//         console.log('Times Up')
//     }
// },1000)

// let seconds = 11

// const timer10 = setInterval(()=>{
//     seconds --
//     console.log(`time left: ${seconds}`)
//     if (seconds == 0){
//         clearInterval(timer10)
//         console.log('Times Up')
//     }
// },1000)

// let pos = 0

// const anim = setInterval(()=>{
//     pos++
//     addBox.style.left = pos + 'px'

// })


// const box = document.getElementById('box');

// let pos = 0;
// let direction = 'right';
// const stopPos = 150;


// const id = setInterval(() => {
//     if (direction === 'right') {
//         pos++;
//         if (pos >= stopPos) {
//             direction = 'left';
//         }
//     } else if (direction === 'left') {
//         pos--;
//         if (pos <= 0) {
//             direction = 'right';
//         }
//     }
//     box.style.left = pos + 'px';
// }, 20);



const box = document.getElementById('box');

let x = 0
let y = 0
let direction = 'right'
const stopPos = 150

const id = setInterval(() => {
    if (direction === 'right') {
        x++
        if (x >= stopPos) {
            direction = 'down'
        }

    } else if (direction === 'down') {
        y++
        if (y >= stopPos) {
            direction = 'left'
        }

    } else if (direction === 'left') {
        x--
        if (x <= 0) {
            direction = 'up'
        }

    } else if (direction === 'up') {
        y--
        if (y <= 0) {
            direction = 'right'
        }
    }

    box.style.left = x + 'px'
    box.style.top = y + 'px'
}, 20)
