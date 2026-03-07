sumOfNumbers = (array) => {
    return array.reduce((sum, num) => sum + num, 0)
}

const factorial = (num) => {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

const guessNum = (userNum) => {
    const randomNum = Math.floor(Math.random() * 10) + 1

    if (userNum === randomNum) {
        return 'You have guessed the number correctly'
    } else {
        return 'You lost, try again'
    }
}

const returnLengthOfArr= (arr) => {
    return arr.length
}

module.exports = { sumOfNumbers, factorial, guessNum, returnLengthOfArr }
