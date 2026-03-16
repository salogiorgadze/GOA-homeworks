import {toast} from 'react-toastify'
function Contact(){
    function handleClick(){
            toast.success('message sent');
        }
    const test = () => {
        toast.error('warning!')
    }
    return(
        <div>
            <h1>This is Contact page</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={test}>click again</button>
        </div>
    )
}
export default Contact