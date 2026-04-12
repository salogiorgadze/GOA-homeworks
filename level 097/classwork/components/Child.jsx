import { useContext } from "react"
import { ColorContext } from "../contexts/ColorContext"

function Child(){
    const {color,backgroundColor} = useContext(ColorContext)
    return(
        <h1 style={{color:color,backgroundColor:backgroundColor}}>The Color is {color}</h1>
    )
}
export default Child