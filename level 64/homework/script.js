// JSON (JavaScript Object Notation) არის ტექსტური ფორმატი მონაცემების შესანახად და გადასაცემად
// JSON - ეს არის მონაცემების გაცვლის ფორმატი, რომელიც წარმოადგენს ტექსტს, მაგრამ JavaScript ობიექტის მსგავს სტრუქტურას აქვს.
// იწერება ტექსტის სახით - ადვილად წასაკითხი ადამიანისთვის
// JavaScript ობიექტების მსგავსია, მაგრამ არის უბრალოდ ტექსტი

// fetch არის JavaScript-ის ჩაშენებული ფუნქცია, რომელიც საშუალებას გვაძლევს 
// მოვითხოვოთ მონაცემები ინტერნეტიდან (სერვერებიდან, API-ებიდან).

const pen = true;

const homework = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pen){
                resolve('homework done')
            } else {
                reject('no pen')
            }
        },2000)
    })
}
homework()
    .then((done) => console.log(`Fulfilled ${done}`))
    .catch((reason) => console.log(`couldn't finished because of ${reason}`))
    .finally(() => console.log('I can rest'))

const dance = prompt('What is my favorite dance:')

const favDance = () => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            if (dance.toLowerCase() === 'juta') {
                resolve('You have guessed my favorite dance')
            } else {
                reject('You are wrong')
            }
        },5000)
    })
}
favDance()
    .then((correct) => console.log(`Fulfilled ${correct}`))
    .catch((reason) => console.log(`Haha ${reason}`))
    .finally(() => console.log('It is Juta'))