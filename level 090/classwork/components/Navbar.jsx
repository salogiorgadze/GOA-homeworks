import { Link } from "react-router"
function Navbar(){
    return(
        <nav className="flex items-center gap-6 bg-blue-500 pt-5 pb-5 pl-5">
            <Link to={'/'} className="text-lg font-medium hover:text-red-400 transition">Home</Link>
            <Link to={'/about'} className="text-lg font-medium hover:text-red-400 transition">About</Link>
            <Link to={'/contact'} className="text-lg font-medium hover:text-red-400 transition">Contact</Link>
        </nav>
    )
}
export default Navbar 