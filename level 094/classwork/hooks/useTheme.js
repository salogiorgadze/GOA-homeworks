import { useState } from "react"

const useTheme = (initValue = 'light') => {
    const [theme,setTheme] = useState(initValue);
    const handleClick = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
    return {handleClick,theme};
}
export default useTheme;