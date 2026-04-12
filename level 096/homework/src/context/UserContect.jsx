import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [ user,setUser] = useState({
        name:'John',
        email:'exmaple@gmail.com',
        age:16
    })
    const handleUpdateAge = () => {
        setUser((prev) => ({...prev,age:prev.age += 1}))
    };

    return(
        <UserContext.Provider value={{user,handleUpdateAge}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider