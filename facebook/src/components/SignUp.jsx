import { useState } from "react";

function SignUp(){
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [pass,setPass] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        const user = {
            name,surname,pass
    }
    localStorage.setItem('user',JSON.stringify(user))

    alert('user registered successfully')
    }

    return(
        <div>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/>
                <button type="submit" onClick={handleSignUp}>register</button>
            </form>
        </div>
    )
}

export default SignUp