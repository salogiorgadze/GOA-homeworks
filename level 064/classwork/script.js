const water = true;
const sweapFloor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (water){
                resolve('floor is cleaned')
            }
            else{
                reject('no water')
            }
        },2000)

    })
}
sweapFloor()
    .then((cleanFloor) => console.log(`Fullfiled ${cleanFloor}`))
    .catch((reason) => console.log(`couldn't clean because of ${reason}`))
    .finally(() => console.log('finally I can rest'))



// then --> თუ ყველაფერი წარმატებით შესრულდა გააკეთე ეს
// catch --> თუ არ შესრულდა dareject და გააკეთე ეს
// finally --> რომ რაც არ უნდა მოხდეს მაინც შესრულდეს

// then --> როდესაც გარეთ გასვლას ვგეგმავდით სასეირნოდ,წინა ღამით და მეორე დღეს კარგი ამინდი აღმოჩნდა
// catch --> როდესაც ძალიან ცუდი ამინდი აღმოჩნდა
// finally --> რაც არ უნდა მოხდეს მაინც ვნახავთ ერთმანეთს

// fetch('https://youtu.be/pyGU-UudvrM?si=BY-KQjQbgijXeg17')
//     .then((response) => response.json())
//     .then((data) => console.log(data))


