import { useState } from "react"

const useTheme = () => {
    const [theme,setTheme] = useState('white');
    const handleClick = () => {
        setTheme(prev => prev === 'white' ? 'black' : 'white')
    }
    return {handleClick,theme};
}
export default useTheme;