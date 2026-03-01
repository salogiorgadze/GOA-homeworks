import { useState } from "react"
function App() {
  const [user,setUser] = useState({
    name:'',
    email:'',
    pass:''
  })
  const handleChange = (e) => {
    const {name,value} = e.target
    setUser({...user,[name]:value})
  }

  return(
    <div>
      <form>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>
        <input type="email" name="email" value={user.email} onChange={handleChange}/>
        <input type="password" name="pass" value={user.pass} onChange={handleChange} />
      </form>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p></p>
      </div>
    </div>
  )
}



export default App




App.jsx