import { useState } from "react"

const useToggleText = (initValue = 'show text') => {
    const [text,setText] = useState(initValue);

    const toggleText = () => {
        setText(prev => prev === 'show text' ? 'hide text' : 'show text')
    }
    return {text,toggleText};
}
export default useToggleText