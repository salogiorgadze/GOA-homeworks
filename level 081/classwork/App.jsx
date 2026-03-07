import {useState} from "react"
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }
  function handleCreate() {
    const newUser = { name, email, password };
    setUsers([...users,newUser])
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <main>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="email" value={email} onChange={handleEmailChange} />
      <input type="password" value={password} onChange={handlePasswordChange} />

      <button onClick={handleCreate}>Create Account</button>

      <ul>
        {users.map(function(user, i) {
          return <li key={i}>{user.name}{user.email}{user.password}</li>;
        })}
      </ul>
    </main>
  );
}
export default App