let a = [1,,2,3,4,5,6,7,8,9]
// push
a.push(33)
a.push(35)
console.log(a)
// pop
let b = [1,,2,3,4,5,6,7,8,9]
b.pop()
b.pop()
console.log(b)
// shift
let c = [1,,2,3,4,5,6,7,8,9]
c.shift()
c.shift()
console.log(c)
// unshift
let d = [1,,2,3,4,5,6,7,8,9]
d.unshift(37)
d.unshift(39)
console.log(d)


// slice
let newArr = [2,3,5,6,7,9]
let sliced = newArr.slice(2,5)
let slicedArr = newArr.slice(1,5)
console.log(sliced)
console.log(slicedArr)

//  splice 
let n = [1,2,3,4,5,6,7,8,9]
n.splice(0,3)
console.log(n)

// forEach

let numArr = [1,2,3,4,5,6,7,8,9]
numArr.forEach(n => console.log(n**3));

let fruits = ['apple','banana','peach']
fruits.forEach(f => console.log(f.toUpperCase()))

// map

let newNumArr = [1,2,3,4,5]
let fourth = newNumArr.map(d=> d**4)
console.log(fourth)

let foods = ['pasta','caesar','fries']
let upperFood = foods.map(food => food.toUpperCase())
console.log(upperFood)

// filter

let names = ['Salome','Nini','Taso']
let filtered = names.filter(i => i.length > 5)
console.log(filtered)

// შექმენით map, filter, forEach მეთოდების clone - ი
// forEach

function myFriend(myFriends){
    for (let i of myFriends){
        console.log(i)
    }
}
let myFriends = ['Nini','Taso','Dato','Tamari','Maryam']
console.log(myFriend(myFriends))

// map

function mapClone(arr){
    let result = []
    for(let i of arr){
        result.push(i**3)
    }
    return result
}
console.log(mapClone([2,3,5]))

// filter

function filterClone(numsArr){
    let resultEven = [];
    for (let i of numsArr){
        if(i%2===0){
            resultEven.push(i)
        }
    }
    return resultEven
}
console.log(filterClone([11,17,24,33,36]))