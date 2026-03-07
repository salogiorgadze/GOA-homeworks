const promisedReturn = new Promise((resolve,reject)=>{
    let num = Math.round(Math.random())

    if (num === 1) {
        resolve("Yeee i survived as i promised")
    } else {
        reject("No i died because of low food")
    }
})
console.log(promisedReturn)

const asyncOperation = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> resolve('success'),3000)
    })
}
console.log(asyncOperation)