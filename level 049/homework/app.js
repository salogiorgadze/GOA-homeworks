const btn = document.getElementById('addTask');
const list = document.getElementById('taskList');

btn.addEventListener('click', ()=>{
    const task = prompt('Enter your task:')
    if (task !== null && task !== ' '){
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li)
    }
})

// btn.onclick = function () {
//     const task = prompt('Enter your task');

//     if (task !== null && task !== '') {
//         const li = document.createElement('li');
//         li.textContent = task;
//         list.appendChild(li);
//     }
// };

const guessTheNumber = () => {
    const secretNumber = 7;
    const userNumber = prompt('Enter a number');
    const result = document.getElementById('result');

    if (userNumber > secretNumber) {
        result.textContent = 'The number is too high';
    } else if (userNumber < secretNumber) {
        result.textContent = 'The number is too low';
    } else {
        result.textContent = 'Congratulations You have guessed the secret number!';
    }
};
// მომხმარებელეს შემოატანინეთ ორი რიცხვი და მოახდინეთ ამ ორ რიცხვზე 4 მათემატიკური ოპერაცია +-*/, შედეგები კი გამოიტანეთ ეკრანზე
const mathOperations = () => {
    const num1 = Number(prompt('Enter first number:'))
    const num2 = Number(prompt('Enter second number:'))

    document.getElementById('sum').textContent = 'sum is:' + (num1 + num2)

    document.getElementById('difference').textContent = 'difference is:' + (num1 - num2)

    document.getElementById('multiply').textContent = 'multiplied is:' + (num1 * num2)

    document.getElementById('division').textContent = 'divided is:' + (num1 / num2)
}