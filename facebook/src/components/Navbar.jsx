import {Link} from 'react-router'
function Navbar(){
    return(
        <div className='bg-blue-400 flex justify-around p-5 font-bold'>
            <h1 className='text-2xl'>FACEBOOK</h1>
            <div>
                <Link to={'/'} className='pr-3'>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    )
}
export default Navbar