import { toast } from "react-toastify"

function About(){
    const handleInfo = () => {
        toast.success('info!')
    }
    return(
        <div>
            <h1>About</h1>
            <button onClick={handleInfo}>click now</button>
        </div>
    )
}
export default About