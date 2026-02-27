import { useState } from "react"

function CharacterCounter(){
    const [text,setText] = useState('');
    const maxLength = 200;

    const handleChange = (e) => {
        setText(e.target.value)
        if (text.length == 199){
            alert('max is 200')
            return;
        }
    }
    return(
        <div>
            <h2>Character Counter</h2>
            <input type="text" value={text} maxLength={maxLength} onChange={handleChange}/>
            <h1>{text}</h1>
            <h2>characters: {text.length}</h2>
            <h3>ramaining characters: {maxLength - text.length}</h3>
        </div>
    )
}
export default CharacterCounter