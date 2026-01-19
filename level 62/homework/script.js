// სინქრონიზაცია არის როდესაც კოდი სრულდება თანმიმდევრობით
// ასინქრონიზაცია არის როდესაც კოდი არ ელოდება ნელ ოპერაციას

// სინქრონიაზაცია

console.log('item1')
console.log('item2')
console.log('item3')

// ასინქრონიზაცია

// console.log('task1')
// setTimeout(()=>{
//     console.log('task2')
// },2000)
// console.log('task3')



const set1 = new Set()
const set2 = new Set()

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
set1.add(5)
set1.add(2)
set1.add(3)

set2.add(3)
set2.add(4)
set2.add(5)
set2.add(6)
set2.add(7)
set2.add(4)

console.log(set1)
console.log(set2)

const uniqueElements = new Set([...set1, ...set2])
console.log(uniqueElements)
console.log([...uniqueElements])


// Map

// გამოსწორებული ვერსია - ვარიანტი 2: entries() გამოყენება
const students2 = new Map()
students2.set(1, 'Mariam Beradze')
students2.set(2, 'Salome Giorgadze')
students2.set(3, 'Nini Gelkhauri')
students2.set(4, 'Mariam Kratsashvili')
students2.set(5, 'Nini Turmanidze')
students2.set(6, 'Nino Tutarauli')
students2.set(7, 'Lizi Gevasalia')
students2.set(8, 'Nini Adamia')
students2.set(9, 'Nene Chikhradze')
students2.set(10, 'Taso Mshvidobadze')

for (let [id, name] of students2.entries()) {
    console.log(`ID: ${id}, name: ${name}`)
}


for (let i = 1;i<=20;i++){
    console.log(i)
}
// დაიბეჭდა სინქრონულად

//1. დაბეჭდეთ 'Finished', 2. დაწერეთ კოდი რომელიც ყოველ 2 წამში დაბეჭდავს მნიშვნელობას Repeated, every 2 seconds, 3. საბოლოოდ კი console - ში დაბეჭდეთ 'Done', ჯერ დაწერეთ კომენტარების სახით ის რაც თქვენ გგონიათ, რომ console - ში დაიბეჭდება, საბოლოოდ კი ახსენით თუ რატომ დაიბეჭდა (console - ში), მსგავსი შედეგი
console.log('Finished')
setTimeout(()=>{
    console.log('Repeated every 2 seconds')
},2000)
console.log('Done')
// ჯერ დაიბეჭდება Finished მერე Done მერე Repeated every 2 seconds რადგან ზემოდან ქვემოთ მოყვება ირველ კოდს მიჰყვება Done და ორ წამში დაიბეჭდება Repeated every 2 seconds