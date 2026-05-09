const events = require('events')

const authEmitter = new events.EventEmitter()

const users = []
let currentUser = null;

authEmitter.on('signup', ({username, password}) => {
    const userExsists = users.find(user => user.username === username)

    if(userExsists) {
        console.log('User already exists')
    } else {
        users.push({username, password})
        console.log(`registered: ${username}`)
    }
})

authEmitter.on('login', ({username, password}) => {
    const user = users.find(user => user.username === username)

    if(!user){
        console.log('user isnt registered')
    } else if (user.password !== password){
        console.log('password is incorrect')
    } else {
        currentUser = user;
        console.log(`welcome ${username}`)
    }
})

authEmitter.on('logout', () => {
  if (!currentUser) {
    console.log("Nobody is logged in");
  } else {
    console.log(`Goodbye ${currentUser.username}`);
    currentUser = null;
  }
});

authEmitter.emit('signup', {username: 'sally', password: 'sal05'})
authEmitter.emit('login', {username: 'sally', password: 'sal05'})
authEmitter.emit('logout', {username: 'sally', password: 'sal05'})

process.stdin.on('data', (data) => {
    const [a, op, b] = data.toString().trim().split(' ')

    if (op == '+'){
        console.log(Number(a) + Number(b))
    }
})