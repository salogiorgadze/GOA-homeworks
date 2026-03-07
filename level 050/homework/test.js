const form = document.getElementById('form')
const ultag = document.getElementById('ultag')
form.addEventListener('submit',(e)=> {
    e.preventDefault(e)
    const tasks = e.target.task.value
    const li = document.createElement('li')
    li.textContent = tasks
    ultag.appendChild(li)
    e.target.reset()
})