import { createContext, useState,useEffect } from "react";
import { getData, setData } from "../utils/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(() => {
        return getData('user')
    });
    const navigate = useNavigate()


    const autoLogin = () => {
    const activeUser = getData('activeUser');
    if (!activeUser) return;

    setUser(activeUser);
    navigate(`/profile/${activeUser.id}`);
};

    useEffect(() => {
        
        autoLogin();
    }, []);

    console.log(user)

    const signup = (account ) => {
        const accounts = getData('accounts') || [];
        const isExsists = accounts.some((acc) => acc.email === account.email)

        if (isExsists){
            toast.error('this email is already exsists');
            return;
        }
        accounts.push(account)
        setData('accounts',accounts)
        toast.success('account successfully registered!')
        navigate('/signin')
    }

    const signin = (account) => {
        const accounts = getData('accounts') || [];
        const activeUser = accounts.find((acc) => acc.email === account.email && acc.password === account.password)

        if (!activeUser){
            toast.error('account does not exsists!');
            return;
        }
        setUser(activeUser);
        setData('activeUser', activeUser);
        toast.success('successfully signed in!');
        navigate(`/profile/${activeUser.id}`)
    }

    const logout = () => {
        setUser(null);
        toast.success('logged out successfully!');
        navigate('/')

    }
    return(
        <AuthContext.Provider value={{signup,signin,user,logout,autoLogin}}>
            {children}
        </AuthContext.Provider>
    )
    
}