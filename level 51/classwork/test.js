// const inputField = document.querySelector('input')
// const paragraph = document.querySelector('p')

// inputField.addEventListener('input',(e)=>{
//     paragraph.textContent = `Hello ${inputField.value}`
// })

class Account{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class AccountManager{
    constructor(){
        this.account = []
    }
    register(name,email,password){
        const isExsists = this.account.find(acc=> acc.email === email)
        if (isExsists){
            alert('The user with this email exsists')
            return;
        }
        const account = new Account(name,email,password)
        this.account.push(account)
        alert('account created successfully')
    }
}

const form = document.querySelector('form')
const accountManager = new AccountManager()

form.addEventListener('submit',(e)=> {
    e.preventDefault()
    const name = form.fullname.value
    const email = form.email.value
    const password = form.password.value
    accountManager.register(name,email,password)
    console.log(accountManager.account)
})