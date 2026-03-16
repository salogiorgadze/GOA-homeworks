import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { Routes,Route } from 'react-router'
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return(
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  )

}
export default App