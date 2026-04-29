// const firstPromise = new Promise((resolve,reject) => {
//     let condition = true;
//     if(condition){
//         resolve('promise fullfild')
//     }else{
//         reject('promise rejected')
//     }
// })
// firstPromise
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))



// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('there was 3sec delay')
//     },3000)
// })
// promise
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('it will always run'))

// fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((data) => console.log(data))