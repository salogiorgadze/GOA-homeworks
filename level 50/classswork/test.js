const btn = document.getElementById('addTask')
const form = document.getElementById('form')
const p = document.getElementById('taskList')
form.addEventListener('submit',(e)=>{
    e.preventDefault(e)
    const name = e.target.name.value
    const surname = e.target.surname.value
    const pass = e.target.pass.value

    const userInfo = {
        name,
        surname,
        pass
    }
    console.log(userInfo)
    p.textContent = 'name ' + name +' surname ' + surname
    e.target.reset()
})


