import {toast} from 'react-toastify'
function Home(){

    const handleClick = () => {
        toast.success('yay!')
    }
    return(
        <div className="flex justify-center mt-5 ">
            <h1 className='text-center'>Home Page</h1>
            <img src="" alt="" />
            <button onClick={handleClick} className='border'>click here</button>
        </div>
    )
}
export default Home