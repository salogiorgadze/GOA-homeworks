// const name = 'Salome'
// const surname = 'Giorgadze'
// const me = {
//     name,
//     surname
// }

// console.log(me)

// const btn = document.getElementById('btn')
// let count = 0;
// data = {}

// btn.addEventListener('click',() => {
//     count++
//     data[`count-${count}`] = count
//     console.log(data)
// })


// const me = {
//     name : 'sal',
//     surname : 'Giorgadze',
//     age : 16
// }
// const {name,age:asaki,surname} = me
// console.log(asaki)
 
const me = {
    name : 'sal',
    surname : 'Giorgadze',
    age : 16
}
const about = {...me}
console.log(about)
Object.assign({},me)

