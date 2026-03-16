import {Routes,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
function App() {
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <ToastContainer/>
    </>

  )

}
export default App

