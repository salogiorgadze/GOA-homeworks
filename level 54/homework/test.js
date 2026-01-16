function upatrono(array){
    return array.filter(num=>
        !array.includes(num/2)&& !array.includes(num*3)
    )
}

console.log(upatrono([12,3,4,8,6,9]))